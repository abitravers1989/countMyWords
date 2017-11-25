var expect  = require('chai').expect;
var assert = require('chai').assert;
const WordCounter = require('../app/wordCounter').WordCounter;

describe('Word Counter', () => {
  var wordCounter;

  beforeEach(() => {
    wordCounter = new WordCounter("Test text");
  })

  describe('Initialize',() => {
    it("A new instance is initialised with text as an argument", () => {
      expect(wordCounter.initialText).to.equal("Test text")
    });
  });
});

// it('should start empty', function() {
//   var arr = [];
//
//   assert.equal(arr.length, 0);
// });
