// const CleanInputText = require('../app/cleanInputText').CleanInputText;
const SplitAndCountWords = require('../app/splitAndCountWords').SplitAndCountWords;
const cleanInputText = new CleanInputText();
// var fs = require('fs');


function runWordCounterApp(){
  // make sysnc?
  fs.readFile('./public/sampleTextFile.txt','utf8', function(err,data){
    if(err) throw err;
    console.log(data);
    cleanInputText.checkInputValidator(data)
    cleanInputText.initialText
  })
}

runWordCounterApp();
