const homeScoreDisplayVal= document.getElementById('home-score-display');
const guestScoreDisplayVal= document.getElementById('guest-score-display');
const homePlusOneBtn = document.getElementById('home-plus-one');
const homePlusTwoBtn = document.getElementById('home-plus-two');
const homePlusThreeBtn = document.getElementById('home-plus-three');
const guestPlusOneBtn = document.getElementById('guest-plus-one');
const guestPlusTwoBtn = document.getElementById('guest-plus-two');
const guestPlusThreeBtn = document.getElementById('guest-plus-three');
const resetBtn= document.getElementById('reset-btn');

let homeScore= 0;
let guestScore= 0;

document.addEventListener('click', function(e){
    if(e.target.id === homePlusOneBtn.id){
        homeScore++;
    }else if(e.target.id === homePlusTwoBtn.id){
        homeScore= homeScore+2;
    }else if(e.target.id === homePlusThreeBtn.id){
        homeScore= homeScore+3; 
    }else if(e.target.id === guestPlusOneBtn.id){
        guestScore++;
    }else if(e.target.id === guestPlusTwoBtn.id){
        guestScore= guestScore+2;
    }else if(e.target.id === guestPlusThreeBtn.id){
        guestScore = guestScore+3;
    }else if(e.target.id === resetBtn.id){
        homeScore=0;
        guestScore=0;
    }
    displayScores()
})


function displayScores(){
    homeScoreDisplayVal.innerText= homeScore;
    guestScoreDisplayVal.innerText= guestScore;
}


displayScores()