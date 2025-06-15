let btn = document.querySelector("button");
let divs = document.querySelectorAll("div");
let inp = document.querySelector("input");
let head = document.querySelector("h2");
// 2nd
inp.addEventListener("keypress", function (){
    console.log(inp.value ,"is pressed");
})
//3rd
inp.addEventListener("input", function (){
    let letter = inp.value.replace(/[^a-zA-Z]/g," ");
    console.log(inp.value ,"is pressed");
    head.innerText = letter;
})

window.addEventListener("scroll", function () {
    divs.forEach(div => {
        div.style.backgroundColor = "green";
    });
    btn.style.backgroundColor = "blue";
});
window.addEventListener("load", function () {
    divs.forEach(div => {
        div.style.backgroundColor = "red";
    });
    btn.style.backgroundColor = "pink";
});

btn.addEventListener("mouseenter", function (){
    console.log("mouse moved");
    btn.style.backgroundColor = "violet";
})
btn.addEventListener("mouseout", function (){
    console.log("mouse moved");
    btn.style.backgroundColor = "brown";
})

