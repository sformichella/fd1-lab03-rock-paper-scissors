import {
    getRandomThrow,
    doesUserWin
} from '../apps/utils.js';

const test = QUnit.test;

test('This function should return rock, paper, or scissors as a string', (expect) => {
    const expected = ['rock', 'paper', 'scissors'];
    const actual = getRandomThrow();

    expect.equal(expected.includes(actual), true);
});



test('This function should return win if the user chooses rock and the computer chooses scissors', (expect) => {
    const expected = 'win';
    const actual = doesUserWin('rock', 'scissors');

    expect.equal(actual, expected);
})

test('This function should return loss if the user chooses rock and the computer chooses paper', (expect) => {
    const expected = 'loss';
    const actual = doesUserWin('rock', 'paper');

    expect.equal(actual, expected);
})

test('This function should return draw if the user chooses paper and the computer chooses paper', (expect) => {
    const expected = 'draw';
    const actual = doesUserWin('paper', 'paper');

    expect.equal(actual, expected);
})

