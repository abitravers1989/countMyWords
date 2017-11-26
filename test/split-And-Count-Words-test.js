const expect  = require('chai').expect;
const SplitAndCountWords = require('../app/splitAndCountWords').SplitAndCountWords;

describe('splitAndCountWords',() => {
  var splitAndCountWords;

  const testInputText = "test text with multiple occuring words test text test text occuring with"
  const expectedOutput1 = ["test", "text", "with", "multiple", "occuring", "words", "test", "text", "test", "text", "occuring", "with"]
  const expectedOutput2 = { test: 3, text: 3, with: 2, multiple: 1, occuring: 2, words: 1 };

  beforeEach(() => {
    splitAndCountWords = new SplitAndCountWords();
  });

  describe('initialize',() => {

    it("When a new instance is created the wordsArray property is set to an empty array", () => {
      expect(splitAndCountWords.wordsArray).to.deep.equal([]);
      expect(splitAndCountWords.wordsArray).to.have.lengthOf(0);
      expect(splitAndCountWords.wordsArray).to.be.a('array');
    });

  });


  describe('splitIntoWords',() => {

  it("Splits the text into individual words and puts them into key value pairs with their word count", () => {
    splitAndCountWords.splitIntoWords(testInputText);
    expect(splitAndCountWords.wordsArray).to.deep.equal(expectedOutput1)
    expect(splitAndCountWords.wordsArray).to.have.lengthOf(12);
  });
});


describe('countWords',() => {

  it("Splits the text into individual words and puts them into key value pairs with their word count", () => {
    splitAndCountWords.splitIntoWords(testInputText);
    splitAndCountWords.countOccurrenceOfWords();
    expect(splitAndCountWords.wordsArray).to.deep.equal(expectedOutput2)
  });

 });



 describe('_isPrimeCalculator',() => {

   it("Calculates if a number is prime or not, returning true or false. Returns true for 2.", () => {
     var trueOrFalse = splitAndCountWords._isPrimeCalculator(2);
     expect(trueOrFalse).to.equal(true)
   });

   it("Calculates if a number is prime or not, returning true or false. Returns true for 3.", () => {
     var trueOrFalse = splitAndCountWords._isPrimeCalculator(3);
     expect(trueOrFalse).to.equal(true)
   });

   it("Calculates if a number is prime or not, returning true or false. Returns false for 0.", () => {
     var trueOrFalse = splitAndCountWords._isPrimeCalculator(0);
     expect(trueOrFalse).to.equal(false)
   });

   it("Calculates if a number is prime or not, returning true or false. Returns false for -100.", () => {
     var trueOrFalse = splitAndCountWords._isPrimeCalculator(-100);
     expect(trueOrFalse).to.equal(false)
   });

   it("Calculates if a number is prime or not, returning true or false. Returns false for 9.78.", () => {
     var trueOrFalse = splitAndCountWords._isPrimeCalculator(9.78);
     expect(trueOrFalse).to.equal(false)
   });

 });

});
