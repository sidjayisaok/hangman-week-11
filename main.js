var inquirer = require('inquirer');
var wordExports = require('./word.js');
var wordObject = new wordExports();

function inquirerFunction(){
	inquirer.prompt([
		{
			type: "input",
			name: "letter",
			message: "Word selected: " + wordObject.wordArray.join(' ')
		}
	]).then(function(answers) {
		if (wordObject.guessCount === 1) {
			return console.log('You lose, try again?')
		};
		if (answers.letter.length > 1) {
			console.log('You can type only one letter at a time.');
			console.log('_______________________________________________');
			inquirerFunction();
		} else if (answers.letter.length === 0) {
			console.log('Select a letter.');
			console.log('_______________________________________________');
			inquirerFunction();
		} else if (wordObject.guessedLetters.indexOf(answers.letter) > -1) {
			console.log('Guess again.');
			console.log('_______________________________________________');
			inquirerFunction();
		} else{
			wordObject.takeLetters(answers.letter);
			console.log('You guessed: ' + wordObject.guessedLetters.join(' '));
			console.log('Number of guesses left:  ' + wordObject.guessCount);
			if (wordObject.currentWord.join('') === wordObject.wordArray.join('')){
				return console.log('You win! Try again?');
			}
			else{
				inquirerFunction();
			};
		};

	});
};
inquirerFunction();
