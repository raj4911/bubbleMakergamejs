
function makeBubbles(){
    var bubbles = '';
    for(var i = 0;i<=271;i++){
        var Bnum = Math.floor(Math.random()*10);
        bubbles += `<div id="bubble">${Bnum}</div>`;
    }
    document.querySelector("#b_panel").innerHTML = bubbles;
}

var timer = 60;
function runTimer(){
    
       var timerint = setInterval(() => {
        if(timer > 0 ){
           timer--;
           document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerint);
            document.querySelector("#b_panel").textContent = '';
            document.querySelector("#b_panel").innerHTML = '<h1 style="margin:0 auto;">GAME OVER</h1>';
            

        }
        }, 1000);
}

var rhn=0;
function getHit(){
    rhn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rhn;
}

var score = 0;
function scoreValue(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#b_panel").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
        if(clickedNum === rhn){
            scoreValue();
            makeBubbles();
            getHit();
        }
});

scoreValue();

getHit();

runTimer();
makeBubbles();


