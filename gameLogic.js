import {playAudio} from "./buttons.js";

let roundNumber = 1;
let currentNumbers = [];
let inputNumbers = [];

function startGame() {
    flushAll();
    document.getElementById("roundLabel").innerText = "Round " + roundNumber.toString();
    setTimeout(function() {
    showPattern();
    }, 2000);
}

function clickDisabledButton(button, buttonNumber) {
    emulateButtonHover(button);
    playAudio(buttonNumber - 1);
}

function emulateButtonHover(button) {
    let initialBorder = button.style.borderColor.toString();
    let initialColor = button.style.backgroundColor.toString();
    button.style.borderColor = "#BF002B";
    button.style.backgroundColor = "#BF002B";

    setTimeout(function() {
        button.style.borderColor = initialBorder;
        button.style.backgroundColor = initialColor;
    }, 500);
}

function showPattern() {
    for (let i = 0; i < roundNumber; i++) {
        setTimeout(function () {
            currentNumbers.push(Math.floor(Math.random() * 4 + 1));
            let button = document.getElementById("button" + currentNumbers[i].toString());
            clickDisabledButton(button, currentNumbers[i]);
        }, 1000 * i);
    }
    setTimeout(function () {
        $("button.rounded-pill").prop("disabled", false);
    }, 1000 * roundNumber);
}

function registerClick(buttonNumber) {
    if (inputNumbers.length < roundNumber) {
        inputNumbers.push(buttonNumber);
        if (inputNumbers.length === roundNumber) {
            $("button.rounded-pill").prop("disabled", true);
            if (evaluate()) {
                startGame();
            } else {
                document.getElementById("roundLabel").innerText = "Failed";
            }
        }
        return true;
    } else {
        return false;
    }
}
function evaluate() {
    if (currentNumbers.length === inputNumbers.length) {
        for (let i = 0; i < currentNumbers.length; i++) {
            if (currentNumbers[i] !== inputNumbers[i]) {
                return false;
            }
        }
        roundNumber++;
        return true;
    } else {
        $("label").innerText = "Failed";
        return false;
    }
}
function flushAll() {
    while (currentNumbers.length > 0) {
        currentNumbers.pop();
    }

    while (inputNumbers.length > 0) {
        inputNumbers.pop();
    }
}

export { startGame, registerClick};
