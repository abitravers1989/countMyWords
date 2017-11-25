var expect  = require('chai').expect;
var assert = require('chai').assert;
const WordCounter = require('../app/wordCounter').WordCounter;

describe('Word Counter', () => {
  var wordCounter;

  describe('Initialize',() => {

    beforeEach(() => {
      wordCounter = new WordCounter("Test text");
    });

    it("A new instance is initialised with text as an argument", () => {
      expect(wordCounter.initialText).to.equal("Test text");
      expect(wordCounter.initialText).to.be.a('string');
    });
  });

  describe('RemovePunctuation',() => {

    beforeEach(() => {
      wordCounter = new WordCounter("Test text!!! I. but---");
    })

    it("It removes all punctuation", () => {
      wordCounter.RemovePunctuation
      expect(wordCounter.initialText).to.equal("Test text I but")
    });

  });

});
