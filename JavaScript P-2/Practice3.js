let str = prompt("Enter the prompt");
if(str[0]== "a" && str.length >3){
    console.log("String is Good");
}
else{
    console.log("Write another string");
}

let num=12;
if((num%3=== 0)&& ((num+1 == 15) || (num-1 == 11))){
    console.log("safe");
} else{
    console.log("unsafe");
}