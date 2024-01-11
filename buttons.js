import {registerClick, startGame} from "./gameLogic.js";

let audio1;
let audio2;
let audio3;
let audio4;

document.getElementById("buttonStart").addEventListener("click", function () {
    loadAudio();
    // Remove the button and set up the game
    document.getElementById("buttonStart").remove();
    let roundLabel = document.createElement("label");
    roundLabel.id = "roundLabel";
    document.getElementById("replaceable").appendChild(roundLabel);
    startGame();
});

document.getElementById("button1").addEventListener("click", function () {
    if (registerClick(1)) {
        playAudio(1);
    }
});

document.getElementById("button2").addEventListener("click", function () {
    if (registerClick(2)) {
        playAudio(2);
    }
});

document.getElementById("button3").addEventListener("click", function () {
    if (registerClick(3)) {
        playAudio(3);
    }
});

document.getElementById("button4").addEventListener("click", function () {
    if (registerClick(4)) {
        playAudio(4);
    }
});

function loadAudio() {
    audio1 = new Audio("resources/fart1.mp3");
    audio2 = new Audio("resources/fart2.mp3");
    audio3 = new Audio("resources/fart3.mp3");
    audio4 = new Audio("resources/fart4.mp3");

}

function playAudio(index) {
    switch (index) {
        case 1:
            audio1.currentTime = 0;
            audio1.play();
            break;
        case 2:
            audio2.currentTime = 0;
            audio2.play();
            break;
        case 3:
            audio3.currentTime = 0;
            audio3.play();
            break;
        case 4:
            audio4.currentTime = 0;
            audio4.play();
            break;
    }
}

export { playAudio };