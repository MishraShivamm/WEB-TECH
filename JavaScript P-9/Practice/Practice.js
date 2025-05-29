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
document.querySelector("body").append(p);
p.ClassList.add('red');
