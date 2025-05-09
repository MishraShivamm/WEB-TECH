//Every : it returns true if EVERY element of an array gives true for some functon else returns false.
//Syntax : arr.every(some function definition or name)

let arr = [2,4,6,8];
let new_arr = arr.every((el) => el%2 == 0);
console.log(new_arr);