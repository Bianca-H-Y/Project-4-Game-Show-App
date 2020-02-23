/** const logPhrase = (phrase) => {
    console.log('Phrase = phrase: ', phrase.phrase);
};
const game = new Game();

logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());

 //Code working!
*/
/** 
const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();
note:step 6 pass
*/
/** 
const game = new Game();
game.startGame();
console.log('Active Phrase - phrase: ${game.activePhrase.phrase}');
//Success!!--actually log not showing quote
*/


//create game variable set to nothing
let game = null;
//Create a click event listener for the start game button: <button id="btn__reset">Start Game</button>
const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', e => {
    //create a new Game object and use the startgame method();
    game = new Game();
    game.startGame();
});

