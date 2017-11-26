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
// SplitAndCountWords.prototype._isPrime = function() {
//
// };


module.exports.SplitAndCountWords = SplitAndCountWords;

// splitAndCountWords = new SplitAndCountWords("test text with multiple occuring words")
// splitAndCountWords.wordsArray
