const expect  = require('chai').expect;
const sinon  = require('sinon');
const CleanInputText = require('../app/cleanInputText').CleanInputText;

describe('CleanInputText', () => {
  var cleanInputText;


  const testInputText1 = "Test text";
  const testInputNumber2 = 0000099090;
  const testInputText3 = "Test text!!!???? ?I.i'ds':$$ *HI but---";
  const expectedOutput3 = "Test text Iids HI but";
  const testInputText4 = "!?'/.:$*HI-+)(&{/}^%£@|±~``§,;=-end";
  const expectedOutput4 = "HIend";
  const testInputText5 = "Contents. I.    The beginning of things. II.   Peter's coal-mine.III.  The old gentlem XIII. The hound's grandfatherXIV.  The End.Chapter I. The beginning of things."
  const expectedOutput5 = "Contents I The beginning of things II Peters coalmineIII The old gentlem XIII The hounds grandfatherXIV The EndChapter I The beginning of things"
  const testInputText7 = "Test TeXT";
  const expectedOutput7 = "test text";
  const testInputText8 = "Test TeXT LonGer Edition!!!!";
  const expectedOutput8 = "test text longer edition";


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
      cleanInputText.checkInputValidator(testInputText1);
      expect(cleanInputText.initialText).to.be.a('string');
      expect(cleanInputText.initialText).to.have.lengthOf(9);
    });


    it("Outputs an error message if word Counter is initalised with something which is not a string", () => {
      let spy = sinon.spy(console, 'log');
      cleanInputText.checkInputValidator(testInputNumber2);
      expect(spy.calledWith("I am sorry but I cannot count the words of something which isn't text Please enter text"))
      expect(cleanInputText.initialText).to.equal(false);
      spy.restore();
    });

  });



  describe('removePunctuationAndWhitespace',() => {

    it("Removes punctuation from text", () => {
      cleanInputText.checkInputValidator(testInputText3);
      cleanInputText.removePunctuationAndWhitespace();
      expect(cleanInputText.initialText).to.equal(expectedOutput3)
    });

    it("Removes punctuation from text, all punctuation or strange characters", () => {
      cleanInputText.checkInputValidator(testInputText4);
      cleanInputText.removePunctuationAndWhitespace();
      expect(cleanInputText.initialText).to.equal(expectedOutput4)
    });

    it("Removes punctuation and whitespace from a larger text file", () => {
      cleanInputText.checkInputValidator(testInputText5);
      cleanInputText.removePunctuationAndWhitespace();
      expect(cleanInputText.initialText).to.equal(expectedOutput5)
    });

  });


  describe('removeCapitalisation',() => {

    it("It converts capital letters to downcase", () => {
      cleanInputText.checkInputValidator(testInputText7);
      cleanInputText.removeCapitalisation();
      expect(cleanInputText.initialText).to.equal(expectedOutput7)
    });

  });


  describe('cleanTextFunctions',() => {

    it("Calls all the above functions which clean the text so it contains no capitalisation or punctuation", () => {
      cleanInputText.cleanTextFunctions(testInputText8)
      expect(cleanInputText.initialText).to.equal(expectedOutput8)
    });

  });

});
