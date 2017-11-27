
const CleanInputText = require('./src/cleanInputText').CleanInputText;
const cleanInputText = new CleanInputText();
const SplitAndCountWords = require('./src/splitAndCountWords').SplitAndCountWords;
const splitAndCountWords = new SplitAndCountWords();
var fs = require('fs');

function RunWordCounterApp(textFile){
   cleanInputText.callAllCleanTextFunctions(textFile)
   splitAndCountWords.callAllFunctions(cleanInputText.initialText);
};

const textFile = fs.readFileSync('./public/sampleTextFile.txt','utf8')
RunWordCounterApp(textFile);
