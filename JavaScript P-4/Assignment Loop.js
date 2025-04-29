//Question 1

let arr = [1,2,3,4,5,6,7,8,9];
let num = 3;
 for(let i = 0; i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    } 
 }
 console.log(arr);