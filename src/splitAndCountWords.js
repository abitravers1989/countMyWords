// Module splits text file into words, then calculates each words frequency.
// Next it outputs these words and frequncy as well as if this number is prime or not.
function SplitAndCountWords() {
  this.words = [];
};

SplitAndCountWords.prototype.splitIntoWords= function(providedText) {
  this.words = providedText.split(' ');
};

SplitAndCountWords.prototype.countFrequencyOfWords = function() {
  this.words = this.words.reduce(function(allWords, currentWord) {
  if (currentWord in allWords) {
    allWords[currentWord]++;
  } else {
    allWords[currentWord]=1;
  }
    return allWords;
   }, {});
 };


SplitAndCountWords.prototype._isPrimeCalculator = function(countNumber) {
  if (countNumber != Math.round(countNumber) || countNumber <= 1) {
   return false
  }
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(countNumber); i++) {
    if (countNumber % i == 0) {
      isPrime = false
    }
  }
  return isPrime;
};


SplitAndCountWords.prototype.displayWords = function() {
  let words = this.words;
  for (key in words) {
    if (this._isPrimeCalculator(words[key])) {
     console.log('Word: ' + key + ' || Count: ' + words[key] + ' ' + '|| Prime: Yes');
    } else {
     console.log('Word: ' + key + ' || Count: ' + words[key] + ' ' + '|| Prime: No');
    }
  };
};

SplitAndCountWords.prototype.callAllFunctions = function(providedText) {
  this.splitIntoWords(providedText);
  this.countFrequencyOfWords();
  this.displayWords();
};

module.exports.SplitAndCountWords = SplitAndCountWords;
