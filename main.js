const CleanInputText = require('./app/cleanInputText').CleanInputText;
const cleanInputText = new CleanInputText();
const SplitAndCountWords = require('./app/splitAndCountWords').SplitAndCountWords;
const splitAndCountWords = new SplitAndCountWords();
var fs = require('fs');

const textFile = fs.readFileSync('./public/sampleTextFile.txt','utf8')

function RunWordCounterApp(){
   cleanInputText.cleanTextFunctions(textFile)
   // console.log(cleanInputText.initialText)
   splitAndCountWords.callFunctions(cleanInputText.initialText);
}

RunWordCounterApp();
