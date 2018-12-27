// create an alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//create variables
var wins = 0;
var losses = 0;
var guess;
var guessLeft = 7;
var letter;
var used = [];

// Get a random number
function getLetter(){
    var random = Math.floor(Math.random() * alphabet.length);
    letter = alphabet[random]
    console.log(random);
    console.log(letter);
    return (letter);
}

getLetter();

document.onkeypress = function(event){
    guess = event.key.toLowerCase();
        compare(guess);
    
    

    
// Compare the guess to the random letter, if match wins +1
    if (guess.charAt(0) === letter){
        winGame();
        }

// If no match subtract one from guess
    else {
        guessLeft = guessLeft-1;
        console.log("guesses remaining: " + guessLeft);   // This is showing it
        //document.querySelector("#thoughts").innerHtml = guessLeft;  // This is not showing
        document.getElementById("thoughts").innerHTML = guessLeft;
    }

// If the counter gets to 0 add a loss
    if (guessLeft === 0){
        loseGame();
    }
}

function compare(item) {
    if (used.includes(item) === true){
        guessLeft = guessLeft+1;
    }else {
        used.push(item)
    }
    console.log("The guess is: " + item);
    console.log(used);
    document.querySelector("#guesses").innerHTML = " " + used.join(', ')
}

function winGame() {
    wins = wins+1;
    alert("You win! " + guess.toUpperCase() + " was the letter.");
    alert("Guess a letter to start a new round.")
    document.querySelector("#winCount").innerHTML = wins;
    reset();
}

function loseGame() {
    losses = losses+1;
    alert("Too many guesses. " + letter.toUpperCase() + " was the letter.  You lose.");
    alert("Guess a letter to start a new round.")
    console.log("Losses " + losses);
    document.querySelector("#losses").innerHTML = losses;
    reset();
}

function reset() {
    guess;
    guessLeft = 7;
    getLetter();
    used = [];
}