import Deck from './main.js';



const compCarSlot = document.querySelector('.computer-card-slot');

let playerDeck, compuDeck;

startGame();  //this starts game immidiately before
function startGame(){ 
// let lenCards = this.cards.length;
const deck = new Deck();
deck.shuffle()
//split into two equal parts of cards

const midDeck = Math.ceil(deck.lenCards/2); 
// console.log(midDeck)//note that lencard is defined in main.js as a gether function;
playerDeck = new Deck(deck.cards.slice(0, midDeck));
compuDeck = new Deck(deck.cards.slice(midDeck , deck.lenCards))

console.log(playerDeck)
console.log(compuDeck)

}
// compCarSlot.appendChild(deck.cards[0].getHTML())