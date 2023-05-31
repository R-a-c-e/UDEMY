let userGuess = 0;
let correctNumber = 3;

while(userGuess!=correctNumber){
    userGuess = prompt('Guess a number between 1 and 5');
    if(userGuess == correctNumber){
        alert('congrats you won!');
    }
    else{
        alert('incorrect guess, try again!');
    }
}