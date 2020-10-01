export function getRandomThrow() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'rock';
    };
    if (randomNumber === 1) {
        return 'paper';
    };
    if (randomNumber === 2) {
        return 'scissors';
    };
};


export function doesUserWin(playerOneThrow, playerTwoThrow) {

    const myArray = ['rock', 'paper', 'scissors'];

    const playerOneNum = myArray.indexOf(playerOneThrow);
    const playerTwoNum = myArray.indexOf(playerTwoThrow);


    if (playerOneThrow === playerTwoThrow) {
        return 'draw';
    }
    else if ( (playerOneNum + 1) % 3 === playerTwoNum) {
        return 'loss';
    }
    else {
        return 'win';
    }
}