const expect  = require('chai').expect;
const SplitAndCountWords = require('../app/splitAndCountWords').SplitAndCountWords;

describe('splitAndCountWords',() => {
  var splitAndCountWords;

  beforeEach(() => {
    splitAndCountWords = new SplitAndCountWords();
  });

  describe('countWords',() => {

  it("Splits the text into individual words and puts them into key value pairs with their word count", () => {
    const testInputText = "Test TeXT LonGer Edition!!!! Test TeXT";
    const expectedOutput = ["test", "text", "longer", "edition"];
    splitAndCountWords.cleanTextFunctions(testInputText)
    splitAndCountWords.splitTextIntoWords();
    expect(splitAndCountWords.wordsArray).to.equal(expectedOutput)
  });
});

//
// describe('countWords',() => {
//
//   it("Splits the text into individual words and puts them into key value pairs with their word count", () => {
//     const testInputText = "Test TeXT LonGer Edition!!!! Test TeXT";
//     const expectedOutput = {"test": 2, "text": 2, "longer": 1, "edition": 1};
//     splitAndCountWords.cleanTextFunctions(testInputText)
//     splitAndCountWords.splitTextIntoWords();
//     expect(splitAndCountWords.wordsArray).to.equal(expectedOutput)
//   });
//  });

});
