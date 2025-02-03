//Trim method :- Removes the whitespaces from both the ends and returns a new one.
//String are immutable in JavaScript.


let str = "            apna colege     ";
let strr=str.trim();
console.log(strr);


//indexOf method

let find = strr.indexOf("a");
console.log(find);


//Method Chaining : use one method after the another . the sequence is from left to  right.
//For example : strr.indexof("a").trim();


//Slice : Returns the part of original string as a new string. str.slice(start,end); or str.slice(start); and if we pass str.slice(-num) means if we pass negative value then this method will subtract the value which we provided from the original length of the string.  for example : let str ="abcdefgh"; str.slice(2); 

//Replace : searches the value in the string and returns the new string with the value replaced. for example: let str : qwerty; str.replace(we, ew);