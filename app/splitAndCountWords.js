function SplitAndCountWords() {
  this.wordsArray = [];
};

SplitAndCountWords.prototype.splitIntoWords= function (providedText){
  this.wordsArray = providedText.split(" ")
}
//
// SplitAndCountWords.prototype.countOccurrenceOfWords = function() {
//
// }
//
// SplitAndCountWords.prototype._isPrime = function() {
//
// };


module.exports.SplitAndCountWords = SplitAndCountWords;

// splitAndCountWords = new SplitAndCountWords("test text with multiple occuring words")
// splitAndCountWords.wordsArray
