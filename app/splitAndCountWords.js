function SplitAndCountWords() {
  this.words = [];
};

SplitAndCountWords.prototype.splitIntoWords= function (providedText){
  this.words = providedText.split(" ")
}

SplitAndCountWords.prototype.countOccurrenceOfWords = function() {
   this.words = this.words.reduce(function(allWords, currentWord){
     if (currentWord in allWords) {
       allWords[currentWord]++;
     }
     else {
        allWords[currentWord]=1;
     }
     return allWords;
   }, {});
 };


SplitAndCountWords.prototype._isPrimeCalculator = function(countNumber) {
  if (countNumber != Math.round(countNumber) || countNumber <= 1) {return false}
    var isPrime = true;
    for (var i = 2; i <= Math.sqrt(countNumber); i++) {
      if (countNumber % i == 0) {isPrime = false}
    }
  return isPrime;
};


SplitAndCountWords.prototype.displayWords = function() {
  var words = this.words
   Object.keys(words).forEach(function(key){
     var countPrime = words[key]._isPrimeCalculator
    if (countPrime === true) {
     console.log(key + ':' + words[key] + 'Prime')
    }
    else {
      console.log(key + ':' + words[key] + 'NotPrime')
    }
   });
};

SplitAndCountWords.prototype.callFunctions = function(providedText){
  this.splitIntoWords(providedText);
  this.countOccurrenceOfWords();
}

// module.exports.SplitAndCountWords = SplitAndCountWords;

splitAndCountWords = new SplitAndCountWords()
splitAndCountWords.callFunctions("test test text text text text text with multiple occuring words test text");
splitAndCountWords.displayWords();
