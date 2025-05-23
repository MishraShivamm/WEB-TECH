//Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

const arrayAverage = (arr)=>{
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    let avg = sum/arr.length;
    return avg;
}
console.log(arrayAverage([2,3,4,5,6,7]));


//Write an arrow function name Even() that takes a single number as argument and return if the number is even or not.

const even = (n) => {
    if(n%2 == 0){
        return `${n} is even`;
    } else{
        return `${n} is not even`;
    }   
}
console.log(even(5));


//What will be the output of this code.

// const object = {
//     message: "Hello World",
//     logMessage (){
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000);

// It will print undefined


// What will be the output of this code

let length = 4;

function callback()  {
    console.log(this.length);
}

const object = {
    length: 5,
    method (callback){
        callback();
    },
};
object.method(callback,1,2);

//Output will be 4 and the other 2 arguments (1,2) will be ignored as we've passed only one parameter so it'll  only take one argument