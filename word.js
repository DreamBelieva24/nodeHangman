var Letter = require('./letter.js')

function Word(word) {
    this.word = word
    this.letters = []
    this.wordGuessed = false
    this.returnGuess = function () {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new Letter(this.word[i]);
            this.letters.push(newLetter.underscoreWord());
            var underWord = this.letters.join(" ");
            
                }
                console.log("\n" + underWord + "\n");
    }
    this.checkWord = function (userGuess) {
        var checkLetter = this.word
        var newLetter = new Letter(this.word);
        newLetter.checkLetter();
        
    }
}

// var test = new Word("hopethisworks")
// // console.log(test);
// test.returnGuess();

module.exports = Word;
