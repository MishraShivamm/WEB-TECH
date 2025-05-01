const obj = {
    name:"shivi",
    age:"24",
    getname() {
        console.log(this.age); 
        console.log(this); 
    }
}
console.log(obj.getname());
