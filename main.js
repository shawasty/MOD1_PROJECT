// create variables for the different suits and their values
const suits =[ '♠', '♥', '♦','♣'];  //obtained from google ('HTML suit symbols')
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

export default class Deck {
    // creat a class to take care of the deck, 
    //constructor takes an arguement of cards because the cars could be anything , either a full
    //52 cards or in my case , 26 for each 
    constructor(cards = freshDeck()) {
        this.cards = cards
    };
    shuffle(){
        let lenCards = this.cards.length;
        //simple way to suffle
        for (let i =lenCards -1; i > 0; i--){
            const newIndex = Math.floor(Math.random() * (i + 1));
            //the following assigns new indexes from the newly gained index to the original
            const oldIndex = this.cards[i];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldIndex;


        }
        // this.cards.sort((a,b)=>Math.random()- .5)
    }
};
// create a class for cards ( since a card can vary from A - K) with an aguements of suit, value
class Card {
    constructor(suit , value){
        this.suit = suit
        this.value = value

    }

};
function freshDeck(){
    return suits.flatMap(suit =>{
        //flatMap fxn turns 4 different arrays of 13 into one formated array
       return values.map(value =>{
            return new Card(suit, value)
        })
    })
};
