// Qs5.Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

let mergeObjects = (obj1,obj2)=>({...obj1,...obj2});
let newobj= mergeObjects({a:1,b:2},{c:3,d:4});
console.log(newobj);

/* OR
mergeObjects({a:1,b:2},{c:3,d:4});
console.log(mergeObjects({a:1,b:2},{c:3,d:4}));
*/
