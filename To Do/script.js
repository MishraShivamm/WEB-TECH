let inp = document.querySelector("input");
let ol = document.querySelector("ol");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = inp.value;

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "delete";
    dltbtn.classList.add  = "delete";

    li.appendChild(dltbtn);
    
    ol.appendChild(li);
    console.log("clicked");
    inp.value = " ";
})
