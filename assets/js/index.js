// Add event listeners for buttons //
// game play buttons
document.getElementById("rules-button").addEventListener("click", hideInstructions);
document.getElementById("play-button").addEventListener("click", playButton);
document.getElementById("exit-button").addEventListener("click", exitButton);
document.getElementById("go-button").addEventListener("click", goButton);
//user selection buttons
document.getElementById("rock").addEventListener("click", userOption);
document.getElementById("paper").addEventListener("click", userOption);
document.getElementById("scissors").addEventListener("click", userOption);

// Declare variables
const introDiv = document.getElementById("intro");
const resultsAreaDiv = document.getElementById("results-area-parent");
const computerImageDiv = document.getElementById("computer-image-div");
const userImageDiv = document.getElementById("user-image-div");
const userScoreDiv = document.getElementById("user-score");
const computerScoreDiv = document.getElementById("computer-score");

let userSelection = '';
let computerSelection = '';
let userScore = 0;
let computerScore = 0;

/** 
 * Function to show and hide the instructions on the start page.
 */
function hideInstructions () {
    const howToPlayButton = document.getElementById("rules-button");
    const instructionsDiv = document.getElementById("rules");

    if (instructionsDiv.classList.contains("hide-rules")) {
        instructionsDiv.classList.remove("hide-rules")
        howToPlayButton.innerHTML = "Hide Rules"
    } else {
        instructionsDiv.classList.add("hide-rules")
        howToPlayButton.innerHTML = "Rules"
    }
}

/** 
 * Play Button Function to hide the instructions/start page and show the game area page.
 */
function playButton () {
    resultsAreaDiv.classList.remove("hide-results-area")
    introDiv.classList.add("hide-intro-div")
}

/** 
 * Exit Button Function to leave game area and return to the start page.
 */
function exitButton () {
    const exitButton = document.querySelector(".exit-button");

    resultsAreaDiv.classList.add("hide-results-area");
    introDiv.classList.remove("hide-intro-div");
}

/**
 * User option function to handle the user's choice
 */
function userOption(event) {
    userSelection = event.target.id;
    console.log("User has selected an option", userSelection)
}


/**
 * Computer option function to generate random choice
 */
function computerOption() {
    const options = ['rock', 'paper', 'scissors'];
    const randomOption = Math.floor(Math.random() * options.length) + 1;
    computerSelection = options[randomOption - 1];
    return computerSelection;
}
// console.log("computers choice", computerOption())

/**
 * Go button takes both user and computer inputs and renders that selection on the page
 * Generates the inputs images in the game area
 * Trigger the modal
 * Updates round score 
 */

function goButton () {
    computerOption()
    function generateImage (option) {
        const imgElement = `
            <img src="assets/images/${option}-image.webp" alt="A hand representing ${option}."></img>`
        return imgElement
    }
    computerImageDiv.innerHTML = generateImage(computerSelection)
    userImageDiv.innerHTML = generateImage(userSelection)

    getWinner()
}

/**
 * Update the score indicators on the page
 */
function updateScore (winner) {
    //create element and adding to score div
    const scoreElement = document.createElement('div')
    scoreElement.classList.add("round-win")

    if (winner === "user") {
        userScoreDiv.appendChild(scoreElement)
    } else if (winner === "computer") {
        computerScoreDiv.appendChild(scoreElement)
    }

    if (userScore === 2 || computerScore === 2) {
        endGame(winner)
    }
}

/**
 * End the game and declare the winner
 */
function endGame(winner) {
    const modalMessage = document.getElementById("modal-message");
    modalMessage.innerHTML = winner === 'user' ? 'You Win!' : 'You Lose!';
    document.getElementById("game-over-modal").style.visibility = "visible";
}

/**
 * Get winner function to calculate the winner of the round
 * Update the score of the round
 */
function getWinner () {
    const gameDraw = document.getElementById("game-draw")

    // checking for a draw
    if (computerSelection === userSelection) {
        gameDraw.innerHTML = "The round is a draw"
        return
    } else {
        gameDraw.innerHTML = ""
    }

    // check for Rock
    if (userSelection === "rock") {
        if (computerSelection === "scissors") {
            userScore++
            updateScore("user")
            return
        } else {
            computerScore++
            updateScore("computer")
            return
        }
    }

    //check for Paper
    if (userSelection === "paper") {
        if (computerSelection === "rock") {
            userScore++
            updateScore("user")
            return
        } else {
            computerScore++
            updateScore("computer")
            return
        }
    } 

     //check for Scissors
     if (userSelection === "scissors") {
        if (computerSelection === "paper") {
            userScore++
            updateScore("user")
            return
        } else {
        computerScore++
        updateScore("computer")
        return
        }
    }   
}
