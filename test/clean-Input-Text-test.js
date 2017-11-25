const expect  = require('chai').expect;
const assert = require('chai').assert;
const sinon  = require('sinon');
const CleanInputText = require('../app/cleanInputText').CleanInputText;



describe('CleanInputText', () => {
  var cleanInputText;

  beforeEach(() => {
    cleanInputText = new CleanInputText();
  });


  describe('Initialize',() => {

    it("When a new instance is initialised the initalText property is set to false", () => {
      expect(cleanInputText.initialText).to.equal(false);
    });

  });


  describe('CheckInputValidator',() => {

    it("Sets initalText to the text supplied to it, if this is indeed text and not something else such as a picture or number.", () => {
      const testInputText = "Test text";
      cleanInputText.checkInputValidator(testInputText);
      expect(cleanInputText.initialText).to.be.a('string');
      expect(cleanInputText.initialText).to.have.lengthOf(9);
    });


    it("Outputs an error message if word Counter is initalised with something which is not a string", () => {
      const testInputNumber = 0000099090;
      let spy = sinon.spy(console, 'log');
      cleanInputText.checkInputValidator(testInputNumber);
      expect(spy.calledWith("I am sorry but I cannot count the words of something which isn't text Please enter text"))
      expect(cleanInputText.initialText).to.equal(false);
      spy.restore();
    });

  });



  describe('RemovePunctuation',() => {

    it("It removes all punctuation", () => {
      const testInputText = "Test text!!! I. but---";
      const expectedOutput = "Test text I but";
      cleanInputText.checkInputValidator(testInputText);
      cleanInputText.removePunctuation();
      expect(cleanInputText.initialText).to.equal(expectedOutput)
    });

    it("It removes all punctuation from a larger text file", () => {
      const testInputText = "Contents. I.    The beginning of things. II.   Peter's coal-mine.III.  The old gentlem XIII. The hound's grandfatherXIV.  The End.Chapter I. The beginning of things."
      const expectedOutput = "Contents I    The beginning of things II   Peter's coalmineIII  The old gentlem XIII The hound's grandfatherXIV  The EndChapter I The beginning of things"
      cleanInputText.checkInputValidator(testInputText);
      cleanInputText.removePunctuation();
      expect(cleanInputText.initialText).to.equal(expectedOutput)
    });

  });



  describe('RemoveCapitalisation',() => {

    it("It converts capital letters to downcase", () => {
      const testInputText = "Test TeXT";
      const expectedOutput = "test text";
      cleanInputText.checkInputValidator(testInputText);
      cleanInputText.removeCapitalisation();
      expect(cleanInputText.initialText).to.equal(expectedOutput)
    });

  });


  describe('cleanTextFunctions',() => {

    it("Calls all the above functions which clean the text so it contains no capitalisation or punctuation", () => {
      const testInputText = "Test TeXT LonGer Edition!!!! s";
      const expectedOutput = "test text";
      cleanInputText.cleanTextFunctions(testInputText)
    });

  });

  //
  // describe('splitTextIntoWords',() => {
  //
  //   it("Splits the text into individual words and puts them into key value pairs with their word count", () => {
  //     const testInputText = "Test TeXT LonGer Edition!!!! Test TeXT";
  //     const expectedOutput = ["test", "text", "longer", "edition"];
  //     wordCounter.cleanTextFunctions(testInputText)
  //     wordCounter.splitTextIntoWords();
  //     expect(wordCounter.wordsArray).to.equal(expectedOutput)
  //   });
  // });
  //
  //
  // describe('countWords',() => {
  //
  //   it("Splits the text into individual words and puts them into key value pairs with their word count", () => {
  //     const testInputText = "Test TeXT LonGer Edition!!!! Test TeXT";
  //     const expectedOutput = {"test": 2, "text": 2, "longer": 1, "edition": 1 };
  //     wordCounter.cleanTextFunctions(testInputText)
  //     wordCounter.splitTextIntoWords();
  //     expect(wordCounter.wordsArray).to.equal(expectedOutput)
  //   });
  // });

});
