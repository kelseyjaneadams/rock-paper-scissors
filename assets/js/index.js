/** 
 * Function to show and hide the instructions on the start page.
 */
function hideInstructions () {
    const howToPlayButton = document.querySelector(".instructions-button")
    const instructions = document.querySelector(".instructions")


    if (instructions.classList.contains("hide-instructions")) {
        instructions.classList.remove("hide-instructions")
        howToPlayButton.innerHTML = "Hide Rules"
    } else {
         instructions.classList.add("hide-instructions")
        howToPlayButton.innerHTML = "Rules"
    }
}
