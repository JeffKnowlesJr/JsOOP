class Deck {
  constructor() {
    this.cards = [];
    // console.log("this.cards " + this.cards);
    let suits = ['Hearts','Diamonds','Spades','Clubs'];
    // console.log("suits " + suits);
    let nums = {'Ace': 1 ,'Two': 2 ,'Three': 3 ,'Four': 4 ,'Five': 5 ,'Six': 6 ,'Seven': 7 ,'Eight': 8 ,'Nine': 9 ,'Ten': 10 ,'Jack': 11 ,'Queen': 12 ,'King': 13}
    // console.log("nums " + nums);
    // console.log("suits.length " + suits.length);
    for ( let i = 0; i < suits.length; i++) {
      for ( var key in nums ) {
        // console.log("Create Card")
        let temp = new Card(suits[i], key, nums[key]);
        // console.log("Card: " + temp);
        this.cards.push(temp);
      }
    }
  }
  reset() {
//     console.log("Reset initialized");
    let tempDeck = new Deck();
//     console.log("tempDeck Constructed");
    this.cards = tempDeck.cards;
  }
  shuffle() {
    let newArray = [];
    // console.log("newArray " + newArray)
    let size = this.cards.length;
    // console.log("size " + this.cards.length);
    for (var i = 0; i < size; i++) {
      // console.log("Loop iterated");
      let pick = Math.floor(Math.random() * this.cards.length );
      // console.log("pick " + pick);
      newArray.push(this.cards[pick]);
      // console.log("newArray " + newArray);
      this.cards[pick] = this.cards[this.cards.length - 1];
      this.cards.length = this.cards.length -1;
    }
    this.cards = newArray;
  }
  spread() {
    // console.log("this.cards " + this.cards);
    for (let i = 0; i < this.cards.length; i++) {
      this.cards[i].show();
    }
  }
  deal() {
    let pick = Math.floor(Math.random() * this.cards.length );
    let temp = this.cards[pick];
    this.cards[pick] = this.cards[this.cards.length - 1];
    this.cards.length = this.cards.length -1;
    return temp;
  }
  deckSize() {
    console.log("Deck has " + this.cards.length + " cards.");
  }
}

class Card {
  constructor(suit,key,val) {
    this.suit = suit;
    this.key = key;
    this.val = val;
  }
  show(){
    console.log( this.key + " of " + this.suit);
  }
}
class Player {
  constructor(name) {
//     console.log("New player seated.")
    this.name = name;
//     console.log("Player name is " + this.name);
    this.hand = [];
  }
  drawHand(deck) {
    for (let i = 0; i < 5; i++) {
      this.hand.push(deck.deal());
    }
  }
  drawCard(deck) {
    this.hand.push(deck.deal());
  }
  discard(finger) {
    let temp = this.hand[finger];
    this.cards[finger] = this.cards[this.cards.length - 1];
    return temp;
  }
  showHand() {
    console.log(this.name + ' says, Checkout my hand!');
    for (let i = 0; i < this.hand.length; i++) {
      this.hand[i].show();
    }
    console.log("_________________");
  }
}

var deck1 = new Deck();
deck1.shuffle();
deck1.spread();
deck1.reset();
deck1.spread();
deck1.shuffle();
deck1.shuffle();
var jeff = new Player("Jeff");
var pete = new Player("Pete");
var zach = new Player("Zach");
var jord = new Player("Jordan");
jeff.drawHand(deck1);
pete.drawHand(deck1);
zach.drawHand(deck1);
jord.drawHand(deck1);
deck1.deckSize();
jeff.showHand();
pete.showHand();
zach.showHand();
jord.showHand();
deck1.spread();
