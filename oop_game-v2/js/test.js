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
 handleInteraction(): 
1: disable selected letter's onscreen keyboard button
2: if a phrase doesn't have a guessed letter, add .wrong CSS class to selected letter's keyboard 
  and call the removelife method
3:if a phrase has have a guessed letter, add .chosen CSS class to selected letter's keyboard 
  and call the showMatchedLetter method, and then call checkForWin()
  IF player wins then call gameOver().
*/
handleInteraction(letter) {
  //disable selected letter's onscreen keyboard button

 // if a phrase doesn't have a guessed letter, add .wrong CSS class to selected letter's keyboard 
  //and call the removelife method
  this.removeLife(); // method removes a heart with a players miss
  
  //if a phrase has have a guessed letter, add .chosen CSS class to selected letter's keyboard 
 // and call the showMatchedLetter method, and then call checkForWin()
 // IF player wins then call gameOver().
this.checkForWin(); //checks to see if player has revealed all letters 
this.gameOver();//displays original start screen overlay w/ win or loose message; set to true/not a loss in this method

  
  
   
}

//Below code: checkForWin():  checks to see if player has revealed all letters 
//game.checkForWin() working for false & true 
 checkForWin() {
     //uses a boolen for true if game won and false is not
     let correctLetters = document.getElementsByClassName('hide letter');
  //player will have 5 chances to get to win
 //check the length of correct letters if more than 0 return false-not a loose
     if(correctLetters.length > 0){
      return false;
      } else {
      //if less that zero the player looses
      return true;
      }
      }
  //removeLife() removes a heart witha miss--end game by calling gameOver method
    //https://teamtreehouse.com/community/how-can-i-target-a-picture-in-css-target the scr image step 9
  //remove life from scoreboard
  removeLife() {
      // removed const variable and replaced with let for all the hearts <li class="tries"><img src="images/liveHeart.png"
      let hearts = document.querySelectorAll('[src="images/liveHeart.png"]');
      //take the value of hearts available against the hearts left from the constroctor (this.missed) 
      let heartsLeft = hearts.length - this.missed;
      //if the player tries and misses than the players looses a heart/replace with lostheart.png
      if (heartsLeft > 0){
          hearts[this.missed].src= 'images/lostHeart.png';
          //reduce hearts by one
          hearts -= 1;
          this.miss +=1;
      }
      //when all 5 hearts = 0 then use gameove method to announce game lost
       else if (heartsLeft === 0){
          //call the gameOver method if play has lost
          this.gameOver(false);
      

      }
  }

 
  //gameOver() displays original start screen overlay and updats h1 with win or loose message
  //from the CSS start with win or loose
  //game.removeLife() working to remove hearts & shows message at loss
  gameOver(gameWon) {
      const gameMessage = document.getElementById('game-over-message')
      
      //if the player looses then display the h1 CSS loose message
      if(gameWon === false) {
          //then display the h1 CSS loose message (.lose)
          overlay.className = 'lose';
          //block the overlay
          overlay.style.display = '';
          //create the message: game.gameOver(false) shows message
          gameMessage.textContent = "Sorry, you lost! Click 'Start Game' to try again.";
      } else if(gameWon === true) {
          //then display the h1 CSS win message (.win )
          overlay.className = 'win';
          //block the overlay
          overlay.style.display = '';
          //create the message: game.gameOver(true) shows message
          gameMessage.textContent = "Yay, you're a Winner. What a genius!";
      }
  }

  


  
};


