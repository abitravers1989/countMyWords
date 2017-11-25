function WordCounter(providedText) {
  this.initialText = false;
};

WordCounter.prototype.checkInputValidator= function (providedText){
  if (isNaN(providedText)) {
    this.initialText = providedText
  }
  else {
    console.log("I am sorry but I cannot count the words of something which isn't text Please enter text");
  };
}

WordCounter.prototype.RemovePunctuation = function() {
  this.initialText = this.initialText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}

module.exports.WordCounter = WordCounter;


wordCounter = new WordCounter();
wordCounter.checkInputValidator("hh")
