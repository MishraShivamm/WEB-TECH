/* Methods : Actions that can be performed on an object.
    * The functions which are defined inside an object are called methods.
    * A function that is a property of an object is called method.
    * All methods are functions, but not all functions are methods.
*/

const calculate={
    add:function(a,b){
        console.log(a+b);
        //return(a+b);
    },
    sub:function(a,b){
        console.log(a-b);
        //return(a-b);
    },
    mul:function(a,b){
        console.log(a*b);
    }
}
calculate.add(7,9);

/* Method (Shorthand)

const obj = {
    add(a,b) {
        return a+b;
    }
}

*/