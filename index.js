class LudoGame {
    // ... existing constructor and methods

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
        // Logic to move the piece based on the current player's color and dice value
        const currentPieces = this.pieces[this.currentPlayer];
        // Example: Move the first piece for simplicity
        const pieceToMove = currentPieces[0];

        if (pieceToMove.position === 'home') {
            if (this.diceValues[0] === 6) {
                pieceToMove.position = 0; // Move to the starting position
                pieceToMove.steps += 1;
            }
        } else {
            pieceToMove.position += this.diceValues[0]; // Move forward based on the dice value
            pieceToMove.steps += this.diceValues[0];
        }

        // Check for completion or any other game rules here
        this.checkForCompletion(pieceToMove);
    }

    checkForCompletion(piece) {
        // Logic to check if the piece has completed its path
        if (piece.steps >= 30) { // Assuming 30 is the end of the path
            piece.completed = true;
            this.scores.player += 1; // Update score for player
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
}

// Initialize game when document loads
document.addEventListener('DOMContentLoaded', () => {
    const game = new LudoGame();
    document.getElementById('dice1').addEventListener('click', () => game.rollDice());
});class LudoGame {
    // ... existing constructor and methods

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
        // Logic to move the piece based on the current player's color and dice value
        const currentPieces = this.pieces[this.currentPlayer];
        // Example: Move the first piece for simplicity
        const pieceToMove = currentPieces[0];

        if (pieceToMove.position === 'home') {
            if (this.diceValues[0] === 6) {
                pieceToMove.position = 0; // Move to the starting position
                pieceToMove.steps += 1;
            }
        } else {
            pieceToMove.position += this.diceValues[0]; // Move forward based on the dice value
            pieceToMove.steps += this.diceValues[0];
        }

        // Check for completion or any other game rules here
        this.checkForCompletion(pieceToMove);
    }

    checkForCompletion(piece) {
        // Logic to check if the piece has completed its path
        if (piece.steps >= 30) { // Assuming 30 is the end of the path
            piece.completed = true;
            this.scores.player += 1; // Update score for player
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
}

// Initialize game when document loads
document.addEventListener('DOMContentLoaded', () => {
    const game = new LudoGame();
    document.getElementById('dice1').addEventListener('click', () => game.rollDice());
});class LudoGame {
    constructor() {
        this.playerColors = ['red', 'yellow']; // Player controls these colors
        this.computerColors = ['green', 'orange']; // Computer controls these colors
        this.currentPlayer = 'red';
        this.diceValues = [1, 1];
        this.canRoll = true;
        this.gameActive = true;
        this.pieces = this.initializePieces();
        this.scores = { player: 0, computer: 0 };
        this.pathCoordinates = this.initializePathCoordinates();
        this.safeSpots = this.initializeSafeSpots();
        this.gameRules = this.initializeGameRules();
        this.sounds = this.initializeSounds();
        this.initializeGame();
    }

    // Existing methods...

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
        // Logic to move the piece based on the current player's color and dice value
        const currentPieces = this.pieces[this.currentPlayer];
        // Example: Move the first piece for simplicity
        const pieceToMove = currentPieces[0];

        if (pieceToMove.position === 'home') {
            if (this.diceValues[0] === 6) {
                pieceToMove.position = 0; // Move to the starting position
                pieceToMove.steps += 1;
            }
        } else {
            pieceToMove.position += this.diceValues[0]; // Move forward based on the dice value
            pieceToMove.steps += this.diceValues[0];
        }

        // Check for completion or any other game rules here
        this.checkForCompletion(pieceToMove);
    }

    checkForCompletion(piece) {
        // Logic to check if the piece has completed its path
        if (piece.steps >= 30) { // Assuming 30 is the end of the path
            piece.completed = true;
            this.scores.player += 1; // Update score for player
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
}

// Initialize game when document loads
document.addEventListener('DOMContentLoaded', () => {
    const game = new LudoGame();
    document.getElementById('dice1').addEventListener('click', () => game.rollDice());
});class LudoGame {
    constructor() {
        this.playerColors = ['red', 'yellow']; // Player controls these colors
        this.computerColors = ['green', 'orange']; // Computer controls these colors
        this.currentPlayer = 'red';
        this.diceValues = [1, 1];
        this.canRoll = true;
        this.gameActive = true;
        this.pieces = this.initializePieces();
        this.scores = { player: 0, computer: 0 };
        this.pathCoordinates = this.initializePathCoordinates();
        this.safeSpots = this.initializeSafeSpots();
        this.gameRules = this.initializeGameRules();
        this.sounds = this.initializeSounds();
        this.initializeGame();
    }

    initializePieces() {
        const pieces = {};
        [...this.playerColors, ...this.computerColors].forEach(color => {
            pieces[color] = Array(4).fill().map((_, i) => ({
                id: i,
                position: 'home',
                steps: 0,
                safe: false,
                completed: false
            }));
        });
        return pieces;
    }

    initializePathCoordinates() {
        return {
            red: [
                // Start position
                {x: 60, y: 85},
                // Outer path
                {x: 60, y: 75}, {x: 60, y: 65}, {x: 60, y: 55},
                {x: 50, y: 55}, {x: 40, y: 55}, {x: 30, y: 55},
                {x: 30, y: 45}, {x: 30, y: 35}, {x: 30, y: 25},
                {x: 40, y: 25}, {x: 50, y: 25}, {x: 60, y: 25},
                {x: 60, y: 15}, {x: 60, y: 5}, {x: 60, y: 0},
                {x: 70, y: 0}, {x: 70, y: 5}, {x: 70, y: 15},
                {x: 70, y: 25}, {x: 80, y: 25}, {x: 90, y: 25},
                {x: 90, y: 35}, {x: 90, y: 45}, {x: 90, y: 55},
                {x: 80, y: 55}, {x: 70, y: 55}, {x: 70, y: 65},
                {x: 70, y: 75}, {x: 70, y: 85}, {x: 70, y: 95},
                // Home stretch
                {x: 65, y: 85}, {x: 65, y: 75}, {x: 65, y: 65},
                {x: 65, y: 55}, {x: 65, y: 45}, {x: 65, y: 35}
            ],
            green: [
                // Similar coordinate pattern for green
                {x: 85, y: 60},
                // ... complete path coordinates
            ],
            yellow: [
                // Similar coordinate pattern for yellow
                {x: 15, y: 40},
                // ... complete path coordinates
            ],
            orange: [
                // Similar coordinate pattern for orange
                {x: 40, y: 15},
                // ... complete path coordinates
            ]
        };
    }

    initializeSafeSpots() {
        return {
            red: [0, 8, 13, 21, 26, 34],
            green: [0, 8, 13, 21, 26, 34],
            yellow: [0, 8, 13, 21, 26, 34],
            orange: [0, 8, 13, 21, 26, 34]
        };
    }

    initializeGameRules() {
        return {
            mustKill: true, // Nigerian rule: Must capture if possible
            doubleMove: true, // Can move twice with doubles
            sixesToStart: true, // Need a 6 to start
            bounceBack: true, // Pieces bounce back if they can't complete move
            killToStart: false, // Don't need to kill to get out (Nigerian rule)
            safeOnDouble: true // Pieces are safe when doubled up
        };
    }

    initializeSounds() {
        return {
            roll: document.getElementById('roll-sound'),
            move: document.getElementById('move-sound'),
            capture: document.getElementById('capture-sound'),
            win: document.getElementById('win-sound'),
            turn: document.getElementById('turn-sound'),
            six: document.getElementById('six-sound'),
            count: document.getElementById('count-sound'),
            validMove: document.getElementById('valid-move-sound'),
            invalidMove: document.getElementById('invalid-move-sound'),
            select: document.getElementById('piece-select-sound')
        };
    }

    initializeGame() {
        this.setupEventListeners();
        this.createPathIndicators();
        this.updateDisplay();
    }

    setupEventListeners() {
        const rollButton = document.getElementById('roll-button');
        rollButton.addEventListener('click', () => this.rollDice());

        document.querySelectorAll('.character-piece').forEach(piece => {
            piece.addEventListener('click', () => {
                const section = piece.parentElement.dataset.section;
                const index = parseInt(piece.dataset.index);
                this.handlePieceClick(section, index);
            });
        });
    }

    async rollDice() {
        if (!this.canRoll || !this.gameActive) return;
        
        const isPlayerTurn = this.playerColors.includes(this.currentPlayer);
        if (!isPlayerTurn && !this.isComputerTurn()) return;

        this.canRoll = false;
        const rollButton = document.getElementById('roll-button');
        rollButton.disabled = true;

        // Play roll sound
        this.sounds.roll.play();

        // Animate dice roll
        await this.animateDiceRoll();

        // Show valid moves
        this.highlightValidMoves();
    }

    async animateDiceRoll() {
        const dice = document.querySelectorAll('.dice');
        dice.forEach(die => die.classList.add('rolling'));
        
        return new Promise(resolve => {
            setTimeout(() => {
                this.diceValues = [
                    Math.floor(Math.random() * 6) + 1,
                    Math.floor(Math.random() * 6) + 1
                ];
                
                dice.forEach((die, index) => {
                    die.classList.remove('rolling');
                    die.textContent = this.diceValues[index];
                });

                resolve();
            }, 1000);
        });
    }

    handlePostRoll() {
        const validMoves = this.getValidMoves(this.currentPlayer);
        
        if (validMoves.length === 0) {
            setTimeout(() => this.switchTurn(), 1000);
            return;
        }

        if (this.isComputerTurn()) {
            setTimeout(() => this.makeComputerMove(validMoves), 1000);
        } else {
            this.highlightValidPieces(validMoves);
        }
    }

    getValidMoves(color) {
        const moves = [];
        const pieces = this.pieces[color];
        
        pieces.forEach((piece, index) => {
            if (this.canMovePiece(color, index)) {
                moves.push({
                    pieceIndex: index,
                    positions: this.calculatePossiblePositions(color, index)
                });
            }
        });
        
        return moves;
    }

    canMovePiece(color, pieceIndex) {
        const piece = this.pieces[color][pieceIndex];
        
        // If piece is at home, need a 6 to move out
        if (piece.position === 'home') {
            return this.diceValues.includes(6);
        }

        // If piece is on board, check if movement is possible
        if (piece.position === 'board') {
            const possibleSteps = [...this.diceValues];
            return possibleSteps.some(steps => 
                this.isValidMove(color, pieceIndex, steps));
        }

        return false;
    }

    async movePiece(color, pieceIndex, steps) {
        const piece = this.pieces[color][pieceIndex];
        const element = document.querySelector(
            `.character-piece[data-player="${color}"][data-index="${pieceIndex}"]`
        );

        // Calculate path
        const path = this.calculateMovementPath(color, piece.steps, steps);
        
        // Animate through path
        for (let position of path) {
            await this.animateToPosition(element, position);
            await this.sleep(100); // Delay between steps
        }

        // Update piece state
        piece.steps += steps;
        
        // Check for captures
        await this.checkAndAnimateCaptures(color, piece.steps);
        
        // Check for winning
        if (this.hasCompletedCircuit(color, piece.steps)) {
            await this.animateWinningPiece(element);
            piece.completed = true;
            this.updateScore(color);
        }
    }

    calculateMovementPath(color, fromStep, steps) {
        const path = this.pathCoordinates[color];
        const moves = [];
        let currentStep = fromStep;

        while (currentStep < path.length) {
            if (currentStep + steps < path.length) {
                moves.push(path[currentStep + steps]);
                currentStep += steps;
            } else {
                moves.push(path[currentStep + steps - path.length]);
                currentStep = (currentStep + steps) % path.length;
            }
        }

        return moves;
    }

    checkAndAnimateCaptures(color, newPosition) {
        // Implementation of checkAndAnimateCaptures method
    }

    animateToPosition(element, position) {
        return new Promise(resolve => {
            element.style.transition = 'all 0.2s ease-in-out';
            element.style.left = position.x + '%';
            element.style.top = position.y + '%';
            
            setTimeout(resolve, 200);
        });
    }

    animateWinningPiece(element) {
        element.classList.add('winning');
        setTimeout(() => element.classList.remove('winning'), 1000);
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async handlePieceClick(section, index) {
        if (!this.isValidMove(section, index)) {
            this.sounds.invalidMove.play();
            return;
        }

        this.sounds.select.play();
        await this.animatePieceMovement(section, index);
    }

    async animatePieceMovement(section, index) {
        const piece = document.querySelector(
            `.piece-container.${section} .character-piece[data-index="${index}"]`
        );
        const totalSteps = this.diceValues[0] + this.diceValues[1];

        // Counting animation
        for (let step = 1; step <= totalSteps; step++) {
            await this.animateStep(piece, step);
            this.sounds.count.play();
            await this.sleep(300);
        }

        // Update piece position
        this.updatePiecePosition(section, index, totalSteps);
        
        // Check for captures
        await this.checkForCaptures(section, this.pieces[section][index].steps);

        // Switch turns if no six was rolled
        if (!this.diceValues.includes(6)) {
            await this.switchTurn();
        } else {
            this.canRoll = true;
            document.getElementById('roll-button').disabled = false;
        }
    }

    async animateStep(piece, step) {
        return new Promise(resolve => {
            piece.classList.add('counting');
            piece.setAttribute('data-count', step);
            
            setTimeout(() => {
                piece.classList.remove('counting');
                resolve();
            }, 200);
        });
    }

    async checkForCaptures(section, position) {
        const capturedPieces = this.findCapturedPieces(section, position);
        
        for (const captured of capturedPieces) {
            await this.animateCapture(captured.section, captured.index);
            this.sounds.capture.play();
            await this.sleep(500);
        }
    }

    async animateCapture(section, index) {
        const piece = document.querySelector(
            `.piece-container.${section} .character-piece[data-index="${index}"]`
        );
        
        piece.classList.add('captured');
        await this.sleep(500);
        piece.classList.remove('captured');
        
        // Return piece to home
        this.pieces[section][index].position = 'home';
        this.pieces[section][index].steps = 0;
    }

    computerTurn() {
        // Advanced AI logic
        const currentPieces = this.pieces[this.currentPlayer];
        let bestMove = this.calculateBestMove(currentPieces);

        if (bestMove) {
            setTimeout(() => {
                this.handlePieceClick(this.currentPlayer, bestMove.pieceIndex);
            }, 1000);
        } else {
            this.switchTurn();
        }
    }

    calculateBestMove(pieces) {
        const currentColor = this.currentPlayer;
        let bestMove = null;
        let bestScore = -Infinity;

        pieces.forEach((piece, index) => {
            if (!this.canMovePiece(currentColor, index)) return;

            const possibleMoves = this.calculatePossibleMoves(currentColor, index);
            possibleMoves.forEach(move => {
                const score = this.evaluateMove(currentColor, index, move);
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = { pieceIndex: index, steps: move };
                }
            });
        });

        return bestMove;
    }

    evaluateMove(color, pieceIndex, steps) {
        let score = 0;
        const piece = this.pieces[color][pieceIndex];
        const newPosition = piece.steps + steps;

        // Prioritize getting pieces out of home
        if (piece.position === 'home' && steps === 6) {
            score += 100;
        }

        // Prioritize captures
        if (this.canCaptureWithMove(color, newPosition)) {
            score += 200;
        }

        // Prioritize reaching safe spots
        if (this.safeSpots[color].includes(newPosition)) {
            score += 150;
        }

        // Prioritize advancing pieces closer to home
        score += (newPosition / this.pathCoordinates[color].length) * 50;

        // Avoid moving pieces that are already safe
        if (piece.safe) {
            score -= 30;
        }

        // Consider strategic positioning
        score += this.evaluateStrategicPosition(color, newPosition);

        return score;
    }

    evaluateStrategicPosition(color, position) {
        let score = 0;

        // Check if position blocks opponent pieces
        this.getOpponentColors(color).forEach(oppColor => {
            const blockingValue = this.evaluateBlocking(color, position, oppColor);
            score += blockingValue;
        });

        // Check if position creates a defensive formation
        if (this.createsDefensiveFormation(color, position)) {
            score += 75;
        }

        return score;
    }

    updateDisplay() {
        // Update score display
        document.getElementById('player-score').textContent = this.scores.player;
        document.getElementById('computer-score').textContent = this.scores.computer;

        // Update turn indicators
        document.getElementById('player-turn').classList.toggle('active', this.currentPlayer === 'red');
        document.getElementById('computer-turn').classList.toggle('active', this.currentPlayer !== 'red');

        // Update game status
        const statusElement = document.getElementById('game-status');
        statusElement.textContent = this.currentPlayer === 'red' ? 'Your Turn' : 'Computer\'s Turn';

        // Update piece positions
        this.updatePiecePositions();
    }

    updatePiecePositions() {
        Object.entries(this.pieces).forEach(([color, pieces]) => {
            pieces.forEach((piece, index) => {
                const element = document.querySelector(`.character-piece[data-player="${color}"][data-index="${index}"]`);
                if (piece.position === 'board') {
                    const coords = this.pathCoordinates[color][piece.steps];
                    element.style.transform = `translate(${coords.x}%, ${coords.y}%)`;
                }
            });
        });
    }

    handleWin(player) {
        this.gameActive = false;
        this.sounds.win.play();
        
        if (player === 'red') {
            this.scores.player++;
        } else {
            this.scores.computer++;
        }

        // Animate winner
        const winnerPieces = document.querySelectorAll(`.character-piece[data-player="${player}"]`);
        winnerPieces.forEach(piece => piece.classList.add('winner'));

        // Show win message
        document.getElementById('message').textContent = 
            player === 'red' ? 'Congratulations! You Won!' : 'Computer Wins!';

        // Add replay button
        const replayButton = document.createElement('button');
        replayButton.textContent = 'Play Again';
        replayButton.classList.add('roll-button');
        replayButton.onclick = () => this.resetGame();
        document.querySelector('.game-controls').appendChild(replayButton);
    }

    resetGame() {
        // Reset game state
        this.pieces = this.initializePieces();
        this.currentPlayer = 'red';
        this.gameActive = true;
        this.canRoll = true;

        // Reset UI
        this.updateDisplay();
        document.getElementById('message').textContent = '';
        document.querySelectorAll('.character-piece').forEach(piece => {
            piece.className = 'character-piece';
            piece.style.transform = '';
        });
    }

    async handleTurn() {
        if (!this.gameActive) return;

        const isPlayerTurn = this.playerColors.includes(this.currentPlayer);
        const container = document.querySelector(`.piece-container.${this.currentPlayer}`);
        container.classList.add('active');

        if (isPlayerTurn) {
            // Enable player interaction
            this.enablePlayerMoves();
        } else {
            // Computer's turn
            await this.playComputerTurn();
        }
    }

    async playComputerTurn() {
        await this.sleep(1000); // Brief pause before computer moves
        await this.rollDice();
        
        await this.sleep(500); // Pause to show dice roll
        
        const move = this.calculateBestMove();
        if (move) {
            await this.movePiece(this.currentPlayer, move.pieceIndex, move.steps);
            
            // Check if computer gets another turn (rolled a 6)
            if (this.diceValues.includes(6)) {
                await this.playComputerTurn();
            } else {
                this.switchTurn();
            }
        } else {
            this.switchTurn();
        }
    }

    enablePlayerMoves() {
        const validMoves = this.getValidMoves(this.currentPlayer);
        validMoves.forEach(move => {
            const piece = document.querySelector(
                `.character-piece[data-player="${this.currentPlayer}"][data-index="${move.pieceIndex}"]`
            );
            piece.classList.add('movable');
            piece.onclick = () => this.handlePlayerMove(move);
        });
    }

    async handlePlayerMove(move) {
        // Disable all piece clicks
        this.disableAllPieces();
        
        await this.movePiece(this.currentPlayer, move.pieceIndex, move.steps);
        
        // Check if player gets another turn (rolled a 6)
        if (this.diceValues.includes(6)) {
            this.enableRollButton();
        } else {
            await this.sleep(500);
            this.switchTurn();
        }
    }

    disableAllPieces() {
        document.querySelectorAll('.character-piece').forEach(piece => {
            piece.classList.remove('movable');
            piece.onclick = null;
        });
    }

    switchTurn() {
        document.querySelector(`.piece-container.${this.currentPlayer}`).classList.remove('active');
        
        // Find next player
        const allColors = [...this.playerColors, ...this.computerColors];
        const currentIndex = allColors.indexOf(this.currentPlayer);
        this.currentPlayer = allColors[(currentIndex + 1) % allColors.length];
        
        // Play turn sound
        document.getElementById('turn-sound').play();
        
        // Update turn indicator
        this.updateTurnIndicator();
        
        // Start next turn
        this.handleTurn();
    }

    updateTurnIndicator() {
        const indicator = document.getElementById('turn-indicator');
        const isPlayerTurn = this.playerColors.includes(this.currentPlayer);
        indicator.textContent = isPlayerTurn ? 'Your Turn' : 'Computer\'s Turn';
        indicator.className = isPlayerTurn ? 'player-turn' : 'computer-turn';
    }

    highlightValidMoves() {
        const pieces = this.pieces[this.currentPlayer];
        pieces.forEach((piece, index) => {
            if (this.isValidMove(this.currentPlayer, index)) {
                const element = document.querySelector(
                    `.piece-container.${this.currentPlayer} .character-piece[data-index="${index}"]`
                );
                element.classList.add('valid-move');
                this.sounds.validMove.play();
            }
        });
    }

    isValidMove(color, index) {
        const piece = this.pieces[color][index];
        const steps = this.diceValues[0] + this.diceValues[1];
        return this.canMovePiece(color, index) && this.calculatePossiblePositions(color, index).some(pos => pos.steps === steps);
    }

    calculatePossiblePositions(color, index) {
        const piece = this.pieces[color][index];
        const steps = this.diceValues[0] + this.diceValues[1];
        const path = this.pathCoordinates[color];
        const positions = [];

        if (piece.position === 'home') {
            if (steps === 6) {
                positions.push({ steps: 6, position: 'board' });
            }
        } else if (piece.position === 'board') {
            const possibleSteps = [...this.diceValues];
            possibleSteps.forEach(s => {
                if (s <= 6 - piece.steps && s > 0) {
                    positions.push({ steps: piece.steps + s, position: 'board' });
                }
            });
        }

        return positions;
    }

    updatePiecePosition(color, index, steps) {
        const piece = this.pieces[color][index];
        const element = document.querySelector(
            `.character-piece[data-player="${color}"][data-index="${index}"]`
        );

        // Calculate path
        const path = this.calculateMovementPath(color, piece.steps, steps);
        
        // Update piece position
        piece.steps = steps;
        piece.position = 'board';
        
        // Animate through path
        for (let position of path) {
            this.animateToPosition(element, position);
        }
    }

    findCapturedPieces(color, position) {
        const capturedPieces = [];
        const pieces = this.pieces[color];
        
        pieces.forEach((piece, index) => {
            if (piece.position === 'board' && this.calculatePossiblePositions(color, index).some(pos => pos.steps === position)) {
                capturedPieces.push({ section: color, index });
            }
        });
        
        return capturedPieces;
    }

    getOpponentColors(color) {
        return this.playerColors.concat(this.computerColors).filter(c => c !== color);
    }

    createsDefensiveFormation(color, position) {
        // Implementation of createsDefensiveFormation method
        return false;
    }

    evaluateBlocking(color, position, oppColor) {
        // Implementation of evaluateBlocking method
        return 0;
    }
}

// Initialize game when document loads
document.addEventListener('DOMContentLoaded', () => {
    new LudoGame();
});