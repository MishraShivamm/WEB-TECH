let nm = [1,2,3,4,5];
let final_nm = nm.reduce((res,el) => res+el);
console.log(final_nm);


//Find maximum of a array using REDUCE method

let arr = [1,2,5,3,4,7,6];
let maxArr = arr.reduce((max,el) => {
    if(el>max){
        return el;
    }else{
        return max;
    }
});
console.log(maxArr);