// Add event listeners for buttons //
// game play buttons
document.getElementById("rules-button").addEventListener("click", hideInstructions);
document.getElementById("play-button").addEventListener("click", playButton);
document.getElementById("exit-button").addEventListener("click", exitButton);
document.getElementById("go-button").addEventListener("click", goButton);
//modal controls
document.getElementById("modal-exit").addEventListener("click", closeModal);
document.getElementById("modal-play-again").addEventListener("click", playAgain);

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
const optionImgs = document.querySelectorAll('.option-img');

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
    resetGame()
}

/**
 * User option function to handle the user's choice
 * Add a border to the user option image when selected
 * Remove the border if another option is selected
 * Sets the userSelection variable to the id of the selected image
 */
function userOption(event) {
    optionImgs.forEach(img => {
        img.style.border = 'none'
    });

    const selectedImage = event.target;
    selectedImage.style.border = '#7d12ff solid 4px';
    selectedImage.style.borderRadius = '50%';
    userSelection = selectedImage.id;
}

/**
 * Computer option function to generate random choice
 * Save computer choice to computerSelection variable
 */
function computerOption() {
    const options = ['rock', 'paper', 'scissors'];
    const randomOption = Math.floor(Math.random() * options.length) + 1;
    computerSelection = options[randomOption - 1];
    return computerSelection;
}

/**
 * Go button takes both user and computer inputs and renders that selection on the page
 * Generates the inputs images in the game area
 * Trigger the modal
 * Updates round score led indicator 
 * Remove the user option image border for the next round
 * Run a conditional check to verify computerSelection & userSelection have a value
 * If no value, game cannot run, trigger alert for the user
 */
function goButton () {
    computerOption()
    if (computerSelection && userSelection) {
        function generateImage (option) {
            const imgElement = `
                <img src="assets/images/${option}-image.webp" alt="A hand representing ${option}."></img>`
            return imgElement
        }
        computerImageDiv.innerHTML = generateImage(computerSelection)
        userImageDiv.innerHTML = generateImage(userSelection)

        getWinner()
        optionImgs.forEach(img => {
            img.style.border = 'none'
        });
    } else {
        console.log('no selection')
    }
       
}

/**
 * Update the score indicators on the page
 * Create element and add to score div
 * Check user score and call endGame function if winning score is reached
 */
function updateScore (winner) {
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
 * Set the modal message to declare the winner
 * Open the modal
 */
function endGame(winner) {
    const modalMessage = document.getElementById("modal-message");
    modalMessage.innerHTML = winner === 'user' ? 'You Win!' : 'You Lose!';
    document.getElementById("game-over-modal").style.visibility = "visible";
}

// NOTE** in these two functions in getting the game-over-modal seperately, should I define it as a global variable?

/**
 * Reset the game function to clear scores, player options
 * Remove user selection option borders
 */
function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreDiv.innerHTML = '';
    computerScoreDiv.innerHTML = '';

    optionImgs.forEach(img => {
        img.style.border = 'none'
    });
}

/**
 * Close the modal function to close modal and resets the game 
 * Return user to intro screen
 */
function closeModal() {
    document.getElementById("game-over-modal").style.visibility = "hidden";
    resultsAreaDiv.classList.add("hide-results-area");
    introDiv.classList.remove("hide-intro-div");
    resetGame()
}

/**
 * Play again function to reset the game area 
 * Hide the modal
 */
function playAgain () {
    resetGame()
    document.getElementById("game-over-modal").style.visibility = "hidden";
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
