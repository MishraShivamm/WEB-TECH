/* Factory function : The function which creates new functions is called factory function.
*/

let odd = function(n){
    if(n%2 !=0){
        console.log("N is ODD");
    } else if(n%2 == 0){
        console.log("N is even");
    }
}
odd(2);