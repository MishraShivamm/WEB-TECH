//Qs1.Square and sum the array elements using the arrow function and then find the average of the array.

let array = [1,2,3,4];
let newArrmul = array.map(num => num * num);
console.log(newArrmul);
let newArr = newArrmul.reduce((sum,el)=> sum +el);
console.log(newArr); 
let average = newArr/array.length;
console.log(average); 