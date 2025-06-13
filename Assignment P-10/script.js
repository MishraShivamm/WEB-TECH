let btn = document.querySelector("button");
let divs = document.querySelectorAll("div"); 

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

