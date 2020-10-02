import {
    getRandomThrow,
    doesUserWin
} from '../apps/utils.js';

const test = QUnit.test;



// getRandomThrow Tests
test('getRandomThrow should return rock, paper, or scissors as a string', (expect) => {
    const expected = ['rock', 'paper', 'scissors'];
    const actual = getRandomThrow();

    expect.equal(expected.includes(actual), true);
});



// doesUserWin tests

    // User wins section
test('doesUserWin should return win if the user chooses rock and the computer chooses scissors', (expect) => {
    const expected = 'win';
    const actual = doesUserWin('rock', 'scissors');

    expect.equal(actual, expected);
})

test('doesUserWin should return win if the user chooses paper and the computer chooses rock', (expect) => {
    const expected = 'win';
    const actual = doesUserWin('paper', 'rock');

    expect.equal(actual, expected);
})

test('doesUserWin should return win if the user chooses scissors and the computer chooses paper', (expect) => {
    const expected = 'win';
    const actual = doesUserWin('scissors', 'paper');

    expect.equal(actual, expected);
})



    // User loses section
test('doesUserWin should return loss if the user chooses rock and the computer chooses paper', (expect) => {
    const expected = 'loss';
    const actual = doesUserWin('rock', 'paper');

    expect.equal(actual, expected);
})

test('doesUserWin should return loss if the user chooses paper and the computer chooses scissors', (expect) => {
    const expected = 'loss';
    const actual = doesUserWin('paper', 'scissors');

    expect.equal(actual, expected);
})

test('doesUserWin should return loss if the user chooses scissors and the computer chooses rock', (expect) => {
    const expected = 'loss';
    const actual = doesUserWin('scissors', 'rock');

    expect.equal(actual, expected);
})



    // Draw Section
test('doesUserWin should return draw if the user chooses rock and the computer chooses rock', (expect) => {
    const expected = 'draw';
    const actual = doesUserWin('rock', 'rock');

    expect.equal(actual, expected);
})

test('doesUserWin should return draw if the user chooses paper and the computer chooses paper', (expect) => {
    const expected = 'draw';
    const actual = doesUserWin('paper', 'paper');

    expect.equal(actual, expected);
})

test('doesUserWin should return draw if the user chooses scissors and the computer chooses scissors', (expect) => {
    const expected = 'draw';
    const actual = doesUserWin('scissors', 'scissors');

    expect.equal(actual, expected);
})