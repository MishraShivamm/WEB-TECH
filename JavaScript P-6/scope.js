/* SCOPE

Scopre determines the accessibility of variables , functions and objects from different parts of the code.

. Function
. Block
. Lexical
. Global : this means when we declare a variable anywhere in our code.
*/

//Function Scope : The variables declared inside the function are not accessible outside the function.

//Block Scope : The variable declared inside {} the block cannot be accessed outside the block.

//Lexical Scope : A variable declared out a function can be accessible inside another function after the variable declaration. [The opposite is not true.]


let greet = "hello";

function changeGreet(){
    greet = "namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
    innerGreet();
}
console.log(greet);
changeGreet();



