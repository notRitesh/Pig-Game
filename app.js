/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundscores, activePlayer, gamePlaying;

init();     //Initialize the screen to default display



//document.querySelector('#current-'+ activePlayer).textContent = dice;

//var x = document.querySelector('#score-0'.textContent);
//console.log(x);




//Roll-Button fuction
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
        //1.Random number
        var dice=Math.floor(Math.random() * 6) + 1;
    
        //2.Display the result
        var diceDOM=document.querySelector('.dice');
        diceDOM.style.display='block';
        diceDOM.src='dice-' + dice + '.png';

        //3.Update the round score if rolled number was not a 1
        if (dice !==1){


            roundscores += dice;
            document.getElementById('current-' + activePlayer).textContent = roundscores;
            //document.getElementById('current-' + activePlayer).textContent=dice;
        }
        else{
            nextPlayer();
        }
    }
});


//Hold-Button fumction
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
            //Add current score to global score
        scores[activePlayer] += roundscores;

        //update the ui
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //check if player won the game
        if (scores[activePlayer] >= 100){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        }
        else{
            //Next player
        nextPlayer();
        }
    }
});



function nextPlayer(){
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
        roundscores = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
}



//New-Game button function
document.querySelector('.btn-new').addEventListener('click',init);

function init(){
alert('GAME RULES:-' + '\n' + 'The game has 2 players, playing in rounds' + '\n' + '- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score' + '\n' + '- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score' + '\n' + '- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it\'s the next player\'s turn' + '\n' + '- The player can choose to \'Hold\', which means that his ROUND score gets added to his GLBAL score. After that, it\'s the next player\'s turn' + '\n' + '- The first player to reach 100 points on GLOBAL score wins the game');
scores = [0,0];
roundscores = 0;
activePlayer = 0;
gamePlaying = true;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
                
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
                
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
                
document.querySelector('.player-0-panel').classList.add('active');

}

















