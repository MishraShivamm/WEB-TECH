// Qs4. Write a function called doubleAndReturn Args which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled.

let doubleAndReturn = (arr,...args)=>[...arr,...args.map(v=>v*2)];
console.log(doubleAndReturn([12,34,56,865],5,6,4,7,8,3,2));