const expect  = require('chai').expect;
const assert = require('chai').assert;
const sinon  = require('sinon');
const WordCounter = require('../app/wordCounter').WordCounter;



describe('Word Counter', () => {
  var wordCounter;

  beforeEach(() => {
    wordCounter = new WordCounter();
  });





  describe('Initialize',() => {

    it("When a new instance is initialised the initalText property is set to false", () => {
      expect(wordCounter.initialText).to.equal(false);
    });

  });




  describe('CheckInputValidator',() => {

    it("Sets initalText to the text supplied to it, if this is indeed text and not something else such as a picture or number.", () => {
      const testInputText = "Test text";
      wordCounter.checkInputValidator(testInputText);
      expect(wordCounter.initialText).to.be.a('string');
      expect(wordCounter.initialText).to.have.lengthOf(9);
    });


    it("Outputs an error message if word Counter is initalised with something which is not a string", () => {
      const testInputNumber = 0000099090;
      let spy = sinon.spy(console, 'log');
      wordCounter.checkInputValidator(testInputNumber);
      expect(spy.calledWith("I am sorry but I cannot count the words of something which isn't text Please enter text"))
      expect(wordCounter.initialText).to.equal(false);
      spy.restore();
    });

  });



  describe('RemovePunctuation',() => {

    it("It removes all punctuation", () => {
      const testInputText = "Test text!!! I. but---";
      const expectedOutput = "Test text I but";
      wordCounter.checkInputValidator(testInputText);
      wordCounter.RemovePunctuation();
      expect(wordCounter.initialText).to.equal(expectedOutput)
    });

    it("It removes all punctuation from a larger text file", () => {
      const testInputText = "Contents. I.    The beginning of things. II.   Peter's coal-mine.III.  The old gentlem XIII. The hound's grandfatherXIV.  The End.Chapter I. The beginning of things."
      const expectedOutput = "Contents I    The beginning of things II   Peter's coalmineIII  The old gentlem XIII The hound's grandfatherXIV  The EndChapter I The beginning of things"
      wordCounter.checkInputValidator(testInputText);
      wordCounter.RemovePunctuation();
      expect(wordCounter.initialText).to.equal(expectedOutput)
    });

  });

});
