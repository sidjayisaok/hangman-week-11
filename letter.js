function Letter(letters) {
  this.word = letters.split(' ');
  this.toBlank = function(){
    var wordArray = [];
      for (i = 0; i < this.word.length; i++){
        wordArray.push('_');
      };
      return wordArray;
  };
      this.blankWord = this.toBlank();
  };
  // export letter constructor
  module.exports = Letter;