NEXT StereoPannerNode
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

 //Below code: checkForWin():  checks to see if player has revealed all letters 
 //game.checkForWin() working for false & true 
   checkForWin() {
       //uses a boolen for true if game won and false is not
       let correctLetters = document.getElementsByClassName('hide letter');
    //player will have 5 chances to get to win
   //check the length of correct letters if more than 0 return false-not a loose
       if(correctLetters.length > 0){
        return false;
        } else {
        //if less that zero the player looses
        return true;
        }
        }
    //removeLife() removes a heart witha miss--end game by calling gameOver method
      //https://teamtreehouse.com/community/how-can-i-target-a-picture-in-css-target the scr image step 9
    //remove life from scoreboard
    removeLife() {
        // removed const variable and replaced with let for all the hearts <li class="tries"><img src="images/liveHeart.png"
        let hearts = document.querySelectorAll('[src="images/liveHeart.png"]');
        //take the value of hearts available against the hearts left from the constroctor (this.missed) 
        let heartsLeft = hearts.length - this.missed;
        
        //if the player tries and misses than the players looses a heart/replace with lostheart.png
        if (heartsLeft > 0){
            hearts[this.missed].src= 'images/lostHeart.png';
            //reduce hearts by one
            hearts -= 1;
            this.miss +=1;
        }
        //when all 5 hearts = 0 then use gameove method to announce game lost
         else if (heartsLeft === 0){
            //call the gameOver method if play has lost
            this.gameOver(false);
        

        }
    }

   
    //gameOver() displays original start screen overlay and updats h1 with win or loose message
    //from the CSS start with win or loose
    //game.removeLife() working to remove hearts & shows message at loss
    gameOver(gameWon) {
        const gameMessage = document.getElementById('game-over-message')
        
        //if the player looses then display the h1 CSS loose message
        if(gameWon === false) {
            //then display the h1 CSS loose message (.lose)
            overlay.className = 'lose';
            //block the overlay
            overlay.style.display = '';
            //create the message: game.gameOver(false) shows message
            gameMessage.textContent = "Sorry, you lost! Click 'Start Game' to try again.";
        } else if(gameWon === true) {
            //then display the h1 CSS win message (.win )
            overlay.className = 'win';
            //block the overlay
            overlay.style.display = '';
            //create the message: game.gameOver(true) shows message
            gameMessage.textContent = "Yay, you're a Winner. What a genius!";
        }
    }

    /** 
   handleInteraction(): 
 1: disable selected letter's onscreen keyboard button
 2: if a phrase doesn't have a guessed letter, add .wrong CSS class to selected letter's keyboard 
    and call the removelife method
3:if a phrase has have a guessed letter, add .chosen CSS class to selected letter's keyboard 
    and call the showMatchedLetter method, and then call checkForWin()
    IF player wins then call gameOver().
  */
 //goal is to create game logic: checks for match and directs game action based in hit or miss of match
     handleInteraction(button) {
        console.log(button); //test app.js click event--works
        //disable selected letters onscreen keyboard button
        button.disabled = true;
        let buttonLetter = button.textContent;
        const matchedLetterCheck = this.activePhrase.checkLetter(buttonLetter);
        
        //if a button is selected that doesn't match the phrase add the .wrong CSS class to selected letter's keyboard 
        //and call the removelife method
        if(matchedLetterCheck){
           button.className = 'wrong';
           this.removeLife(); // method removes a heart with a players miss
        }
        //if a phrase has have a guessed letter, add .chosen CSS class to selected letter's keyboard 
       // and call the showMatchedLetter method, and then call checkForWin()
       // IF player wins then call gameOver().
       else { 
            const matchedButtons =this.activePhrase.showMatchedLetter(buttonLetter);
            button.className = 'chosen';
            if (this.checkForWin()) {
                this.gameOver(true);
            }
       }
  // this.checkForWin(); //checks to see if player has revealed all letters 
   // this.gameOver();//displays original start screen overlay w/ win or loose message; set to true/not a loss in this method

        
        
         
};

 
    
};


new Test
handleInteraction(button) {
    console.log(button); //test app.js click event--works
    //disable selected letters onscreen keyboard button
    button.disabled = true;
    let buttonLetter = button.textContent;
    let matchedLetterCheck = this.activePhrase.checkLetter(buttonLetter);
    
    //if a button is selected that doesn't match the phrase add the .wrong CSS class to selected letter's keyboard 
    //and call the removelife method
    if(matchedLetterCheck){
       button.className = 'wrong';
       this.removeLife(); // method removes a heart with a players miss
    }
    //if a phrase has have a guessed letter, add .chosen CSS class to selected letter's keyboard 
   // and call the showMatchedLetter method, and then call checkForWin()
   // IF player wins then call gameOver().
   else { 
        const matchedButtons =this.activePhrase.showMatchedLetter(buttonLetter);
        button.className = 'chosen';
        if (this.checkForWin()) {
            this.gameOver(true);
        }
   }