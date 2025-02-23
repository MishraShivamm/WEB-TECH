/* Loops
 Used to iterate a piece of Code 
*/
//Print Odd numbers

for (let i = 1; i <=15;i=i+2){
    console.log(i)
}

//Print Even numbers

for (let even = 0; even <=10; even = even+2){
    console.log(even);
}

//Table of any number using 4 loop in simplest mannner
let n = prompt("Enter the number");
n= parseInt(n); // it'll convert string to int 
for(let i = n ; i<=n*10;i=i+n){
    console.log(i);
}

