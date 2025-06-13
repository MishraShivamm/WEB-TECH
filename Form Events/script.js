let form = document.querySelector("form");

form.addEventListener("submit", function (event){
    event.preventDefault();

    // let user = document.querySelector("#user");
    // let pass = document.querySelector("#pass");
    // console.log(user.value);
    // console.log(pass.value);
    // alert("form submitted")
})

let user = document.querySelector("#user");

user.addEventListener("change", function (){
    console.log("Value Changed");
    console.log("Final value is:",user.value);
})
user.addEventListener("input", function (){
    console.log("is in process");
    console.log("Final value is:",user.value);
})


let text = document.querySelector("#text");
let p = document.querySelector("p");
text.addEventListener("input",function (){
    console.log("final value is",text.value);
    p.innerText = text.value;
})