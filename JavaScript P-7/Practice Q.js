// Write an arrow function that returns the square of n.

// const square = (n)=> {
//     console.log(n*n);
// }
// square(4);

//Write a function that prints "Hello World" 5 times at intervals of 2s each.

// const print = () => {
//     let count = 0;
//     const intervals = setInterval(() => {
//         console.log("Hello World");
//         count++;
//         if(count == 5){
//             clearInterval(intervals);
//         };
//     }, 2000);
// }
// print();

//Other way of doing the same problem is

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 12000);