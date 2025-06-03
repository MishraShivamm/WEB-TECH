// Q1. Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”;

let inp = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click Me";

let bdy = document.querySelector('body');
bdy.appendChild(inp);
bdy.appendChild(btn);

//Q2. 