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

    it("It removes all punctuation", () => {
      wordCounter = new WordCounter("Test text!!! I. but---");

      wordCounter.RemovePunctuation();
      expect(wordCounter.initialText).to.equal("Test text I but")
    });

    it("It removes all punctuation from a larger text file", () => {
      const inputText = "Contents. I.    The beginning of things. II.   Peter's coal-mine.III.  The old gentlem XIII. The hound's grandfatherXIV.  The End.Chapter I. The beginning of things."
      const expectedOutput = "Contents I    The beginning of things II   Peter's coalmineIII  The old gentlem XIII The hound's grandfatherXIV  The EndChapter I The beginning of things"

      wordCounter = new WordCounter(inputText);

      wordCounter.RemovePunctuation();
      expect(wordCounter.initialText).to.equal(expectedOutput)
    });

  });

});
