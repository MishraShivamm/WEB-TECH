// Q1. Create a new input and button element on the page using JavaScript only. Set the text of button to “Click me”;

let inp = document.createElement("input");
let btn = document.createElement("button");
btn.innerText = "Click Me";

let bdy = document.querySelector('body');
bdy.appendChild(inp);
bdy.appendChild(btn);

/*Q2.Add following attributes to the element:-
Change placeholder value of input to “username”
Change the id of button to “btn” */

inp.placeholder = "Username";
btn.id = "btn";

// Q3. Access the btn using the querySelector and button id.Change the button background color to blue and text color to white.

