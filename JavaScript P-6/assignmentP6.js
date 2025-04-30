//Question 1: Write a function to return all the array elements greater then the number.

let arr = [1,2,5,8,3,6,8,3,643,89,10];
let num = 8;
function getElements(arr, num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=num){
            console.log(arr[i]);
        }
    }
}
getElements(arr,num);


//Question 2: Write a JS function to extract unique characters from a string.

let str = "acdbabcdcbdaef";
function getUnique(str){
    let ans ="";
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(ans.indexOf(char)== -1){
            ans += char;
        }
    }
    console.log(ans);
}

getUnique(str);