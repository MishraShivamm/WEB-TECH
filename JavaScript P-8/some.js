// Every : Returns true if some of the elements of array gives true for some function . Else returns false.
//syntax : arr.some(some function definiton or name)

let arr = [1,2,3,4,6];
let new_arr = arr.some((el) => el%2 == 0);
