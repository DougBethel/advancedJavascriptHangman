
var Letter = function (letter) {
  this.letter = letter;
  this.guessedYet = false;
  console.log('hello');
  }


Letter.prototype.guess = function () {
  if (this.letter === " ") {
    this.guessedYet = true;
  		return " ";
      console.log(true);
  	}
    if (this.guessedYet === false) {
      return " _ ";
    }
    else {
  	return this.letter;
    console.log(false);
  }
  }




module.exports = Letter();
