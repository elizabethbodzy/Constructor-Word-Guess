var Letter = function (alphabet) {
    this.alphabet = alphabet;
    this.isGuessed = false;

    this.display = function () {
        if(this.alphabet == ' ') {
            return (' ');
        } else if(this.isGuessed) {
            return (this.alphabet)
        } else if (this.isGuessed === false) {
            return ("_")
        }
    }
    this.guessLetter = function (guess) {
        if (guess.toLowerCase() === this.alphabet.toLowerCase()) {
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;