import {
    getRandomThrow,
    doesUserWin
} from './utils.js';


// Initial State

let wins = 0;
let draws = 0;
let total = 0;
let resets = 0;


// DOM Elements

let winsSpan = document.getElementById('wins');
let lossesSpan = document.getElementById('losses');
let drawsSpan = document.getElementById('draws');
let winPercent = document.getElementById('win-percentage');

let messageElement = document.getElementById('win-or-lose-message');
let computerMessage = document.getElementById('computer-throw-message');
let resetSpan = document.getElementById('resets');


// Click Handlers

export function submitButtonHandler() {
    const computerThrow = getRandomThrow();
    console.log(computerThrow);

    const checkedChoice = document.querySelector(':checked');
    const userThrow = checkedChoice.value;

    const winOrLose = doesUserWin(userThrow, computerThrow);


    if (winOrLose === 'win') {
        displayUserWins();
    }
    if (winOrLose === 'loss') {
        displayUserLoses();
    }
    if (winOrLose === 'draw') {
        displayDraw();
    }

    total ++;

    displayComputerThrow(computerThrow);
    updateStatsDisplay();
}

export function resetButtonHandler() {
    wins = 0;
    draws = 0;
    total = 0;
    resets++;

    winsSpan.textContent = 'Wins: 0';
    lossesSpan.textContent = 'Losses: 0';
    drawsSpan.textContent = 'Draws: 0';
    resetSpan.textContent = `Resets: ${resets}`;
    winPercent.textContent = 'Win-percentage: 0%';

    messageElement.textContent = '';
    computerMessage.textContent = '';
}


// DOM Functions

function updateStatsDisplay() {
    winsSpan.textContent = `Wins: ${wins}`;
    lossesSpan.textContent = `Losses: ${total - wins - draws}`;
    drawsSpan.textContent = `Draws: ${draws}`;
    winPercent.textContent = `Win-percentage: ${Math.floor(wins / total * 100)}%`;
}

function displayComputerThrow(computerChoice) {
    if (computerChoice === 'rock') {
        computerMessage.textContent = 'Computer plays... Rock!';
    }
    if (computerChoice === 'paper') {
        computerMessage.textContent = 'Computer plays... Paper!';
    }
    if (computerChoice === 'scissors') {
        computerMessage.textContent = 'Computer plays... Scissors!';
    }
}


// Outcome Handlers

function displayUserWins() {
    wins ++;
    messageElement.textContent = "Congratulations! You've won!";
}

function displayUserLoses() {
    messageElement.textContent = 'You Lost. Try again?';
}

function displayDraw() {
    draws ++;
    messageElement.textContent = 'Whoa! A Draw!';
}
