class LudoGame {
    constructor() {
        this.playerColors = ['red', 'yellow']; // Player controls these colors
        this.currentPlayer = 'red';
        this.diceValues = [1, 1];
        this.canRoll = true;
        this.pieces = this.initializePieces();
        this.scores = { player: 0, computer: 0 };
        this.initializeGame();
        this.renderPills(); // Render pills on the board
        this.updateScoreboard();
    }

    initializePieces() {
        const pieces = {};
        this.playerColors.forEach(color => {
            pieces[color] = Array(4).fill().map((_, i) => ({
                id: i,
                position: 'home',
                steps: 0,
                completed: false
            }));
        });
        return pieces;
    }

    renderPills() {
        for (const color of this.playerColors) {
            const container = document.querySelector(`.piece-container.${color}`);
            this.pieces[color].forEach(piece => {
                const pill = document.createElement('div');
                pill.className = 'character-piece';
                pill.style.backgroundColor = color; // Set color of the pill
                container.appendChild(pill); // Add pill to the container
            });
        }
    }

    rollDice() {
        if (!this.canRoll) return; // Prevent rolling if not allowed
        this.diceValues = [this.getRandomDiceValue(), this.getRandomDiceValue()];
        this.updateTurnIndicator();
        this.movePiece();
        this.canRoll = false; // Prevent further rolls until the turn ends
    }

    getRandomDiceValue() {
        return Math.floor(Math.random() * 6) + 1; // Returns a value between 1 and 6
    }

    movePiece() {
        const currentPieces = this.pieces[this.currentPlayer];
        const pieceToMove = currentPieces[0]; // Move the first piece for simplicity

        if (pieceToMove.position === 'home') {
            if (this.diceValues[0] === 6) {
                pieceToMove.position = 0; // Move to the starting position
                pieceToMove.steps += 1;
            }
        } else {
            pieceToMove.position += this.diceValues[0]; // Move forward based on the dice value
            pieceToMove.steps += this.diceValues[0];
        }

        // Update UI to reflect the movement
        this.updatePillPosition(pieceToMove);
        this.checkForCompletion(pieceToMove);
    }

    updatePillPosition(piece) {
        const container = document.querySelector(`.piece-container.${this.currentPlayer}`);
        const pill = container.children[piece.id]; // Get the corresponding pill
        // Update position based on the path coordinates
        pill.style.transform = `translate(${piece.position * 20}px, 0)`; // Adjust this based on your board layout
    }

    checkForCompletion(piece) {
        // Logic to check if the piece has completed its path
        if (piece.steps >= 30) { // Assuming 30 is the end of the path
            piece.completed = true;
            this.scores.player += 1; // Update score for player
            this.updateScoreboard();
        }
        this.switchTurn();
    }

    switchTurn() {
        this.currentPlayer = this.currentPlayer === 'red' ? 'yellow' : 'red'; // Toggle player
        this.canRoll = true; // Allow the next player to roll
        this.updateTurnIndicator();
    }

    updateTurnIndicator() {
        const turnIndicator = document.getElementById('turn-indicator');
        turnIndicator.innerText = `Current Turn: ${this.currentPlayer}`;
    }

    updateScoreboard() {
        document.getElementById('player-score').innerText = `Player: ${this.scores.player}`;
        document.getElementById('computer-score').innerText = `Computer: ${this.scores.computer}`;
    }
}

// Initialize game when document loads
document.addEventListener('DOMContentLoaded', () => {
    const game = new LudoGame();
    document.getElementById('dice1').addEventListener('click', () => game.rollDice());
});