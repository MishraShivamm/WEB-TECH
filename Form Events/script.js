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

