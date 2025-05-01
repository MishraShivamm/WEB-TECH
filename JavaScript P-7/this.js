//This keyword: "This" keywords refers to an object that is executing the current piece of code.

const obj = {
    name:"shivi",
    age:"24",
    getname() {
        console.log(this.age); 
        console.log(this); 
    }
}
console.log(obj.getname());

let abc = 23;
console.log(abc);
