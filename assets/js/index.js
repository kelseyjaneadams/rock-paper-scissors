// add event listeners for buttons //
document.getElementById("rules-button").addEventListener("click", hideInstructions);
document.getElementById("play-button").addEventListener("click", playButton);
document.getElementById("exit-button").addEventListener("click", exitButton);
//user selection buttons
document.getElementById("rock").addEventListener("click", userOption);
document.getElementById("paper").addEventListener("click", userOption);
document.getElementById("scissors").addEventListener("click", userOption);


// Declare variables
const introDiv = document.getElementById("intro");
const resultsAreaDiv = document.getElementById("results-area-parent");
let userSelection = '';
let computerSelection = '';


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
    resultsAreaDiv.classList.remove("hide-results-area");
    introDiv.classList.add("hide-intro-div");
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
    const computerSelection = options[randomOption - 1];
    return computerSelection;
}
console.log("computers choice", computerOption())