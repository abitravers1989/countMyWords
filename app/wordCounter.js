function WordCounter(providedText) {
  this.initialText = providedText;
};

WordCounter.prototype.checkInputValidator= function (){
  if (this.initialText === !String) {
    console.log("I am sorry but I cannot count the words of something which isn't text Please enter text");
    this.initialText = false;
  }
}

WordCounter.prototype.RemovePunctuation = function() {
  this.initialText = this.initialText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}

module.exports.WordCounter = WordCounter;
