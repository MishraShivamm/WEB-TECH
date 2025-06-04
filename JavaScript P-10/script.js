//DOM Events : Events are signals that something has occured.(user input/actions).
// onclick 
// onmouseenter

let btn = document.querySelector("button");
btn.onclick = function (){
    console.log("Kisne Hath Lgaya");
}
btn.onmouseenter = function (){
    console.log("Upr Upr se");
};