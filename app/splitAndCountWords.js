function SplitAndCountWords() {
  this.wordsArray = [];
};

SplitAndCountWords.prototype.splitIntoWords= function (providedText){
  this.wordsArray = providedText.split(" ")
}

SplitAndCountWords.prototype.countOccurrenceOfWords = function() {
   this.wordsArray = this.wordsArray.reduce(function(allWords, currentWord){
     if (currentWord in allWords) {
       allWords[currentWord]++;
     }
     else {
        allWords[currentWord]=1;
     }
     return allWords;
   }, {});
 };
//
SplitAndCountWords.prototype._isPrimeCalculator = function(countNumber) {
  if (countNumber != Math.round(countNumber) || countNumber <= 1) {return false}
    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(countNumber); i++) {
      if (countNumber % i == 0) {isPrime = false}
    }
  return isPrime;
};


module.exports.SplitAndCountWords = SplitAndCountWords;

// splitAndCountWords = new SplitAndCountWords("test text with multiple occuring words")
// splitAndCountWords.wordsArray
