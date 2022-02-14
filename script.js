import Deck from './main.js';


const compCarSlot = document.querySelector('.computer-card-slot')
const deck = new Deck();

deck.shuffle()

compCarSlot.appendChild(deck.cards[0].getHTML())