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
    for (var i = 0; i < 52; i++) {
      this.cards[i].show();
    }
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

Deck1 = new Deck();
Deck1.shuffle();
Deck1.spread();
