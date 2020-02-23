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
  * handleInteraction(): letter must be choosen, letter checked against matches
  *     if a match display letter, if no match remove 1 life
  *     if win show all letter in phrase or lost if player loose all hearts
  *     message about winning or loosing to display on screen
  * removeLife(): removes a heart witha miss--end game by calling gameOver method
  * checkForWin():  checks to see if player has revealed all letters (win)
  * gameOver(): displays original start screen overlay and updats h1 with win or loose message
  *     from the CSS start with win or loose
  */
 
 class Game {
    constructor() {
        // 3 properties in the constructor
       this.missed = 0
       this.phrases = this.createPhrases();
        this.activePhrase = null;
       
    }
    createPhrases() {
        const arrayPhrases = [
        new Phrase ('An Arm and A Leg'),
        new Phrase ('A Piece of Cake'),
        new Phrase ('To Live and Let Live'),
        new Phrase ('Heart and Soul'),
        new Phrase ('The Young and The Restless'),
    ]
    return arrayPhrases;
}
   //getRandomPhrase() method: randomly retrieves a phrase
   getRandomPhrase() {
       //use let because this variable should accept change
       //I will want the length of the array (0-4) randomized
       //Round down the random number: math.random & floor
       let randomPhrase = Math.floor(Math.random() * this.phrases.length);
       return this.phrases[randomPhrase]
   }

//Start game() goal is the hide the div element with the ID of overlay & call methods:
//getRandomPhrase to select the random 'activePhrase' 
//calling addPhrasrToDisplay method to show on the board.
   startGame() {
    //target the overlay div element
    const overlayStart = document.querySelector('div #overlay');
    //.style.display set to the value of none prevents display of the overlay blocking the board
    overlayStart.style.display = 'none';
    //Make the active phrase equal to the random quote we created: this will happen on page load
    this.activePhrase = this.getRandomPhrase();
    //display the acitve phrase
    this.activePhrase.addPhraseToDisplay();
    
   }
   /** 
   handleInteraction(): letter must be choosen, letter checked against matches
  *     if a match display letter, if no match remove 1 life
  *     if win show all letter in phrase or lost if player loose all hearts
  *     message about winning or loosing to display on screen
  */

  /** 
    handleInteraction() { //the paremeter is going to be letter b/c we want the actions to happen on letters
        //handles logic and branching to all following methods
        removeLife(): removes a heart witha miss--end game by calling gameOver method
  * checkForWin():  checks to see if player has revealed all letters (win)
  * gameOver(): displays original start screen overlay and updats h1 with win or loose message
  *     from the CSS start with win or loose
 }
 */
/** 
 //Below code: checkForWin():  checks to see if player has revealed all letters 
   checkForWin() {
       //uses a boolen for true if game won and false is not
       //player will have 5 chances to get to win
       //remember to target the: CSS class name matches the selected letter
       let correctLetters = document.querySelectorAll('.show');

   }
    */
    
    //removeLife()

   
    //gameOver()

};


