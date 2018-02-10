var Word = require('./word.js');
var inquirer = require("inquirer");

game = {
 	wordBank: ['beach', 'coconut', 'hammock', 'daquiri', 'tequila', 'sunscreen', 'ocean'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,
 	
 	startGame: function (wrd) {

        console.log("\nWelcome to Paradise Hangman!")
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.returnGuess();
 		this.inquirerStart();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	inquirerStart: function(){

        inquirer.prompt([

            {
              type: "input",
              name: "name",
              message: "Guess a letter!"
            },
        ])
        .then(function(userInput) {

             var userGuess = new Word(userInput.name)
             userGuess.checkWord();
            
            
        })
        
        }
       
     
    
    
};

game.startGame();
