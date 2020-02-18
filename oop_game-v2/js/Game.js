/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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
  * startGame(): hides the start screen
  * getRandomPhrase():
  * handleInteraction():
  * removeLife():
  * checkForWin():
  * gameOver():
  */
 
 class phrase {
    constructor (phrase) {
        this.phrase = phrase
    }
}