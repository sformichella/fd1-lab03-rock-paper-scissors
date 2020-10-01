import {
    submitButtonHandler,
    resetButtonHandler
} from './click-handlers.js'

// Get DOM Elements



let submitButton = document.getElementById('submit-button');
let resetButton = document.getElementById('reset-button')


// Click Handlers

submitButton.addEventListener('click', submitButtonHandler);

resetButton.addEventListener('click', resetButtonHandler);