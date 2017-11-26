const CleanInputText = require('./app/cleanInputText').CleanInputText;
// const SplitAndCountWords = require('../app/splitAndCountWords').SplitAndCountWords;
const cleanInputText = new CleanInputText();
var fs = require('fs');


function RunWordCounterApp(filename){
  this.fileContents;
}

RunWordCounterApp.prototype.readInputTextFile = function(filename) {
  setTimeout(function(filename){
    fileContents = fs.readFileSync(filename,'utf8')
    return fileContents;
  }, 80000)
};

RunWordCounterApp.prototype.runAppFunctions = function(){
  cleanInputText.checkInputValidator(this.readInputTextFile)
  console.log("inputtext")
  console.log(cleanInputText.initialText)
};

runApp = new RunWordCounterApp('./public/sampleTextFile.txt');
// runWordCounterApp('./public/sampleTextFile.txt');
runApp.runAppFunctions();
