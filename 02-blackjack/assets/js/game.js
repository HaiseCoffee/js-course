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
    console.log(deck);
    return deck;
}

const askCard = () => {

    if(deck.length === 0) {
        throw 'Cartas no disponibles en el deck';
    }
    let card = deck.pop();
    console.log(deck);
    console.log(card);
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
askCard();
cardValue('AD');

// Just in case I want to test the throw error.
// deck = [];
