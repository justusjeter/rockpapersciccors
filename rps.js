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

// Play a round
playRound(player1, player2);
