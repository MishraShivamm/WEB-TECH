let favMovie = "cruel intentions";
let guess = prompt("Enter your prompt");
while((guess !=favMovie)&& (guess !="quit")){
    console.log("Wrong guess, try again");
    guess= prompt("Guess again");
} if(guess == favMovie){
    console.log("You guessed it right");
    alert("You guessed it right");
}else if (guess == "quit"){
    console.log("You quit , you loose");
}