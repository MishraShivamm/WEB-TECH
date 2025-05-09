//check if all the numbers in an array are multiple of 10 or not.

let arr = [10,70,90,10,5,80,90];
let check = arr.every((el)=> el%10 == 0);
console.log(check);

//Create a function too find minimum in an array

let check_arr = arr.reduce((min,el)=>{
    if(min>el){
        return el;
    }
    else{
        return min;
    }

})

console.log(check_arr);