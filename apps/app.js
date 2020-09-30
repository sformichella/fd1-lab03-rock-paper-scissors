import {
    doesUserWin,
    getRandomThrow
} from './utils.js'

// Get DOM Elements

let winsSpan = document.getElementById('wins');
let lossesSpan = document.getElementById('losses');
let drawsSpan = document.getElementById('draws');
let winPercent = document.getElementById('win-percentage');

let submitButton = document.getElementById('submit-button');
let resetButton = document.getElementById('reset-button');

let messageElement = document.getElementById('win-or-lose-message');


// Initialize State

let wins = 0;
let draws = 0;
let total = 0;


// Click Handlers

submitButton.addEventListener('click', submitButtonHandler);

function submitButtonHandler() {
    const computerThrow = getRandomThrow();
    console.log(computerThrow);

    const checkedChoice = document.querySelector(':checked');
    const userThrow = checkedChoice.value;

    const winOrLose = doesUserWin(userThrow, computerThrow);


    if (winOrLose === 'win' ) {
        handleUserWins();
    };
    if (winOrLose === 'loss') {
        handleUserLoses();
    }
    if (winOrLose === 'draw') {
        handleDraw();
    }

    total ++;

    updateDOM()
}



function updateDOM() {
    winsSpan.textContent = `Wins: ${wins}`;
    lossesSpan.textContent = `Losses: ${total - wins - draws}`;
    drawsSpan.textContent = `Draws: ${draws}`;
    winPercent.textContent = `Win-percentage: ${Math.floor(wins/total * 100)}%`;
}



function handleUserWins() {
    wins ++;
    messageElement.textContent = "Congratulations! You've won!";
}



function handleUserLoses() {
    messageElement.textContent = 'You Lost. Try again?';
}



function handleDraw() {
    draws ++;
    messageElement.textContent = 'Whoa! A Draw!';
}



resetButton.addEventListener('click', resetButtonHandler);

function resetButtonHandler() {
    winsSpan.textContent = 'Wins: 0';
    lossesSpan.textContent = 'Losses: 0';
    drawsSpan.textContent = 'Draws: 0';
    winPercent.textContent = 'Win-percentage: 0';

    messageElement.textContent = '';
}