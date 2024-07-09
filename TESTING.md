## Compatability 

In order to confirm the correct functionality, responsiveness, and appearance:

The website was tested on the following browsers: Chrome, Firefox, Safari.

- Chrome:

<img src="documentation/images/chrome.png">

- Firefox:

<img src="documentation/images/firefox.png">

- Safari: 

<img src="documentation/images/safari.png">

## Responsiveness 

- The website was checked by devtools implemented in Chrome an Firefox browsers.

## Menu Page

<img src="documentation/images/menu-area-dev1.png">
<img src="documentation/images/menu-area-dev2.png">
<img src="documentation/images/menu-area-dev3.png">

## Game Area

<img src="documentation/images/game-area-dev3.png">
<img src="documentation/images/game-area-dev2.png">
<img src="documentation/images/game-area-dev1.png">

- This website was checked with [Responsive Website Design Tester.](https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fkelseyjaneadams.github.io%2Frock-paper-scissors%2F&width=1400&height=700)

<img src="documentation/images/responsive-test.png">
<img src="documentation/images/responisve-test2.png">
<img src="documentation/images/responsive-test3.png">

## Validator Testing
### HTML
- No errors or warnings were found when passing through the official W3C validator.
<img src="documentation/images/html-validator.png">

### CSS
- No errors or warnings were found when passing through the official W3C validator.
<img src="documentation/images/css-validator.png">

### JavaScript
- No errors or warnings were found when passing through the official JSHint validator except the warnings relating to the 'const'.
<img src="documentation/images/js-validator.png">

## Accessibility and Performance
- Using lighthouse in devtools I confirmed that the website is performing well, accessible and colors and fonts chosen are readable.
<img src="documentation/images/lighthouse-report.png">

## Bugs
### Solved Bugs

1. The 'Go' button when selected still plays the game even if a user has not selected an option.

*Solution: Added a conditional statement to the goButton function that confirms the computer and user selections have a value before running the game*

2. Images in the results area where not clearing inbetween rounds, nor when play again or exit are clicked.

*Solution: In resetGame function I set the computer and user image back to an empty string to clear image.*

### Unsolved Bugs
None


