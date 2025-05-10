/* Spread (Array Literals)

Let's understand this with an example 
*/
let arr =  [1,3,5,7,9,2];
let new_arr = [...arr];
console.log(new_arr);

//As we can see the new_arr is a copy of arr , but if we do any changes , suppose we want to push a new number in the new_arr , it won't do any changes in the arr . let's take example of it too.

new_arr.push(98);
console.log(new_arr); // output :[1, 3, 5, 7, 9, 2, 98]
console.log(arr); // output :[1, 3, 5, 7, 9, 2]


let str = "Hello Hello";
console.log(...str);
