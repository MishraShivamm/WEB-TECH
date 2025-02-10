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

 /* Sort method:
 it sorts an array.  
 the sort method  changes the values into string and then sort them .*/


 /*Array references :
 let's  understand this with an example : let arr = [1,2,3] , so in this "arr " is the refernce variable
 and it stoores the memory address of the  variable in the array.
 Let's understand this with another example :
 let arr1 = ['a','b','c'];
 let arrCopy = arr1;
 now arr1 = arrCopy will be true , because they both are pointing to the same value stored in the memory 
 */

 /* Constant Array :
 let's also understand this with an example :
 const array = [1,2,3];
 we can add or remove any value from this array , but we can't change it's complete value.
 */

 /*Nested Arrays or Multidimensional Array: Array of arrays.
 
 */



 

