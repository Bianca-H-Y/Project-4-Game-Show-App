 /**
  * Create a Phrase class w/ a constructor that recieves 1 property & 4 methods:
  * phrase property :
  * and intializes a phrase-this will be the actually phrase the user is guessing.
  * the property should be converted to all lower case.
  * Methods
  * addpPhraseToDisplay():
  * display letter placeholders when the game starts
  * when the corrct letter is guessed showMatchLetter replaces the empty box
  * makes sure the phrase uses the CSS for letters and the CSS for spaces
  * checkLetter():
  * check to see if player selections matches any letters in the phrase
  * showMatchedLetter():
  * revels letters that match player selection
  * to reveal select all letter DOM elements w/ CSS class name that match letter
  * then replace e/ match with hide CSS class with Show CSS class
  */

  class Phrase {
      //constructor with 1 parameter
      constructor(phrase) {
        //this.phrase is set to the phrase parameter and makes all lowercase
        this.phrase = phrase.toLowerCase();
      }

      //Below: Goal is to display my phrase as single letter hidden placeholders with letters and spaces
      addPhraseToDisplay() {
      //target the unordered listed of the phrase ID(#)
      const phraseDiv = document.querySelector('#phrase ul');
       
      // https://teamtreehouse.com/library/adding-a-method-solution
      //use MDN. split to count words based on spaces
      const fullArrayPhrase = this.phrase.split('');

    
      //https://teamtreehouse.com/library/javascript-array-iteration-methods/array-iteration/practice-foreach
      //iterate over the lettered array creating an li element for each
      //example html splits each phrase into a letter--li element
      fullArrayPhrase.forEach(letter => {
      const li = document.createElement('li');
      if (letter ===' ') {
      //unit 3 dealt with a similar example in: https://teamtreehouse.com/library/refactor-1-create-list-items
      //set the value of the li element and get the text content:
      //https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
      li.className = 'space';
      li.textContent = letter;
    }  else { //use placeholder to hide letter
      li.className = 'hide letter ${letter} $';
      li.textContent = letter;
    }
    phraseDiv.appendChild(li);

    });
  }
    
    };
