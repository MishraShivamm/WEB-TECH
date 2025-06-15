let inp = document.querySelector("input");
let ol = document.querySelector("ol");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = inp.value;
    ol.appendChild(li);
    console.log("clicked");
    inp.value = " ";
})
