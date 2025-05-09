//Flter : let abc = arr.filter(some function definition or name)
//I also creates a new array but in this if the output is True only then it'll be added to new array else it won't be added to the new array.

let array = [1,4,6,2,7,9,29];

let new_arr = array.filter((num) => 
    {return num % 2 == 0});
console.log(new_arr);