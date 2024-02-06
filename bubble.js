let time = 30;
let score = 0;
let rn = 0;

function newHit() {
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = rn;
}

function makeBubble() {
    let clutter = "";

for (let i = 1; i<=160; i++) {
    let n = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${n}</div>`;
}

document.querySelector(".pbot").innerHTML = clutter;
}

function iScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function runTime() {
    let timeInt = setInterval(function() {
        if (time > 0) {
            time--;
            document.querySelector("#timeval").textContent = time;
        } else {
            clearInterval(timeInt);
            document.querySelector(".pbot").innerHTML = "<h1>Game Over</h1>"
        }
    }, 1000);
}

document.querySelector(".pbot").addEventListener("click", function(dets) {
    let clickedNum = Number(dets.target.textContent);
    if (clickedNum === rn) {
        iScore();
        makeBubble();
        newHit();
    }
});

runTime();
makeBubble();
newHit();
