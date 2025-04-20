/* Higher order Function

If a function does one or more 
 takes one or multiple function as an argument
 returns a function

*/

function mulgreet (func ,n){
    for(let i=1;i<=n;i++){
        func();
    }
}

let greet = function(){
    console.log("Hello");
}
