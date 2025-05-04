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


