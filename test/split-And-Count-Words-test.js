const expect  = require('chai').expect;
const SplitAndCountWords = require('../app/splitAndCountWords').SplitAndCountWords;
const sinon  = require('sinon');

describe('splitAndCountWords',() => {
  var splitAndCountWords;

  const testInputText = "test text with multiple occuring words test text test text occuring with"
  const expectedOutput1 = ["test", "text", "with", "multiple", "occuring", "words", "test", "text", "test", "text", "occuring", "with"]
  const expectedOutput2 = { test: 3, text: 3, with: 2, multiple: 1, occuring: 2, words: 1 };
  const expectedOutput3 = "Word: test    Count: 3     Prime: Yes Word: text    Count: 3     Prime: Yes Word: with    Count: 2     Prime: Yes Word: multiple    Count: 1     Prime: No Word: occuring    Count: 2     Prime: Yes Word: words    Count: 1     Prime: No"


  beforeEach(() => {
    splitAndCountWords = new SplitAndCountWords();
  });

  describe('initialize',() => {

    it("When a new instance is created the words property is set to an empty array", () => {
      expect(splitAndCountWords.words).to.deep.equal([]);
      expect(splitAndCountWords.words).to.have.lengthOf(0);
      expect(splitAndCountWords.words).to.be.a('array');
    });

  });


  describe('splitIntoWords',() => {

  it("Splits the text into individual words and puts them into key value pairs with their word count", () => {
    splitAndCountWords.splitIntoWords(testInputText);
    expect(splitAndCountWords.words).to.deep.equal(expectedOutput1)
    expect(splitAndCountWords.words).to.have.lengthOf(12);
  });
});


describe('countWords',() => {

  it("Splits the text into individual words and puts them into key value pairs with their word count", () => {
    splitAndCountWords.splitIntoWords(testInputText);
    splitAndCountWords.countOccurrenceOfWords();
    expect(splitAndCountWords.words).to.deep.equal(expectedOutput2)
    expect(splitAndCountWords.words).to.have.property("test")
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




 describe('displayWords',() => {

   it("Displays the words in the text supplied to it, the number of times they occur, and whether this number is prime or not", () => {
     let spy = sinon.spy(console, 'log');
     splitAndCountWords.splitIntoWords(testInputText);
     splitAndCountWords.countOccurrenceOfWords();
     splitAndCountWords.displayWords();
     expect(spy.calledWith(expectedOutput3))
   });

  });


});
