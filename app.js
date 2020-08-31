var score,roundScore,activePlayer,gamePlay;

init();


document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlay){
        //  This is the annonymous function (without a name and acn only be called from here)
    //  Steps:
    // 1. Random number
    var dice=Math.floor(Math.random()*6)+1;
    // 2. Display the result.
    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    // 3. update the roundScore if the dice is NOT the 1:)
    if(dice!==1){
        // Update;
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }
    else{
        // Other player chance;
       nextPlayer();

    }
    }
    
});


document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlay){
        // add the CURRENT SCORE TO GLOBAL SCORE

    score[activePlayer]+=roundScore;


    // Update the UI

    document.querySelector('#score-'+activePlayer).textContent=score[activePlayer];
    
    // Check if the player won the game.
    if(score[activePlayer]>=10){
        document.getElementById('name-'+activePlayer).innerHTML='<em>WINNER!</em>';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlay=false;
    }
    else{
        // nextPlayer
    nextPlayer();
    }
    }


});

function nextPlayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;
    // if(activePlayer===0){
    //     activePlayer=1;
    // }else{
    //     activePlayer=0;
    // }
    roundScore=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display='none';
}
function init(){
    score=[0,0];
    roundScore=0;
    activePlayer=0;
    gamePlay=true;

    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player-1';
    document.getElementById('name-1').textContent='Player-2';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}


document.querySelector('.btn-new').addEventListener('click',init)






// dice=Math.floor(Math.random()*6)+1;
// console.log(dice);

// document.querySelector('#current-'+activePlayer).textContent=dice; // Setter
// document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';

// var x=document.querySelector('#score-1').textContent; //Getter, So textContent is used for getting and setting the value...
// console.log(x);


