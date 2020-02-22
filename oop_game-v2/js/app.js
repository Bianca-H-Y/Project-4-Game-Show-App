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
const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();

/** 
const game = new Game();
const randomPhrase= game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();
*/