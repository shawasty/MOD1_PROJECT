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
const clockCountDown = document.querySelector('#timeNum');

const text = document.querySelector('.text');
const startBut = document.querySelector("#start");
const resetBut = document.querySelector("#reset");
const nextBut = document.querySelector("#next");
const musicBut = document.querySelector("#music");

let playerDeck, compuDeck
let flipSound = new Audio('sounds/shuff1.wav')
let audio = new Audio('sounds/playi1.mp3');       
let winSound = new Audio('sounds/win1.wav')
let drawSound = new Audio('sounds/draw.wav')
let loseSound = new Audio('sounds/try_again.wav')

let inSession = false;  //set default value to false
let stopGame = false;

let clockCounter = '';

resetBut.addEventListener('click', ()=>{
    startGame();
    clockCounter = 10;
    nextBut.style.display = 'inline-block' 
})
musicBut.addEventListener('click', ()=>{
    if(audio.paused){
        playAudio()
    }else {
        pauseAudio()
    }
   
        // pauseAudio()

})
nextBut.addEventListener('click', ()=>{
    if (inSession){
        startReset()
    }
    else{
        flipcard()
    };
})
//set a countdown timer for 

function timeIt(){
    clockCounter --;
    if(clockCounter > 0){
        // console.log(clockCounter)
        // startGame();
        clockCountDown.innerHTML = clockCounter;
    }else if(clockCounter === 0){
        // console.log('hello')
        gameOver();
        clockCountDown.innerText = 'Game Over';
        // clearInterval(clockC);
    }
}
setInterval(timeIt,1000)

startGame();  //this starts game immidiately before
function startGame(){ 
    const deck = new Deck();
    deck.shuffle();
    // audio.play();
    audio.volume = 0.1;  // decreases audio volume
// compCarSlot.appendChild(deck.cards[7].getHTML())
//split into two equal parts of cards
    const midDeck = Math.ceil(deck.lenCards/2); 
    // console.log(midDeck)//note that lencard is defined in main.js as a getter function;
    playerDeck = new Deck(deck.cards.slice(0, midDeck));
    compuDeck = new Deck(deck.cards.slice(midDeck , deck.lenCards));
    inSession = false;
    stopGame = false;
    // clockCounter = 10;


// console.log(playerDeck)
// console.log(compuDeck)
startReset()    //this cleans out deck before start of next game

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
    flipSound.play();
    const playerCard = playerDeck.pop();
    const computerCard = compuDeck.pop();

    playerCaSlot.appendChild(playerCard.getHTML());
    compCarSlot.appendChild(computerCard.getHTML());

    updateDeckCount()
// check with the roundWinner function's condition, if playerCard won
    if(roundWinner(playerCard, computerCard)){
        text.innerText = 'Win 😊';
        winSound.play();
        playerDeck.push(playerCard);
        playerDeck.push(computerCard);
        //add emojie
    }   //  check if computerCard won
    else  if(roundWinner( computerCard, playerCard)){
        text.innerText = 'Lose 😢';
        loseSound.play();
        compuDeck.push(playerCard);
        compuDeck.push(computerCard);
 
    } else{
        drawSound.play()
        text.innerText = 'Draw'
        playerDeck.push(playerCard);
        compuDeck.push(computerCard);
        // add sound
    }


}
function playAudio() {
    audio.play();
    audio.volume = 0.1; 
  }
  
function pauseAudio() {
    audio.pause();
  }
function updateDeckCount(){

    computerDeckEle.innerText = compuDeck.lenCards;
    playerDeckEle.innerText = playerDeck.lenCards;
}

function roundWinner (card1, card2){
    return numCardValue[card1.value]>numCardValue[card2.value]
    
}

// function gameOver(deck){
//     return deck.lenCards === 20;
// }
function gameOver(deck){
    if (compuDeck.lenCards > playerDeck.lenCards){
        text.innerText = 'You lose !!!';
        stopGame = true
        console.log('computer wins')
    } else if (compuDeck.lenCards < playerDeck.lenCards){
        text.innerText = 'You lose !!!';
        stopGame = true
        console.log('player win')
    }else {
       
       text.innerText = 'It was a draw.'
    }
    nextBut.style.display = 'none' 
    // if (clockCounter === 0){
    //   stopGame = true;
    // }
}
