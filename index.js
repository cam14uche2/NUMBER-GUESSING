// prompt user for username and display it

const username = prompt("What is your name?");

// welcome user using username

console.log(`welcome ${username}`);

alert("you have 8 guesses. Guess 1-2");

var answer =2;
var guess = prompt("what's your guess");

for (i=0; i<2;i++){
  if(answer == guess){
    alert("You guessed correctly");
    break;
  }
  else{
    guess = prompt("please try again");
  }
}