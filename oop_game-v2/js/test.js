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
    //use MDN. split tp count words based on spaces
    const splitPhrase = this.phrase.split(' ');
  
    //https://teamtreehouse.com/library/javascript-array-iteration-methods/array-iteration/practice-foreach
    //iterate over the lettered array creating an li element for each
    //example html splits each phrase into a letter--li element
    splitPhrase.forEach(letter => {
    const li = document.createElement('li');
    if (letter ===' ') {
    //unit 3 dealt with a similar example in: https://teamtreehouse.com/library/refactor-1-create-list-items
    //set the value of the li element and get the text content:
    //https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
    li.className = 'space';
    li.textContent = letter;
  }  else { //use placeholder to hide letter
    li.className = 'hide letter ${letter}';
    li.textContent = letter;
  }
  phraseDiv.appendChild(li);

  });
}
   
    //CSS letters
    //Css Space
  };



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
    //use MDN. split tp count words based on spaces
    const fullPhrase = this.phrase;
    const phraseLetterArray = [...fullPhrase];
  
    //https://teamtreehouse.com/library/javascript-array-iteration-methods/array-iteration/practice-foreach
    //iterate over the lettered array creating an li element for each
    //example html splits each phrase into a letter--li element
    phraseLetterArray.forEach(fullPhrase => {
    const li = document.createElement('li');
    if (fullPhrase ===' ') {
    //unit 3 dealt with a similar example in: https://teamtreehouse.com/library/refactor-1-create-list-items
    //set the value of the li element and get the text content:
    //https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
    li.className = 'space';
    li.textContent = ' ';
  }  else { //use placeholder to hide letter
    li.className = 'hide letter ${letter}';
    li.textContent = fullPhrase;
  }
  phraseDiv.appendChild(li);

  });
}
  };

newest:
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
     this.phrases = 
     
     [
         new Phrase ('An Arm and A Leg'),
         new Phrase ('A Piece of Cake'),
         new Phrase ('To Live and Let Live'),
         new Phrase ('Heart and Soul'),
         new Phrase ('The Young and The Restless'),
     ]
     //this.activePhrase = null
     return 
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
};

test phrase showMatchedLetter(letter) {
  const phraseLetter = document.querySelectorAll('.letter');
  if (phraseLetter = true) {
    phraseLetter.classList.add('show');
  } 
}
  };

