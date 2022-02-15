import Deck from './main.js';
// const computerCaSlot = document.querySelector('.computer-card');
const playerCaSlot = document.querySelector('.player-card-slot');
const compCarSlot = document.querySelector('.computer-card-slot');
const computerDeckEle = document.querySelector('.computer-deck');
const playerDeckEle = document.querySelector('.player-deck');
const text = document.querySelector('.text');




let playerDeck, compuDeck
let inSession = false  //set default value to false

document.addEventListener('click', ()=>{
    if (inSession){
        startReset()
    }
    else{
        flipcard()
    };

})

startGame();  //this starts game immidiately before
function startGame(){ 
    const deck = new Deck();
    deck.shuffle();
// compCarSlot.appendChild(deck.cards[7].getHTML())
//split into two equal parts of cards

    const midDeck = Math.ceil(deck.lenCards/2); 
    // console.log(midDeck)//note that lencard is defined in main.js as a getter function;
    playerDeck = new Deck(deck.cards.slice(0, midDeck));
    compuDeck = new Deck(deck.cards.slice(midDeck , deck.lenCards));
    inSession = false;




// console.log(playerDeck)
// console.log(compuDeck)
startReset()    //this cleans out deck before start of game

}
function startReset(){
    inSession = false
    compCarSlot.innerHTML ='';
    playerCaSlot.innerHTML ='';
    text.innerText ='';

    updateDeckCount()
}

function flipcard(){
    inSession = true
    //get the first card from the deck

    const playerCard = playerDeck.pop();
    const computerCard = compuDeck.pop();

    playerCaSlot.appendChild(playerCard.getHTML());
    compCarSlot.appendChild(computerCard.getHTML())
}

function updateDeckCount(){
    computerDeckEle.innerText = compuDeck.lenCards;
    playerDeckEle.innerText = playerDeck.lenCards;
}
// compCarSlot.appendChild(deck.cards[0].getHTML())