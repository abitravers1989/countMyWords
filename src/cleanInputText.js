// Module cleans the input text.
// First it checks it is valid(is text), then it removes punctuation next whitespace, lastly it removes capitalisation.
function CleanInputText(providedText) {
  this.initialText = false;
};

CleanInputText.prototype.checkInputValidator= function(providedText) {
  if (isNaN(providedText)) {
    this.initialText = providedText;
  } else {
    this.initialText = false;
    console.log('I am sorry but I cannot count the words of something which isn\'t text Please enter text');
  };
};

CleanInputText.prototype.removePunctuationAndWhitespace = function() {
  this.initialText = this.initialText.replace(/[.,\/#!$%\^&\*;:{}=\-_`+@""?'~()£|±§]/g, '').replace(/\s+/g, ' ');
};

CleanInputText.prototype.removeCapitalisation = function() {
  this.initialText = this.initialText.toLowerCase();
};

CleanInputText.prototype.callAllCleanTextFunctions = function(providedText) {
  this.checkInputValidator(providedText);
  this.removePunctuationAndWhitespace();
  this.removeCapitalisation();
};

module.exports.CleanInputText = CleanInputText;
