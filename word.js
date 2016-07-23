var selectWord = require('./game.js');
var userLetter = require('./letter');
var letterObject = new userLetter(selectWord());
var wordObject = new Word();

console.log(wordObject);

function Word (words) {
	this.guessedLetters = [];
	this.guessCount = 10;
	this.currentWord = letterObject.word;
	this.wordArray = letterObject.blankWord;

	this.takeLetters = function(userInput) {
		if (this.currentWord.indexOf(userInput) >= 0) {
			console.log('you guessed right');
			console.log('_______________________________________________');
			console.log(' ');
			this.guessedLetters.push(userInput); // adds the letter guessed to the array
			for (var i = 0; i < this.currentWord.length; i++) { // runs throug the current word
				if (userInput === this.currentWord[i]) { // if the letter that was typed exists at that index in the word switch blank word to the letter
					this.wordArray[i] = userInput;
				};
			};
		} else {
			console.log('you guessed wrong')
			console.log('_______________________________________________');
			console.log(' ');
			this.guessCount--;
			this.guessedLetters.push(userInput);
		};
	};
};



module.exports = Word;
