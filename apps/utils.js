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
    const choices = ['rock', 'paper', 'scissors'];
    
    const playerOneNum = choices.indexOf(playerOneThrow);
    const playerTwoNum = choices.indexOf(playerTwoThrow);

    const playerOneNext = (playerOneNum + 1) % choices.length;
  

    if (playerOneThrow === playerTwoThrow) {
        return 'draw';
    }
    else if (playerOneNext === playerTwoNum) {
        return 'loss';
    }
    else {
        return 'win';
    }
}