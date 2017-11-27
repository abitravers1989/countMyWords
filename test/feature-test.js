const CleanInputText = require('../app/cleanInputText').CleanInputText;
const cleanInputText = new CleanInputText();
const SplitAndCountWords = require('../app/splitAndCountWords').SplitAndCountWords;
const splitAndCountWords = new SplitAndCountWords();
const expect  = require('chai').expect;

describe('Main', () =>{
  const textFileTestInput = "THis is!!: a TESt %^&*that+it's all'working tOgether(){}"
  const expectedoutput = "this is"

 it("Cleans then splits the words and outputs them, their count and if they are prime or not", () => {
   cleanInputText.cleanTextFunctions(textFileTestInput);
   var output = splitAndCountWords.callFunctions(cleanInputText.initialText);
   expect(output).to.deep.equal(expectedoutput)
 })

});
