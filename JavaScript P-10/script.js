//DOM Events : Events are signals that something has occured.(user input/actions).
// onclick 
// onmouseenter

let btn = document.querySelector("button");
for (let btns of btn){
    btn.onclick = function (){
    console.log("Kisne Hath Lgaya");
}
btn.onmouseenter = function (){
    console.log("Upr Upr se");
};
}