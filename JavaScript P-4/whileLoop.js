let i = 1;
while(i<=5){
    console.log(i);
    i=i+2;
}

let favMovie= "We live in Time";
let guess = prompt("Enter your movie guess");
while((guess != favMovie) && (guess != "quit")){
    console.log("Your Guess is Wrong . Try Again!");
    guess= prompt("Enter your movie Guess");
}
if(guess == favMovie){
    console.log("Right Guess.");
}