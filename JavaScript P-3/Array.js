//Arrays are mutable i.e we can change it's values.

//Push and Pop : we use push when we have to add a value or something inside the araay  in last.For example :  let arr = ["a","b","c","d"]; arr.push("e"); 
// We use Pop to remove last element from the array. 

/* And if we have to add the value to the start and remove it from start we'll use Unshift and Shift.
Unshift :We use it to add the value to  start of Array. 
Shift: Deletes the value from start and returns the array . */ 

let array = ["january","july","march","august"];
array[0]="july";
array[1]="june";
console.log(array);
/* another way of doing it is using shift / unshift method
array.shift()";
array.shift()";
array.unshift("july");
console.log(array);
 */

/* indexOf and includes method :
 indexOf :return index of something
 includes : search for a value */

 /* concat and reverse method :
 concat: merge 2 array. for example : 1st array.concat(2nd array);
 reverse : reverse an array. */

 /* Slice method: copies a portion of an array.
 and suppose we use array.slice(-2) then this negative value means that we are printing the values from the last. */

 /* Splice method: removes/ replaces/ add elements in place.
 splice(start,deleteCount,item0...... itemN) 
 it does the changes in the orginal array.*/
 


 

