const gameBoard = document.getElementById("gameBoard");
const restartButton = document.getElementById("restart");

let cards = [];
let flippedCards = [];
let matchedCards = [];
let totalMatches = 0;
const cardValues = ["A", "B", "C", "D", "E", "F", "G", "H"];

// Create and shuffle cards
function createCards() {
    const cardPairs = [...cardValues, ...cardValues];
    cards = cardPairs.sort(() => 0.5 - Math.random());
}

// Render cards on the board
function renderCards() {
    gameBoard.innerHTML = '';
    cards.forEach((value, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
}

// Flip the card and check for matches
function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped") && !this.classList.contains("matched")) {
        this.classList.add("flipped");
        this.textContent = cards[this.dataset.index];
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

// Check if the two flipped cards match
function checkMatch() {
    const [firstCard, secondCard] = flippedCards;

    if (cards[firstCard.dataset.index] === cards[secondCard.dataset.index]) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        matchedCards.push(firstCard, secondCard);
        totalMatches++;

        if (totalMatches === cardValues.length) {
            setTimeout(() => alert("You won !"), 500);
            restartButton.style.display = "block";
        }
    } else {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard.textContent = '';
        secondCard.textContent = '';
    }
    flippedCards = [];
}

// Restart the game
function restartGame() {
    createCards();
    renderCards();
    totalMatches = 0;
    matchedCards = [];
    restartButton.style.display = "none";
}

// Initial setup
restartButton.addEventListener("click", restartGame);
restartGame();
