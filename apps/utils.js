export function getRandomThrow() {
    let randomNumber = Math.floor(Math.random() * 2 + 0.5);

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
    const throwToNum = { 'rock':0, 'paper':1, 'scissors':2};

    const playerOneNum = throwToNum[playerOneThrow];
    const playerTwoNum = throwToNum[playerTwoThrow];


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