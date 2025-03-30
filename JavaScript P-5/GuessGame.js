let max =prompt("Enter Max number!");
let guess = Math.floor(Math.random()*max)+1;

let user_guess = prompt("Enter your Guess");

while(true){
    if(guess== "quit"){
        console.log("User Quit");
        break;
    } else if(guess == user_guess){
        console.log("You Guessed it Right");
        break;
    }else{
        console.log("Guess Again");
    }
}