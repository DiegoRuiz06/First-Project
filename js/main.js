    /*----- constants -----*/
    const wordBank = ["nebula", "comet", "planet", "star", "asteroid", "meteor", "galaxy", "gravity", "universe", "moon", "constellation"]
    const guessesRemaning = 10;



    /*----- app's state (variables) -----*/
    let wrongGuess = [];
    let randomWord = "";
    let lettersOfWord = [];
    let blanks = 0;
    let blanksAndCorrect = [];
    // counter variables
    var wins = 0;
    var losses = 0;
    var remainingGuesses

    /*----- cached element references -----*/
    const scoreEls = {
        wins: document.querySelector("#winstracker"),
        losses: document.querySelector("#losstracker"),
    }
    // console.log(scoreEls);
    const guessedEls = {
        wrong: document.querySelector("#playerguesses"),
    }
    console.log(guessedEls);

    /*----- event listeners -----*/





    /*----- functions -----*/

