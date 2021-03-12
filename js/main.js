    /*----- constants -----*/
    const wordBank = ["nebula", "comet", "planet", "star", "asteroid", "meteor", "galaxy", "gravity", "universe", "moon", "constellation"]
    let guessesRemaning = 10



    /*----- app's state (variables) -----*/
    let wrongGuess = [];
    let randomWord = "";
    let lettersOfWord = [];
    let blanks = 0;
    let blanksAndCorrect = [];
    // counter variables
    let wins = 0;
    let losses = 0;
    let remainingGuesses

    /*----- cached element references -----*/
    const scoreEls = {
        wins: document.querySelector("#winstracker"),
        losses: document.querySelector("#losstracker"),
    }
    
    const guessedEls = {
        wrong: document.querySelector("#playerguesses"),
    }
    
    /*----- event listeners -----*/
    document.onkeyup = function (evt) {
        let guesses = String.fromCharCode(evt.keyCode).toLowerCase();
        //check if guess matches value of random word
        checkLetters(guesses);
        //process wins/loss
        finished();

        //show the letter that are incorrect on screen
        document.getElementById("playerguesses").innerHTML = " " + wrongGuess.join(" ");
    }

   


    /*----- functions -----*/
    function render() {
    //generate random word from words array//
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //split the individual word into seperate arrays, and put in new array//
    lettersOfWord = randomWord.split("");

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length; 
    
    for (let i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //show the "_" within HTML
    document.getElementById("currentWord").innerHTML = " " + blanksAndCorrect.join(" ");
}

    function reset() {
    guessesRemaning = 10;
    wrongGuess = [];
    blanksAndCorrect = [];
    render()
}

    //If else to see if letter selected matches the random word
    function checkLetters(letter) {
    let letterInWord = false;
    //if the generated randomword is equal to the letter entered then the variable is true
    for (let i = 0; i < blanks; i++) {
        if (randomWord[i] === letter) {
            letterInWord = true;
        }
    }
    //if letterInWord (false)
    if (letterInWord) {
        for (let i = 0; i < blanks; i++) {
            if (randomWord[i] === letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    //push incorrect guess in the wrong guess section and reduce number of guesses
    else {
        wrongGuess.push(letter);
        guessesRemaning--;
    }
}
// final game function 
function finished() {
    if (lettersOfWord.toString() === blanksAndCorrect.toString()) {
        wins++;
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;
    } else if (guessesRemaning === 0) {
        losses++;
        reset()
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    // show the losses and guesses remaining 
    document.getElementById("currentWord").innerHTML = " " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaning;
}

render()









