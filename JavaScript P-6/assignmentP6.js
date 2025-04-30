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

//Queston 3:Write a JS Function that accepts a list of country names as input and returns the longest country name as output.

let country = ["Aus","Ger","NZ","UK","Dubai","India"];
function long(country){
    let ansIdx = 0;
    for(let i=0;i<country.length;i++){
        let anslen = country[ansIdx].length;
        let curlen = country[i].length;
        if(curlen >anslen){
            ansIdx += i;
        }
    }
    console.log(country[ansIdx],ansIdx);
}

long(country);


//Question 4: Write a JS function to count the number of vowels in the string argument.

let checkVowels = "apnacollege";

function countVowels(checkVowels){
    let count = 0;
    for(let i =0;i<checkVowels.length;i++){
        if(checkVowels.charAt(i) == 'a' ||
        checkVowels.charAt(i) == 'e' ||
        checkVowels.charAt(i) == 'i' ||
        checkVowels.charAt(i) == 'o' ||
        checkVowels.charAt(i) == 'u' ){
            count++;
        }
    }
    console.log(count);
}
countVowels(checkVowels);


//Question 5: Write a JS function to generater a random number within a range (start,end)

let start = 100;
let end = 200;

function generateRandom(start,end){
    let diff = end - start;
    console.log(Math.floor(Math.random()*diff)+start);
}
generateRandom(start,end);