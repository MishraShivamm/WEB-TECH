/*
Add the following to the container only using JS and DOM methods.
(i) a <p> with red text saying "Hey! I'm red".
(ii) an <h3> with blue text saying "Hey! I'm blue h3".
(iii) a <div> with black border and pink background color with the following elements inside of it:
    (a) another <h1> that says "i'm in div".
    (b) a <p> that says "Me too".
*/

//Ans of (i)

let p = document.createElement('p');
p.innerText = "Hey! I'm red";
let body = document.querySelector("body")
body.append(p);
p.classList.add('red');


//Ans of (ii)

let h3 = document.createElement('h3');
h3.innerText = "Hey! I'm blue h3";
let body1 = document.querySelector("body")
body.append(h3);
h3.classList.add('blue');

//Ans of (iii)

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para = document.createElement('p');
h1.innerText = "In div";
p.innerText = "Me too";

div.append('h1');
div.append('p');

document.querySelector('body').append('div');
//Ans of (v)
let heading = document.createElement("h1");
heading.textContent = "DOM Practice";
heading.style.textDecoration = "underline";
heading.style.color = "purple";
document.body.appendChild(heading);
