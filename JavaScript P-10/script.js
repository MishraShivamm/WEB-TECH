//DOM Events : Events are signals that something has occured.(user input/actions).
// onclick 
// onmouseenter

let btns = document.querySelectorAll("button");
for (btn of btns){
    btn.onclick = function (){
    console.log("Kisne Hath Lgaya");
    }
    btn.onmouseenter = function (){
    console.log("Upr Upr se");
    };
}