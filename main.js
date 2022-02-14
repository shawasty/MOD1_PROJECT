// create variables for the different suits and their values
const suits =[ '♠', '♥', '♦','♣']   //obtained from google ('HTML suit symbols')

class Deck {
    // creat a class to take care of the deck, 
    //constructor takes an arguement of cards because the cars could be anything , either a full
    //52 cards or in my case , 26 for each 
    constructor(cards) {
        this.cards = cards

    }
}
// create a class for cards ( since a card can vary from A - K) with an aguements of suit, value
class Card {
    constructor(suit , value){
        this.suit = suit
        this.value = value

    }

}