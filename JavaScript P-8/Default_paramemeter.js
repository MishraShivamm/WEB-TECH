//Default parameter : Giving a default parameter to the arguments.

function mul(a,b=9){
    console.log(a*b);
}
mul(3);

/* If suppose we do this 
function mul(a=5,b){
    console.log(a*b);
}
mul(3);

So the output of this will be "NaN" 

Reason for this is that value is assigned in order that is in line 12 when we pass 3 it'll be assigned to a not b , so be will remain undefined.

*/
