var Letter = function(letter){
	this.letter = letter;
	this.guessed = false;
	this.underscoreWord = function(){
		if (!this.guessed) { 
            return ' __ '
        } 
        else { 
            return this.letter
        }
        }
    this.checkLetter = function(){
        
        if (this.letter === letter){
            this.guessed = true;
            
            
        }
    }
    };

module.exports = Letter;

// var guessedLetter = new Letter("d") 
// guessedLetter.guessed = true;
// guessedLetter.underscoreWord();
// console.log(guessedLetter);
