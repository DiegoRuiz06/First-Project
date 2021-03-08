    /*----- constants -----*/
    const wordBank = ["nebula", "comet", "planet", "star", "asteroid", "meteor", "galaxy", "gravity", "universe", "moon", "constellation"]
    const guessesRemaning = [10]



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
    // console.log(scoreEls);
    const guessedEls = {
        wrong: document.querySelector("#playerguesses"),
    }
    // console.log(guessedEls);

    /*----- event listeners -----*/
    document.onkeyup = function (evt) {

    }

   


    /*----- functions -----*/
function init() {
    //generate random word from words array//
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //split the individual word into seperate arrays, and put in new array//
    lettersOfWord = randomWord.split("");
    //use something to generate "_" for each letter in the array stored in the blanks (maybe a loop?)

    //store length of word in blanks, for later use
    blanks = lettersOfWord.length; 
    
    for (let i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //show the "_" within HTML
    document.getElementById("currentword").innerHTML = " " + blanksAndCorrect.join(" ");
    //console logs:
    console.log(randomWord);
    console.log(lettersOfWord);
    console.log(blanks);
    console.log(blanksAndCorrect);
}

function reset() {
    guessesRemaning = 10;
    wrongGuess = [];
    blanksAndCorrect = [];
    init()
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
}

