// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow","red","purple","green"];
// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");
// document.addEventListener("keypress", function (){
//     if(started == false){
//         console.log("Game started");
//         started = true;
//         levelUp();
//     }
// })

// function gameFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },250);
// }

// function userFlash(btn){
//     btn.classList.add("userFlash");
//     setTimeout(function(){
//         btn.classList.remove("userFlash");
//     },250);
// }


// function levelUp(){
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`

//     let randIdx = Math.floor(Math.random()*3);
//     let randColor = btns[randIdx]; 
//     let randBtn = document.querySelector(`.${randColor}`);
//     // console.log(randIdx);
//     // console.log(randColor);
//     // console.log(randBtn);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns(){
//     let idx = level - 1;
//     if(userSeq[idx] === gameSeq[idx]){
//         console.log("same value");
//         if(userSeq.length === gameSeq.length){
//             setTimeout(levelUp,1000);
//         }
//     }else{
//         h2.innerText = `Game Over ! Press any key to start`;
//         reset();
//     }

// }
// function btnPress(){
//     let btn = this;
//     userFlash(btn);

//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);

//     checkAns(userSeq.length-1);
// }
// let allBtn = document.querySelectorAll(".btn");
// for(btn of allBtn){
//     btn.addEventListener("click",btnPress);
// }
// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }


let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4); // FIXED: *4 to include all 4 buttons
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) { // FIXED: Accept index
    if (userSeq[idx] === gameSeq[idx]) {
        console.log("Correct");
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        reset();
    }
}








function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id"); // FIXED: added let
    userSeq.push(userColor);

    checkAns(userSeq.length - 1); // FIXED: pass index
}



let allBtn = document.querySelectorAll(".btn");

for (let btn of allBtn) { // FIXED: added let
    btn.addEventListener("click", btnPress);
}





function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;} 

