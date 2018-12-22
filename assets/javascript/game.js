// create an alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//create variables
var wins = 0;
var losses = 0;
var guess;
var guessLeft = 7;


// Get a random number
var random = Math.floor(Math.random() * alphabet.length);
var letter = alphabet[random]
console.log(random);
console.log(letter);


document.onkeypress = function(event){
    guess = event.key.toLowerCase();
    console.log("The guess is: " + guess);
    document.querySelector("#guesses").innerHTML = guess;

// Compare the guess to the random letter, if match wins +1
    if (guess.charAt(0) === letter){
        wins = wins+1;
        alert("You win! " + guess.toUpperCase() + " was the letter.");
        document.querySelector("#winCount").innerHTML = wins;
        }

// If no match subtract one from guess
    else {
        guessLeft = guessLeft-1;
        console.log("guesses remaining: " + guessLeft);
        document.querySelector("#guessesLeft").innerHtml = guessLeft;
    };


// If the counter gets to 0 add a loss
    if (guessLeft === 0){
         losses = losses+1;
        alert("Too many guesses. " + guess.toUpperCase() + " was the letter.  You lose.");
        console.log("Losses " + losses);
        document.querySelector("#losses").innerHTML = losses;
    }
}