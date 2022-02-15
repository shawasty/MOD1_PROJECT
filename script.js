import Deck from './main.js';
// const computerCaSlot = document.querySelector('.computer-card');
const playerCaSlot = document.querySelector('.player-card');
const compCarSlot = document.querySelector('.computer-card');
const computerDeckEle = document.querySelector('.computer-deck');
const playerDeckEle = document.querySelector('.player-deck');
const text = document.querySelector('.text');




let playerDeck, compuDeck;

document.addEventListener

startGame();  //this starts game immidiately before
function startGame(){ 
// let lenCards = this.cards.length;
const deck = new Deck();
deck.shuffle();
// compCarSlot.appendChild(deck.cards[7].getHTML())
//split into two equal parts of cards

const midDeck = Math.ceil(deck.lenCards/2); 
// console.log(midDeck)//note that lencard is defined in main.js as a gether function;
playerDeck = new Deck(deck.cards.slice(0, midDeck));
compuDeck = new Deck(deck.cards.slice(midDeck , deck.lenCards));


// console.log(playerDeck)
// console.log(compuDeck)
startReset()

}
function startReset(){
    compCarSlot.innerHTML ='';
    playerCaSlot.innerHTML ='';
    text.innerText ='';

    updateDeckCount()
}

function updateDeckCount(){
    computerDeckEle.innerText = compuDeck.lenCards;
    playerDeckEle.innerText = playerDeck.lenCards;
}
// compCarSlot.appendChild(deck.cards[0].getHTML())