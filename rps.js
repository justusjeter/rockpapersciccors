const hands = ['rock', 'paper', 'scissors'];

function getHand() {
     return hands[parseInt(Math.random() * 10) % 3];
}

const player1 = {
     name: 'Justus',
     getHand: getHand
};

const player2 = {
     name: 'Easton',
     getHand: getHand
};

const player3 = {
    name: 'Dooey',
    getHand: getHand
};

const player4 = {
    name: 'Daylin',
    getHand: getHand
};

function playRound(player1, player2) {
     const player1Hand = player1.getHand();
     const player2Hand = player2.getHand();

     console.log(`${player1.name} plays ${player1Hand}`);
     console.log(`${player2.name} plays ${player2Hand}`);

     if (player1Hand === player2Hand) {
         console.log("It's a tie!");
         return null; // Indicates a tie
     }

     if (
         (player1Hand === 'rock' && player2Hand === 'scissors') ||
         (player1Hand === 'scissors' && player2Hand === 'paper') ||
         (player1Hand === 'paper' && player2Hand === 'rock')
     ) {
         console.log(`${player1.name} wins!`);
         return player1; // Indicates player1 wins
     } else {
         console.log(`${player2.name} wins!`);
         return player2; // Indicates player2 wins
     }
}

function playGame(player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;

    while (player1Wins < playUntil && player2Wins < playUntil) {
        const winner = playRound(player1, player2);

        if (winner === player1) {
            player1Wins++;
        } else if (winner === player2) {
            player2Wins++;
        }

        console.log(`${player1.name}: ${player1Wins}, ${player2.name}: ${player2Wins}`);
    }

    return player1Wins === playUntil ? player1 : player2;
}

function playTournament(players, playUntil) {
    const semiFinal1Winner = playGame(players[0], players[1], playUntil);
    const semiFinal2Winner = playGame(players[2], players[3], playUntil);

    const champion = playGame(semiFinal1Winner, semiFinal2Winner, playUntil);

    console.log(`${champion.name} is the world champion`);
}

// Play a game to 3 wins
const gameWinner = playGame(player1, player2, 3);
console.log(`Game winner: ${gameWinner.name}`);

// Play a tournament
playTournament([player1, player2, player3, player4], 3);