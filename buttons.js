import {registerClick, startGame} from "./gameLogic.js";

let audioFiles = [
    "resources/fart1.mp3",
    "resources/fart2.mp3",
    "resources/fart3.mp3",
    "resources/fart4.mp3"
];

let audioInstances = [];

function playAudio(index) {
    if (audioInstances[index]) {
        audioInstances[index].currentTime = 0; // Rewind the audio to the beginning
        audioInstances[index].play();
    } else {
        audioInstances[index] = new Audio(audioFiles[index]);
        audioInstances[index].play();
    }
}

document.getElementById("buttonStart").addEventListener("click", function () {
    // Remove the button and set up the game
    document.getElementById("buttonStart").remove();
    let roundLabel = document.createElement("label");
    roundLabel.id = "roundLabel";
    document.getElementById("replaceable").appendChild(roundLabel);
    startGame();
});

document.getElementById("button1").addEventListener("click", function () {
    if (registerClick(1)) {
        playAudio(0);
    }
});

document.getElementById("button2").addEventListener("click", function () {
    if (registerClick(2)) {
        playAudio(1);
    }
});

document.getElementById("button3").addEventListener("click", function () {
    if (registerClick(3)) {
        playAudio(2);
    }
});

document.getElementById("button4").addEventListener("click", function () {
    if (registerClick(4)) {
        playAudio(3);
    }
});

export { playAudio };