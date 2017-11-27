// This file reads text from a file using the node fs module. Then calls the word-counter-app's cleanInputText then SplitAndCountWords
// modules to split the text into words, their frequency and weather they are a prime number or not.
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
