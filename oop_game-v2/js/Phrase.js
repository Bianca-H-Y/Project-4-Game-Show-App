/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
  * Create a Phrase class w/ a constructor that recieves 1 property & 4 methods:
  * phrase property :
  * and intializes a phrase-this will be the actually phrase the user is guessing.
  * the property should be converted to all lower case.
  * Methods
  * addpPhraseToDisplay():
  * display letter placeholders when the game starts
  * when the corrct letter is guess showMatchLetter replaces the empty box
  * makes sure the phrase uses the CSS for letters and the CSS for spaces
  * checkLetter():
  * check to see if player selections matches any letters in the phrase
  * showMatchedLetter():
  * revels letters that match player selection
  * to reveal select all letter DOM elements w/ CSS class name that match letter
  * then replace e/ match with hide CSS class with Show CSS class
  */

  class phrase {
      constructor (phrase) {
          this.phrase = phrase
      }
  }
