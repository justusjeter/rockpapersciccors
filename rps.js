// const hands = ['rock', 'paper', 'scissors'];

// function getHand() {
//      return hands[parseInt(Math.random() * 10) % 3];
// }

// const player1 = {
//      name: 'Justus',
//      getHand: getHand
// };

// const player2 = {
//      name: 'Easton',
//      getHand: getHand
// };

// const player3 = {
//     name: 'Dooey',
//     getHand: getHand
// };

// const player4 = {
//     name: 'Daylin',
//     getHand: getHand
// };

// function playRound(player1, player2) {
//      const player1Hand = player1.getHand();
//      const player2Hand = player2.getHand();

//      console.log(`${player1.name} plays ${player1Hand}`);
//      console.log(`${player2.name} plays ${player2Hand}`);

//      if (player1Hand === player2Hand) {
//          console.log("It's a tie!");
//          return null; // Indicates a tie
//      }

//      if (
//          (player1Hand === 'rock' && player2Hand === 'scissors') ||
//          (player1Hand === 'scissors' && player2Hand === 'paper') ||
//          (player1Hand === 'paper' && player2Hand === 'rock')
//      ) {
//          console.log(`${player1.name} wins!`);
//          return player1; // Indicates player1 wins
//      } else {
//          console.log(`${player2.name} wins!`);
//          return player2; // Indicates player2 wins
//      }
// }

// function playGame(player1, player2, playUntil) {
//     let player1Wins = 0;
//     let player2Wins = 0;

//     while (player1Wins < playUntil && player2Wins < playUntil) {
//         const winner = playRound(player1, player2);

//         if (winner === player1) {
//             player1Wins++;
//         } else if (winner === player2) {
//             player2Wins++;
//         }

//         console.log(`${player1.name}: ${player1Wins}, ${player2.name}: ${player2Wins}`);
//     }

//     return player1Wins === playUntil ? player1 : player2;
// }

// function playTournament(players, playUntil) {
//     const semiFinal1Winner = playGame(players[0], players[1], playUntil);
//     const semiFinal2Winner = playGame(players[2], players[3], playUntil);

//     const champion = playGame(semiFinal1Winner, semiFinal2Winner, playUntil);

//     console.log(`${champion.name} is the world champion`);
// }

// // Play a game to 3 wins
// const gameWinner = playGame(player1, player2, 3);
// console.log(`Game winner: ${gameWinner.name}`);

// // Play a tournament
// playTournament([player1, player2, player3, player4], 3);
const hands = ['rock', 'paper', 'scissors'];

let player1 = {
    name: '',
    hand: '',
    wins: 0
};

let player2 = {
    name: '',
    hand: '',
    wins: 0
};

function getHand() {
    return hands[Math.floor(Math.random() * hands.length)];
}

function setPlayerHand(hand) {
    player1.hand = hand;
    document.getElementById('player1Hand').innerText = getHandSymbol(hand);
    player2.hand = getHand();
    document.getElementById('player2Hand').innerText = getHandSymbol(player2.hand);

    const resultMessage = `${player1.name} chooses ${hand} and ${player2.name} chooses ${player2.hand}`;
    playRound(resultMessage);
}

function startGame() {
    player1.name = document.getElementById('player1Name').value || 'Player 1';
    player2.name = document.getElementById('player2Name').value || 'Player 2';
    player1.wins = 0;
    player2.wins = 0;
    updateScoreboard();
    resetHands();
    // Show game page and hide home page
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('gamePage').style.display = 'block';
}

function playRound(resultMessage) {
    const roundResult = document.getElementById('roundResult');
    if (player1.hand === player2.hand) {
        roundResult.innerText = `${resultMessage} - It's a tie!`;
    } else if (
        (player1.hand === 'rock' && player2.hand === 'scissors') ||
        (player1.hand === 'scissors' && player2.hand === 'paper') ||
        (player1.hand === 'paper' && player2.hand === 'rock')
    ) {
        roundResult.innerText = `${resultMessage} - ${player1.name} wins this round!`;
        player1.wins++;
    } else {
        roundResult.innerText = `${resultMessage} - ${player2.name} wins this round!`;
        player2.wins++;
    }
    updateScoreboard();

    if (player1.wins === 3) {
        displayWinner(player1);
    } else if (player2.wins === 3) {
        displayWinner(player2);
    } else {
        resetHands();
    }
}

function getHandSymbol(hand) {
    switch (hand) {
        case 'rock':
            return '✊';
        case 'paper':
            return '🗞';
        case 'scissors':
            return '✂️';
        default:
            return '';
    }
}

function updateScoreboard() {
    document.getElementById('player1Score').innerText = `${player1.name}: ${player1.wins}`;
    document.getElementById('player2Score').innerText = `${player2.name}: ${player2.wins}`;
}

function resetHands() {
    player1.hand = '';
    player2.hand = '';
}

// function checkWinner() {
//     if (player1.wins === WINNING_SCORE) {
//         displayWinner(player1.name);
//     } else if (player2.wins === WINNING_SCORE) {
//         displayWinner(player2.name);
//     }
// }

function displayWinner(winner) {
    // Hide game page and show congrats page
    document.getElementById('gamePage').style.display = 'none';
    document.getElementById('congratsPage').style.display = 'block';

    // Display winner message
    if (winner === player1) {
         document.getElementById('winnerMessage').innerText = `Congratulations ${winner.name}! You are the champion!`;
        } else if (winner === player2) {
           document.getElementById('winnerMessage').innerText = `Congratulations ${winner.name}! Sadly you lost this fight ${player1.name}!`;
         }
}

function restartGame() {
    // Show home page and hide congrats page
    document.getElementById('congratsPage').style.display = 'none';
    document.getElementById('homePage').style.display = 'block';
}
