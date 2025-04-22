/* Factory function : The function which creates new functions is called factory function.
*/

// let odd = function(n){
    // if(n%2 !=0){
    //     console.log("N is ODD");
    // } else if(n%2 == 0){
    //     console.log("N is even");
    // }
// }
// odd(3);


// Other way of doing it is 
// let odd = function (n){
//     console.log(!(n%2==0));
// }
// odd(8);

// One with Factory Function

function oddneven(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    } else if(request =="even"){
        return function(n){
            console.log(n%2 == 0)
        }
    } else{
        console.log("Wrong Request");
    }
}

let check = oddneven("odd");
check(7);
