import Deck from './main.js';

//because of A,J,Q,K in the cards , convert them to their 
//numerical values to help check the winner 

const numCardValue ={
    "2" : 2,
    "3" : 3,
    "4" : 4,
    "5" : 5,
    "6" : 6,
    "7" : 7,
    "8" : 8,
    "9" : 9,
    "10": 10,
    "J" : 11,
    "Q" : 12,
    "K" : 13,
    "A" : 14

}
// const computerCaSlot = document.querySelector('.computer-card');
const playerCaSlot = document.querySelector('.player-card-slot');
const compCarSlot = document.querySelector('.computer-card-slot');
const computerDeckEle = document.querySelector('.computer-deck');
const playerDeckEle = document.querySelector('.player-deck');
const text = document.querySelector('.text');




let playerDeck, compuDeck
let inSession = false;  //set default value to false
let stopGame = false;

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
    stopGame = false;




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
    compCarSlot.appendChild(computerCard.getHTML());

    updateDeckCount()
// check with the roundWinner function's condition, if playerCard won
    if(roundWinner(playerCard, computerCard)){
        text.innerText = 'Win'
        playerDeck.push(playerCard);
        playerDeck.push(computerCard);
        //add sound
        //add emojie
    }   //  check if computerCard won
    else  if(roundWinner( computerCard, playerCard)){
        text.innerText = 'Lose'
        compuDeck.push(playerCard);
        compuDeck.push(computerCard);
        // add sound
        //add emojie
    } else{
        text.innerText = 'Draw'
        playerDeck.push(playerCard);
        compuDeck.push(computerCard);
        // add sound
    }

    if (gameOver(playerDeck)){
        text.innerText = 'You lose !!!';
        stopGame = true
    }else if(gameOver(compuDeck)){
        text.innerText = 'You lose !!!';
        stopGame = true
    }
    

}

function updateDeckCount(){

    computerDeckEle.innerText = compuDeck.lenCards;
    playerDeckEle.innerText = playerDeck.lenCards;
}

function roundWinner (card1, card2){
    return numCardValue[card1.value]>numCardValue[card2.value]
    
}

function gameOver(deck){
    return deck.lenCards === 0;
}
// compCarSlot.appendChild(deck.cards[0].getHTML())