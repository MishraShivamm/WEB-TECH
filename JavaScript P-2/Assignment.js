let numm = prompt("Enter number");
let num = Number(numm);
if(num%10 == 0){
    console.log("Good");
} else{
    console.log("Bad");
}

let name = "Shivam";
let age = "23";
alert(`${name} is ${age} years old`);

let month = prompt("Enter the quarter number");

switch (month) {
    case "1":
        console.log("January", "February","March","April");
        break;
    case "2":
        console.log("May", "June","July","August");
        break;
    case "3":
        console.log("September", "October","November","December");
        break;
    default:
        console.log("Enter correct quarter number");
        break;
}


let str = prompt("Enter prompt");
if((str[0]=='a'||str[0]=="A" )&& str.length > 5){
    console.log("golden string");
}
else{
    console.log("Not a golden string");
}

let num1 = prompt("Enter A");
let num2 = prompt("Enter B");
let num3 = prompt("Enter C");

if(num1 > num2 && num1 > num3){
    console.log("Num1 is the greatest");
} else if(num2>num1 && num2>num3){
    console.log("Num2 is the greatest");
} else{
    console.log("Num3 is greatest");
}


let a = prompt("Enter num1");
let b = prompt("Enter num2");

if(a.endsWith("2") && b.endsWith("2")){
    console.log("Both ends with 2");
}
else{
    console.log("Numbers are different");
}