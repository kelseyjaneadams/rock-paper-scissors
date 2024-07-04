/** 
 * Function to show and hide the instructions on the start page.
 */
function hideInstructions () {
    const howToPlayButton = document.querySelector(".instructions-button")
    const instructionsDiv = document.querySelector(".instructions")

    if (instructionsDiv.classList.contains("hide-instructions")) {
        instructionsDiv.classList.remove("hide-instructions")
        howToPlayButton.innerHTML = "Hide Rules"
    } else {
        instructionsDiv.classList.add("hide-instructions")
        howToPlayButton.innerHTML = "Rules"
    }
}

/** 
 * Play Button Function to hide the instructions/start page and show the game area page.
 */

// note ** where should I put these? 
const introDiv = document.querySelector(".intro")
const resultsAreaDiv = document.querySelector(".results-area-parent")

function playButton () {
   
    resultsAreaDiv.classList.remove("hide-results-area")
    introDiv.classList.add("hide-intro-div")
}

function exitButton () {
    const exitButton = document.querySelector(".exit-button")

    resultsAreaDiv.classList.add("hide-results-area")
    introDiv.classList.remove("hide-intro-div")
}
