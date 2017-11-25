const expect  = require('chai').expect;
const assert = require('chai').assert;
const sinon  = require('sinon');
const WordCounter = require('../app/wordCounter').WordCounter;



describe('Word Counter', () => {
  var wordCounter;

  describe('Initialize',() => {

    beforeEach(() => {
      wordCounter = new WordCounter("Test text");
    });

    // it("Is set up as a constructor function correctly so a new instance of it can be created.", () => {
    //   expect(wordCounter).to.be.a.wordCounter;
    // });

    it("A new instance is initialised with text as an argument", () => {
      expect(wordCounter.initialText).to.equal("Test text");
      expect(wordCounter.initialText).to.have.lengthOf(9);
    });

  });



  describe('CheckInputValidator',() => {

    it("Outputs an error message if word Counter is initalised with something which is not a string", () => {
      wordCounter = new WordCounter(0000099090);
      let spy = sinon.spy(console, 'log');

      wordCounter.checkInputValidator();
      expect(spy.calledWith("I am sorry but I cannot count the words of something which isn't text Please enter text"))
      expect(wordCounter.initialText).to.equal(false);

      spy.restore();
    });

    it("Continues with initalText set as intended in initalised if it is passed a string", () => {
      wordCounter = new WordCounter("Test text");

      wordCounter.checkInputValidator();
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
