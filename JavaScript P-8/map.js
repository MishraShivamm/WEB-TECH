// Map syntax :
// arr.map(some function definition or name)

let arr = [2,4,6,8];
 let double = arr.map((el)=>{
    return el *2;
 });

 console.log(double);

 // Map provides a new array of the same size of the main array

 let obj =[
   {
      name:"Shivam",
      marks: 98,
   },
   {
      name:"Jiya",
      marks: 99,
   },
]
let gpa = obj.map((students) =>{
   console.log(students.marks/10);
})

 