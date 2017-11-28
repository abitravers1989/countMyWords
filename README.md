## Word Counter Application

![Using the application](https://github.com/abitravers1989/countMyWords/blob/master/public/using-application.mp4)

### The what:

A simple command-line node application.

It takes the example text file (saved as 'sampleTextFile' in the public folder of this directory).
It outputs, to the console, the words which appear in that file, their frequency and if that number is prime or not.

## Getting started

Open your terminal.

Make sure you have node already installed by typing:

`````
$ node -v
`````

Next, still in your terminal, clone this directory then navigate to that folder:

`````
$ git clone https://github.com/abitravers1989/countMyWords.git
$ cd wordCounterApp
`````

Install the dependencies:

`````
$ $npm install
`````

## How to use it

If you are not still there navigate back to the project folder in your terminal. Then type:

`````
$ npm start
`````
or

`````
$ node index.js
`````

## Running the tests

If you are not still there navigate back to the project folder in your terminal. Then type:

````
$npm test
````
![Running the tests ](https://github.com/abitravers1989/countMyWords/blob/master/public/running-tests.mp4)


#### Test Coverage:

- 18 Tests with 95% test coverage.


## Technologies

Code language: Javascript
Application framework?: Node.js
Test: Chai and mocha   http://chaijs.com/guide/styles/#expect
Test Coverage: ![Istanbul ](https://istanbul.js.org/)
Linitng (ensuring code is formatted correctly): ESLint


## My approach


I tried to use lean/agile methodology by creating the minimum / most simple application which would still satisfy the given criteria. This is why I chose to make a commandline node application which involved less code than a browser application(as didn't have to create the views).


#### Programme design approach

MVP

- Commandline node app.
- The textFile is pre-supplied and hard-coded into the programme.
- On running the programme the words, their frequency and if this number is prime or not, appears in the terminal.

````
MVP User Story

As a user,
So that I can see the wordCounterApp works,
I want the example book to be preloaded.

As a user,
So that I can see the wordCounterApp works,
I want to see all the words in the example book which are the same, I want all words to be standardised, ie no capitalisation or punctuation.

As a user,
So that I can use the wordCounterApp works,
I want to see all the words and their frequency in the supplied text File.

As a user,
So that I can use the wordCounterApp works,
I want to see all the words and their frequency in the supplied text File.

As a user who is a big prime numbers fan,
So that I can use the wordCounterApp works,
I want to see all the words, their frequency and if this number is prime or not in the supplied text File.
````

MVP+

- Remove Roman numerals and numbers from the text. This would have to be done before the Regex expression for the removal of punctuation then capitalisation.

- So that a user can see the frequency of these words in a way which allows them to get a better understanding of which words are the most common etc, then sorting the words so they are grouped and appear in terms of their frequency count. This would involve in some way an array as at the moment the words are only in a hash / object , which is un-ordered.

MVP ++

- User can input the file they want the word count from.
I would input this using the node readline module. This would prompt the user for a file name. Then this file name would be passed to the fs.readFile functionality which would read it then pass the contents on to the run application functionality. For simplicity I would still keep this in the index.js file.

MVP +++

- Add a user interface in the browser. This would render a html page which contained a form for the user to select a file. Then the word count results for this page would be displayed. This would make viewing larger files much easier.


## Reflections

#### Level of abstraction

I tried to keep this as small as possible. I split it into two modules:

 - One which was responsible for 'cleaning' the input text; removing the punctuation, capitalisation, whitespace and validating the file was indeed text.
 - Another which was responsible for splitting and counting the words then deciding if this frequency value was prime or not.

 I toyed with removing the prime calculator to it's own module but since it was only one function which needed to act on the words which were created in splitAndCount module, I decided to not.

 While writing my first set of tests for the split-and-count-words module I thought that I may have even abstracted too much. This is because I realised the input to this class relayed on the cleaning input text module have done it's job correctly. If it had not, then the text would contain whitespace and not count certain punctuated words as the same as their non-punctuated versions. Splitting them also meant slightly more code which doesn't fit with my agile intentions.

 I decided to keep it as is because the two modules still did two separate jobs and the splitAndCountWords module did not relay too heavily on the cleanInputText one.













## The Information Story - How I plan / design the programme flow

A text file/ text is provided as an argument when WordCounter is initialised.

CHECKS That the input is a string / converts it to a string

It removes all capitalisation / punctuation





Any non-words / strange characters are removed.

The text is split at empty spaces or lines. (Into individual words.)

From each word any punctuation or capitalisation is removed.




## Controller / Opening the file.

First I started by doing this asynchronously. This meant that the file opened and loaded before the wordCounter App functions could be ran on it's content. It therefore did not work.

I then decided to do this syncronously. While the node FS modules are something I have had experience with in my final project, using them syncronously and potentially using setTimeouts is something I have had less experience with.

This was my first attempt. This obviously didn't work because the variable fileContents could not be accessed outside of the function it is set in.




## Issues

tring to access ```_isPrimeCalculator``` method from within object.keys loop as it changed the environmental context .. all of a sudden because it was being called on Object not the module I defined the context / environment of this was not the split-and-count-words but the global? environment.

so had to find a way to access the keys in the hash differently




syncronousity of fs.readfile

## Reflection

Test Coverage:

Why is test coverage is not 100%?:

The test coverage states that not all the lines of the 'isPrimeCalculator' functionality in the splitAndCountWords module, are tested.
I have tested that this method behaves as predicted with a number of different scenarios and edge cases. So i feel it is adequately tested.

The main issue with test coverage is the missing feature test which would test the functionality of the whole app - the index.js file.
This is missing because I had issues with creating multiple spys for 'console.log'. I had to clean up the sinon spys after I had created them even if they were made in a different describe function (for a different module). My issues with understanding how to do this effectively are, I think, to do with my lack of understanding of encapsulation.
I was also not entirely sure if this feature test was needed because all the index file is doing is calling other modules.


However it was useful for revealing some naming improvements for the two functions which called all the other functions within their module.












At first my tests were not thorough enough. For the functionality which removed all punctuation and whitespace, I had not tested it against every type of character. When I added another test to include all characters it revealed the method (the regex expression within it) was lacking.


Commit history:

In this case I committed when I wrote the tests, so looking back through the history will reveal a code-base which is failing all the tests. Working professionally I would only commit when the code was passing the tests, however in this instance, I wanted to show that I was using TDD and red-green-refactor approach.

Chosen testing framwork:


Feature test / Testing Main:




Split-And-Count-Words Testing:

One of my biggest struggles was creating a sinon spy for console.log which could be used by more than one test. I changed the scope of where this spy was defined to inside the main module describe functionality, instead the 'displayWords' describe functionality (with both it blocks being called there), to defining it twice under a new name.  This either gave me an error that the spy was not defined or that i was attempting to create a spy for something (log) which had already been wrapped.

- The test for callAllFunctions was simply to check the functions were called in the right order.

- It effected my test coverage.



Made easier by experience doing prime numbers test: LINK
This meant i already had the functionality for checking if a number was prime or not.


Also i had experience reading files / using fs module of node in my final project


Challenges:

-


Index.js:

Unsure where is best to declare the file variable. Now it is a global variable...
didn't want to wrap it in the function because of MVP ++.
..have wrapped it in the function for now but would take it out for MVP ++ DO THIS!!!!!!





#### Why I chose the testing frameworks I did:

Used Chai with Mocha. I chose this over Jasmine for two reasons:
1. Jasmine needs the browser and a spec runner file to function when I have used it in the past. Since I chose to make a commandline application / simple node application I did not want to use a testing framework which required the browser if my application itself did not.
2. Chai allows more extensive testing, there are multiple things you can do with it which I am not sure about how to do with jasmine / if you can.. such as also asserting the length of an array.


### Resources

Testing:

https://github.com/stephengeller/prime-numbers-tech-test/tree/master/src

https://www.sitepoint.com/unit-test-javascript-mocha-chai/

http://chaijs.com/guide/styles/#expect

https://stackoverflow.com/questions/11552991/cleaning-up-sinon-stubs-easily



Node's FS file system:

I have used this before in my final project. Needs to be syncronous because I don't want anything to happen until the data is loaded.
I started with using it asyncronously but this loaded the file first then preformed the wordcounter app functionality on it.

https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback


DisplayWords functionality in splitAndCountWords module:

http://clubmate.fi/javascript-manipulating-objects-with-object-keys/
