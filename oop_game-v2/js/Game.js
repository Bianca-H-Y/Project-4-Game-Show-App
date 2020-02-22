 /**
  * Create a Game class w/ a constructor that recieves 3 property & 6 methods:
  * missed:
  * track the number of missed guesses w/ initial value = 0
  * phrases:
  * and array of five phrase objects w/ only letters and spaces
  * activePhrase:
  * current phrase being guess; initial value = null within startGame() method, this property
  * should be set to the phrase object retuned from a call in the getRandomPhrase() method.
  * Methods
  * startGame(): hides the start screen, calls getRandomPhrase() & sets active phrase property
  * getRandomPhrase(): randomly retrieves a phrase
  * handleInteraction():
  * removeLife():
  * checkForWin():
  * gameOver():
  */
 
 class Game {
    constructor() {
        // 3 properties in the constructor
       this.missed = 0
       this.phrases = [
           new Phrase ('An Arm and A Leg'),
           new Phrase ('A Piece of Cake'),
           new Phrase ('To Live and Let Live'),
           new Phrase ('Heart and Soul'),
           new Phrase ('The Young and The Restless'),
       ]
       this.activePhrases = null
    }
   //getRandomPhrase() method: randomly retrieves a phrase
   getRandomPhrase() {
       //use let because this variable should accept change
       //I will want the length of the array (0-4) randomized
       //Round down the random number: math.random & floor
       let randomPhrase = Math.floor(Math.random() * this.phrases.length);
       return this.phrases[randomPhrase]
   }
};

step 7