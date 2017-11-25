function WordCounter(providedText) {
  this.initialText = providedText;
};

WordCounter.prototype.RemovePunctuation = function() {
  this.initialText = this.initialText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}

module.exports.WordCounter = WordCounter;
