/*******************************************************
DICE GAME
 *******************************************************/
//Setting Variables.
let scores, roundScore, activePlayer, gamePlaying;
const rootImgDir = './resources/img/dice';

class DiceRollerGame {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameOver = false;

    generateRandomRoll = (bounds = 6) => {
        return Math.ceil(Math.random() * bounds)
    }

    setDiceGraphic = (diceNumber, diceValue) => {
        const diceElement = document.querySelector(`#dice${diceNumber}`)
        diceElement.style.display = 'block'
        diceElement.src = `${rootImgDir}/dice${diceValue}.svg`
    }

    updateRoundScore = (dieA, dieB) => {
        const total = dieA + dieB
        if (total === 12) {
            this.roundScore *= 2
        } else if (total <= 4) {
            this.roundScore = 0
        } else {
            this.roundScore += total
        }
    }

    displayRoundScore = () => {
        document.getElementById(`current-${this.activePlayer}`).textContent = this.roundScore
    }

    updateTotalScore = () => {
        this.scores[this.activePlayer] += this.roundScore
    }

    displayTotalScore = () => {
        document.getElementById(`score-${this.activePlayer}`).textContent = this.scores[this.activePlayer]
    }

    nextPlayer = () => {
        this.roundScore = 0;
        this.activePlayer = (this.activePlayer + 1) % 2
        this.showActivePlayer()
    }

    showActivePlayer = () => {
        document.getElementById("current-0").textContent = 0;
        document.getElementById("current-1").textContent = 0;
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    }
// Roll the Dice!
    onRoll = () => {
        if (!this.gameOver) {
            const dieA = this.generateRandomRoll()
            const dieB = this.generateRandomRoll()

            this.setDiceGraphic(0, dieA)
            this.setDiceGraphic(1, dieB)

            this.updateRoundScore(dieA, dieB)
            this.displayRoundScore()

            if (dieA + dieB <= 4) {
                this.nextPlayer()
            }
        }
    }
// Holding onto your points and passing the turn over
    onHold = () => {
        this.updateTotalScore()
        this.displayTotalScore()
        this.nextPlayer()
        if (this.nextPlayer[this.scores] >= 100) {
            document.querySelector("#name-" + this.activePlayer).textContent = "Winner!";
        }
    }
// Restarting The Game
    newGame = () => {
        this.scores = [0, 0];
        this.roundScore = 0;
        this.activePlayer = 0;
        this.gameOver = false;
    
        // Update UI
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }

    init = () => {
        // arrow functions and calling this.onRoll ensure correct object bindings
        document.querySelector('.btn-roll').addEventListener('click', () => { this.onRoll() })
        document.querySelector('.btn-hold').addEventListener('click', () => { this.onHold() })
        document.querySelector('.btn-new-game').addEventListener('click', () => { this.newGame() })
    }
}

const drg = new DiceRollerGame()
drg.init()

/*******************************************************
POPUP
 *******************************************************/
const openInfoPopUps = document.querySelectorAll('[js-info-open]')
const closePopUps = document.querySelectorAll('[js-close-popup]');
const overlay = document.getElementById('overlay');

// Learn - FOR DICE GAME
openInfoPopUps.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.getElementById('info-popup');
        openPopUp(popup);
    });
});

// GROUNDWORK
overlay.addEventListener('click', () => {
    const popups = document.querySelectorAll('.popup.active');
    popups.forEach(popup => {
        closePopUp(popup);
    });
});

closePopUps.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        closePopUp(popup);
    });
});

function openPopUp(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopUp(popup) {
    if (popup == null) return;
    popup.classList.remove('active');
    overlay.classList.remove('active');
}