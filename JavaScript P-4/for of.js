/* For of Loop
for(element of Colection){
// do something
} 
*/

let ch = "jishi";
for(char of ch){
    console.log(char);
}

//Nested For of Loop

let heros =  [["ironman","Captain america","Hulk"],["superman","Batman","Wonder women"]];
for(list of heros){
    for(hero of list){
        console.log(hero);
    }
}