




var dice,scores ,roundscores, activePlayer,gamePlaying,setscore;
init();
    document.querySelector(".btn-roll").addEventListener('click', function(){
        if(gamePlaying){
                    // 1. Random number

 
        dice=Math.floor(Math.random()*6)+1;
                // 1. Random number

        var diceDOM=document.querySelector("#dice-1");
        

          diceDOM.style.display="block";

        diceDOM.src="dice-"+dice+".png";

                //3. Update the round score IF the rolled number was NOT a 1


    
        
     
        if(dice!==1)
        {       
     //Add score
              roundscores+=dice;
    
              document.querySelector("#current-"+activePlayer).textContent=roundscores;
        }
        else{
             //Next player
           nextPlayer();
        }
        }
    });

 
 
document.querySelector(".btn-hold").addEventListener('click',function(){
    if(gamePlaying)
    {
         // Add CURRENT score to GLOBAL score
        scores[activePlayer]+=roundscores;
          // Update the UI
        var diceDOM=document.querySelector("#dice-1");
         console.log(setscore);
        diceDOM.style.display="none";
  // Check if player won the game
        document.getElementById("score-"+activePlayer).innerHTML=scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying=false;

        }
        else
        {
    nextPlayer();
        }
    }
    });


function nextPlayer()
{
    activePlayer ===1? activePlayer = 0: activePlayer = 1;
    roundscores=0;
    document.querySelector("#current-0").textContent=0;
    document.querySelector("#current-1").textContent=0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}
document.querySelector(".btn-new").addEventListener('click',init);
function init()
{
    gamePlaying=true;
    scores=[0,0];
 roundscores=0;
 activePlayer=0;
 document.getElementById("score-0").innerHTML=0;
 document.getElementById("score-1").innerHTML=0;

 document.querySelector('#name-0').textContent = 'Player 1';
 document.querySelector('#name-1').textContent = 'Player 2';
 document.querySelector("#current-0").textContent=0;
 document.querySelector("#current-1").textContent=0;
 document.querySelector("#dice-1").style.display="none";
 document.querySelector(".player-0-panel").classList.remove("active");
 document.querySelector(".player-1-panel").classList.remove("active");
 document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.add("active");
   
}



 