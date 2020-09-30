import {
    getRandomThrow
} from './utils.js'

// Get DOM Elements

let winsSpan = document.getElementById('wins');
let lossesSpan = document.getElementById('losses');
let drawsSpan = document.getElementById('draws');
let winPercent = document.getElementById('win-percentage');

let submitButton = document.getElementById('submit-button');


// Initialize State

let wins = 0
let total = 0


// Click Handlers

submitButton.addEventListener('click', submitButtonHandler)

function submitButtonHandler() {
    const computerThrow = getRandomThrow();

    const checkedChoice = document.querySelector(':checked');
    const userThrow = checkedChoice.value;

    const winOrLose = doesUserWin(userThrow, computerThrow);
}