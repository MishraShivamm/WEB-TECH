let fruits = ["mango","apple","banana","lichi","grapes","Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i,fruits[i]);
}


//Nested Array

let heroes = [["ironman","Captain america","Hulk"],["superman","Batman","Wonder women"]];
for(let i = 0; i<heroes.length;i++){
    console.log(heroes[i]);
    for(let j = 0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
    }
}