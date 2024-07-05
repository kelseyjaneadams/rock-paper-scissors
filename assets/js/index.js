// add event listeners for buttons //

document.getElementById("rules-button").addEventListener("click", hideInstructions)
document.getElementById("play-button").addEventListener("click", playButton)
document.getElementById("exit-button").addEventListener("click", exitButton)

/** 
 * Function to show and hide the instructions on the start page.
 */
function hideInstructions () {
    const howToPlayButton = document.getElementById("rules-button")
    const instructionsDiv = document.getElementById("rules")

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

// Declare variables
const introDiv = document.getElementById("intro")
const resultsAreaDiv = document.getElementById("results-area-parent")

function playButton () {
   
    resultsAreaDiv.classList.remove("hide-results-area")
    introDiv.classList.add("hide-intro-div")
}

function exitButton () {
    const exitButton = document.querySelector(".exit-button")

    resultsAreaDiv.classList.add("hide-results-area")
    introDiv.classList.remove("hide-intro-div")
}
