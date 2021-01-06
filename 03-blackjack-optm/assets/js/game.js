
// Anonymous functions auto-invoked
// Does not have a name, so it'll be hard to call it by console.
const myModule = (() => {
    //be strict to evaluate my code
    'use strict'
    // If I don't say that 'characters' is a const, it'll be still functional UNLESS I use 'use strict'
    


    const initialNumber = 2;
    const finalNumber = 10;

    let deck = [];
    const types = ['C', 'H', 'D', 'S'],
          specials = ['A', 'K', 'Q', 'J'];

    const valueA = 11,
          valueSpecials = 10;

    let playerPoints = [];

    const divPlayerCards = document.querySelectorAll('.divCards'),
          pointsHTML = document.querySelectorAll('small');
          // Get all "small" elements

    // HTML References
    const btnAsk = document.querySelector('#btnAskCard'),
          btnFinish = document.querySelector('#btnFinish'),
          btnNewGame = document.querySelector('#btnNewGame');

    const initializeGame = (numberPlayers = 2) => {
        deck = createDeck();
        playerPoints = [];
        // LAST VALUE WILL ALWAYS BE THE COMPUTER
        for(let i = 0; i < numberPlayers; i++) {
            playerPoints.push(0);
        }
        pointsHTML.forEach(elem => elem.innerText = 0);
        divPlayerCards.forEach(elem => elem.innerText = '');
        btnAsk.disabled = false;
        btnFinish.disabled = false;

    }

    const createDeck = () => {
        // Las cartas son del 2 al 10
        deck = [];
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
         
        return _.shuffle(deck); //Shuffle = mezclar
    }

    const askCard = () => {

        if(deck.length === 0) {
            throw 'Non available cards on deck';
        }
        return deck.pop();

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

    //Turn: 0 = first player, last one: computer
    const accumulatePoints = (card, turn) => {
        playerPoints[turn] += cardValue(card);
        pointsHTML[turn].innerText = playerPoints[turn];
        return playerPoints[turn];

    }

    const createCard = (card, turn) => {
        const cardImg = document.createElement('img');
        cardImg.src = `assets/cartas/${card}.png`;
        cardImg.classList.add('cardM');
        divPlayerCards[turn].append(cardImg);

    }

    const computerTurn = (minPoints) => {
        let computerPoints = 0;
        do {
            const card = askCard();
            computerPoints = accumulatePoints(card, playerPoints.length - 1);
            createCard(card, playerPoints.length - 1);

        } while((computerPoints < minPoints) && (minPoints <= 21));
        // This will be executed less than 1 second (1000 equals 1 sec)!
        determinateWinner();
    }

    const determinateWinner = () => {
        const [minPoints, computerPoints] = playerPoints;
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
        }, 100);
    }

    // Buttons Events
    btnAsk.addEventListener('click', () => {
        const card = askCard();
        const playerPoints = accumulatePoints(card, 0);

        createCard(card, 0);

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
        if(playerPoints[0] === 0) {
            alert('You have 0 points, do not give up easily!');
        } else {
            btnAsk.disabled = true;
            btnFinish.disabled = true;
            computerTurn(playerPoints[0]);    
        }
    })

    btnNewGame.addEventListener('click', () => {
        // location.reload(); to refresh the page
        initializeGame();        
    })
    // Just in case I want to test the throw error.
    // deck = [];

    //This will be public, and all the other things private.
    return {
        newGame: initializeGame
    };

})();

