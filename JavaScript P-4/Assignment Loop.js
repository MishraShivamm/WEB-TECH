/*Question 1
Write a JS program to delete all occurrences of element ‘num’ in a given array.Example:if arr=[1,2,3,4,5,6,2,3] & num = 2 Result should be arr=[1,3,4,5,6,3] */

let arr = [1,2,3,4,5,6,7,8,9];
let num = 3;
 for(let i = 0; i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    } 
 }
 console.log(arr);

 //Write a JS program to find the no of digits in a number.Example: if number=287152, count=6

//  let numm = 2345678;
//  let count = 0;
//  let copy = numm;

//  while (copy >0){
//     count ++;
//     copy = Math.floor(copy/10);
// }

// console.log(count);


//Question 3: 

let no = 2345678;
let sum = 0;
let cop = no;

while (cop>0){
    digit = cop %10;
    sum += digit;
    cop= Math.floor(cop/10);
}

console.log(sum);

//Question 4 : 

// let fact = prompt("Enter the number you want the factorial of");
// let factorial = 1;

// for (let i = 1;i<=n;i++){
//     factorial *=i;
// }
// console.log(factorial);

//Question 5:

let array = [1,3,5,8,6,9,10];
let largest = 0;

for(let i = 0;i<array.length;i++){
    if(largest <array[i]){
        largest =array[i];
    }
}
console.log(largest);