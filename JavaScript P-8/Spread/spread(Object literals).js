let obj = {
    name: "Shivam",
    email: "shivi@gmail.com"
}

let objCopy ={...obj,id:123};
console.log(objCopy);

let arr = [1,2,3,4,5,6];
let obj_arr = {...arr};
console.log(obj_arr);
let str = "Hello";
let obj_str = {...str};
console.log(obj_str);