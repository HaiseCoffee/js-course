/*
    2H = Hearts
    2C = Clubs (Tréboles)
    2D = Diamonds
    2S = Swords
*/
const initialNumber = 2;
const finalNumber = 10;
const cardNumber = 0;

let deck = [];
const types = ['C', 'H', 'D', 'S'];
const specials = ['A', 'K', 'Q', 'J'];
const valueA = 11;
const valueSpecials = 10;

let playerPoints = 0;
let computerPoints = 0;

const divPlayerCards = document.querySelector('#player-cards');
const divComputerCards = document.querySelector('#computer-cards');
// Get all "small" elements
const pointsHTML = document.querySelectorAll('small');

// HTML References
const btnAsk = document.querySelector('#btnAskCard');
const btnFinish = document.querySelector('#btnFinish');
const btnNewGame = document.querySelector('#btnNewGame');

const createDeck = () => {
    
    // Las cartas son del 2 al 10
    for (let i = initialNumber; i <= finalNumber; i++) {
        for(let type of types) {
            deck.push(i + type);
        }
    } //From 2 to 10, and from type C to S, we'll add all numbered cards with their specific type.

    for(let type of types) {
        for(let special of specials) {
            deck.push(special + type);
        }
    } // And here we'll add all the special ones with the same logic than the for above.
    deck = _.shuffle(deck); //shuffle mezcla
    return deck;
}

const askCard = () => {

    if(deck.length === 0) {
        throw 'Cartas no disponibles en el deck';
    }
    let card = deck.pop();
    return card;

}

const cardValue = (card) => { 

    // Since in JS we can work with Strings, we'll be able to 
    // separate them as an array.
    // substring function helps us to take a value from an specific position to a final position.
    // We are using this because in case we'll have a 10 card, the first value would be 1 and
    // the final one 0, since the card.length is the type and -1 is "0".
    // But if we have a card with just one number, card.length - 1 would be the same as 0.

    const value = card.substring(0, card.length - 1);

    //Check if is the value is a number
    //NaN: Not a Number

    return (isNaN(value)) ? 
            ((value === 'A') ? valueA : valueSpecials) 
            : parseInt(value);

}

createDeck();

const computerTurn = (minPoints) => {
    do {
        const card = askCard();

        computerPoints += cardValue(card);
        pointsHTML[1].innerText = computerPoints;
    
        // <img class="card" src="assets/cartas/3C.png">
    
        const cardImg = document.createElement('img');
        cardImg.src = `assets/cartas/${card}.png`;
        cardImg.classList.add('card');
    
        divComputerCards.append(cardImg);

        if(minPoints > 21 ) {
            break;
        }
    } while((computerPoints < minPoints) && (minPoints <= 21));
    
    // This will be executed less than 1 second (1000 equals 1 sec)!
    setTimeout(() => {
        if (computerPoints === minPoints) {
            alert('Draw!');
        } else if (minPoints > 21) {
            alert('Computer won!');
        } else if (computerPoints > 21) {
            alert('Player won');
        } else {
            alert('Computer won!');
        }
    }, 10);

}

// Buttons Events
btnAsk.addEventListener('click', () => {
    const card = askCard();

    playerPoints += cardValue(card);
    pointsHTML[0].innerText = playerPoints;

    // <img class="card" src="assets/cartas/3C.png">

    const cardImg = document.createElement('img');
    cardImg.src = `assets/cartas/${card}.png`;
    cardImg.classList.add('card');

    divPlayerCards.append(cardImg);

    if(playerPoints > 21) {
        console.warn('You lose');
        btnAsk.disabled = true;
        btnFinish.disabled = true;
        computerTurn(playerPoints);
    } else if(playerPoints === 21) {
        console.warn('You won!');
        btnAsk.disabled = true;
        btnFinish.disabled = true;
        computerTurn(playerPoints);
    }
});

btnFinish.addEventListener('click', () => {
    btnAsk.disabled = true;
    btnFinish.disabled = true;
    computerTurn(playerPoints);
})

btnNewGame.addEventListener('click', () => {
    // location.reload(); to refresh the page
    console.clear();
    deck = [];
    deck = createDeck();
    playerPoints = 0;
    computerPoints = 0;
    pointsHTML[0].innerText = 0;
    pointsHTML[1].innerText = 0;
    divComputerCards.innerHTML = '';
    divPlayerCards.innerHTML = '';
    btnAsk.disabled = false;
    btnFinish.disabled = false;
})
// Just in case I want to test the throw error.
// deck = [];
