// Constants
var numCircles = 6;
let defaultColour = "#582c99";

// DOM elements
var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colour-to-guess");
var resultMessage = document.getElementById("result-message");
var banner = document.querySelector("h1");
var resetButton = document.getElementById("restart");

// Variables
var colours;
var pickedColor;

// Initialize the game
init();

function init() {
    setupCircles();
    reset();
}

function setupCircles() {
    for (var i = 0; i < circles.length; i++) {
        // Add click listeners to circles
        circles[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                resultMessage.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                banner.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = defaultColour;
                resultMessage.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    colours = genRandomColours(numCircles);
    pickedColor = chooseColor();
    colourToGuess.textContent = pickedColor;
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colours[i];
    }
    banner.style.backgroundColor = "steelblue";
    resetButton.textContent = "RESTART";
    resultMessage.textContent = "";
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = color;
    }
}

function makeColour() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function genRandomColours(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(makeColour());
    }
    return arr;
}

function chooseColor() {
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function changeColors(color) {
    // Change each circle to match given color
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = color;
    }
}
