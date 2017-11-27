const expect  = require('chai').expect;
const sinon  = require('sinon');
const CleanInputText = require('../app/cleanInputText').CleanInputText;

describe('CleanInputText', () => {
  var cleanInputText;

  beforeEach(() => {
    cleanInputText = new CleanInputText();
  });


  describe('initialize',() => {

    it("When a new instance is created the initalText property is set to false", () => {
      expect(cleanInputText.initialText).to.equal(false);
    });

  });


  describe('checkInputValidator',() => {

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



  describe('removePunctuationAndWhitespace',() => {

    it("Removes punctuation from text", () => {
      const testInputText = "Test text!!!???? ?I.i'ds':$$ *HI but---";
      const expectedOutput = "Test text Iids HI but";
      cleanInputText.checkInputValidator(testInputText);
      cleanInputText.removePunctuationAndWhitespace();
      expect(cleanInputText.initialText).to.equal(expectedOutput)
    });

    it("Removes punctuation from text, all punctuation or strange characters", () => {
      const testInputText = "!?'/.:$*HI-+)(&{/}^%£@|±~``§,;=-end";
      const expectedOutput = "HIend";
      cleanInputText.checkInputValidator(testInputText);
      cleanInputText.removePunctuationAndWhitespace();
      expect(cleanInputText.initialText).to.equal(expectedOutput)
    });

    it("Removes punctuation and whitespace from a larger text file", () => {
      const testInputText = "Contents. I.    The beginning of things. II.   Peter's coal-mine.III.  The old gentlem XIII. The hound's grandfatherXIV.  The End.Chapter I. The beginning of things."
      const expectedOutput = "Contents I The beginning of things II Peters coalmineIII The old gentlem XIII The hounds grandfatherXIV The EndChapter I The beginning of things"
      cleanInputText.checkInputValidator(testInputText);
      cleanInputText.removePunctuationAndWhitespace();
      expect(cleanInputText.initialText).to.equal(expectedOutput)
    });

    it("Removes Roman numerals", () => {
      const testInputText = "Contents. I.    The beginning of things. II.   Peter's coal-mine.III.  The old gentlem XIII. The hound's grandfatherXIV.  The End.Chapter I. The beginning of things."
      const expectedOutput = "Contents The beginning of things Peters coalmine The old gentlem The hounds grandfather The EndChapter The beginning of things"
      cleanInputText.checkInputValidator(testInputText);
      cleanInputText.removePunctuationAndWhitespace();
      expect(cleanInputText.initialText).to.equal(expectedOutput)
    });

  });


  describe('removeCapitalisation',() => {

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

});
