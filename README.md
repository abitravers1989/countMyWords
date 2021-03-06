## Word Counter Application

![Using the application](https://github.com/abitravers1989/countMyWords/blob/master/public/running-application.gif)


### The what:

A simple command-line node application.

It takes the example text file (saved in the public folder of this directory).

It outputs, to the console;
- the words which appear in that file,
- their frequency,
- if that number is prime or not.

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

If you are not still there, navigate back to the project folder in your terminal.
 Then type:

`````
$ npm start
`````
or

`````
$ node index.js
`````

## Running the tests

If you are not still there, navigate back to the project folder in your terminal.
Then type:

````
$npm test
````
![Running the tests](https://github.com/abitravers1989/countMyWords/blob/master/public/running-tests.gif)


#### Test Coverage:

- 18 Tests with 95% test coverage.


## Technologies

Code language: Javascript

Application framework?: Node.js

Test: Chai and mocha  

Test Coverage: ![Istanbul ](https://istanbul.js.org/)

Linitng (ensuring code is formatted correctly): ESLint


## My approach


I tried to use lean/agile methodology by creating the minimum / most simple application which would satisfy the given criteria.

For this reason, I chose to make a commandline node application.
I felt this involved less code than a browser application(as I didn't have to create the views).


#### Programme design approach

MVP

- Commandline node app.
- The textFile is pre-supplied and hard-coded into the programme.
- On running the programme; the words, their frequency and if this number is prime or not, appears in the terminal.

````
MVP User Story

As a user,
So that I can see that the wordCounterApp works,
I want the example book to be preloaded.

As a user,
So that I can see that the wordCounterApp works,
I want to see all the words in the example book, I want all words to be standardised, ie no capitalisation or punctuation.

As a user,
So that I can use the wordCounterApp,
I want to see all the words and their frequency in the supplied text File(book).

As a user who is a big prime numbers fan,
So that I can use the wordCounterApp,
I want to see all the words, their frequency and if this number is prime or not.
````

MVP+

- Remove Roman numerals and numbers from the text. This would have to be done before the Regex expression for the removal of punctuation then capitalisation.

- Sorting the words in terms of their frequency. This would allow the user to more easily see which words are most common etc. My first approach to this would involve using an array as at the moment the words are stored in a hash/ object, which is un-ordered.


MVP ++

- User can input the file they want the word count from.

I would input this using the node readline module. This would prompt the user for a file name. Then this file name would be passed to the fs.readFile functionality which would read it then pass the contents on to the run application functionality.

For simplicity I would still keep this in the index.js file. But if it was more complex consider abstracting it to a separate module.

MVP +++

- Add a user interface in the browser.
This would render a html page which contained a form for the user to select a file, then the word count results would be displayed.
This would make viewing larger files much easier and the results could further be displayed in more user-friendly ways.

## The information story

A text file is provided to the index.js file, the fsReadfile functionality reads the contents of this file.
This contents is then passed to the application.

Running the application does the following:

1st Checks the input is valid.
2nd Removes all capitalisation / punctuation and whitespace.
3rd Splits the text into an array of individual words.
4th The number of times each word occurs is counted and this number along with the word is stored as key value pairs in a hash.
5th This hash is displayed as it's word, it's frequency number, then this number is checked against the primeCalculator function, and if it is prime or not is included in the display.




## Reflections

#### Level of abstraction

I tried to keep this as small as possible. I split it into two modules:

 - One which was responsible for 'cleaning' the input text; removing the punctuation, capitalisation, whitespace and validating the file was indeed text.
 - Another which was responsible for splitting and counting the words, then deciding if the number which represented the frequency was prime or not.

 I toyed with removing the prime calculator to it's own module.
 I decided not to because;
 - it was only one function,
 - it needed to act on the words which were created in splitAndCount module,
 - keeping it in the same module as the other functions meant the display function could be kept much less complex and didn't need another module to be injected into it.


While writing my first set of tests for the split-and-count-words module I thought that I may have even abstracted too much.
I realised the input to this module relayed on the cleaning input text module have done it's job correctly. If it had not, then the text would contain whitespace and not count certain punctuated words as the same as their non-punctuated versions.
Splitting them also meant slightly more code which doesn't fit with my agile intentions.

 I decided to keep it as is because the two modules still did two separate jobs and the splitAndCountWords module did not relay too heavily on the cleanInputText one.


#### Understanding of scope

I managed to gain understanding in javascript scopes. But this did reveal that I still don't fully understand it and need further work.

Wins:
- Using the isPrimeCalculator functionality within the displayWords function. At first I used Object.key to try to access the key's in the hash. When I looped within this it changed the scope (i think) and stopped me from being able to access the isPrimeCalculator function. I solved this problem but would like to understand more.


- Managed to use console.log spy multiple times by resetting/ destroying the spy I had created each time with the afterEach functionality. This meant I could  use it again in further tests.


Still to solve/ working progress:

- Not sure where to declare the text file const, right now it is done outside the scope of any functions. If the user was given the option to select a file (MVP ++) this would need to be put inside a module/ function. I would like to understand more about where would be best to declare this const.

- I need to further understand the 'garbage collection' / how to clean up these spys effectively so I could have set another spy and done a feature test on the index.js file.

Scope and closures:
http://ryanmorr.com/understanding-scope-and-context-in-javascript/
The const (and let) variables are confined to the scope of the block they are defined in.
The fs.readfile const I have declare is outside of a block so I think will be accessible through the whole runtime of the programme.
The spy seems to be defined within the module describe block .. therefore I am not sure still why it is persisting into other tests' describe blocks, or if this is even the problem at all.


#### Test Coverage:

Why is test coverage is not 100%?:

The test coverage states that not all the lines of the 'isPrimeCalculator' functionality in the splitAndCountWords module, are tested.
I have tested that this method behaves as predicted with a number of different scenarios and edge cases which I feel makes up for this lack in coverage.

The main issue with test coverage is the missing feature test which would test the functionality of the whole app - the index.js file.

This is missing because I had issues with creating multiple spys for 'console.log'. I had to clean up the sinon spys after I had created them, even if they were made in a different describe function (for a different module).
My issues with understanding how to do this effectively are, I think, to do with my lack of understanding of encapsulation.

I was also not entirely sure if this feature test was needed because all the index file is doing is calling other modules.


#### Synchronous loading of the file

Despite the fact this may slow down the programme I decided to load the text file synchronously. This is because I need the content to be loaded before preforming the other functions on it. The whole programme depends on the file being loaded to work.

I have some experience of using the fs node module from my final project at makers, so this made it easier.


#### Commit history:

Looking back through the commit history will reveal a code-base which is failing all the tests at some points. This is because I wanted the commits to reflect my working process, red-green-refactor, so I commit when I wrote the tests before I wrote the code.
 Working professionally I would only commit when the code was passing the tests.


#### Why I chose the testing frameworks I did:

I chose to test with Chai with Mocha. I chose this over Jasmine because I felt, Chai allows more extensive testing. There are multiple things you can do with it which I am not sure how to do with Jasmine/ if you even can as effectively (such as also asserting the length of an array).


### Resources

Testing:

https://github.com/stephengeller/prime-numbers-tech-test/tree/master/src

https://www.sitepoint.com/unit-test-javascript-mocha-chai/

http://chaijs.com/guide/styles/#expect

https://stackoverflow.com/questions/11552991/cleaning-up-sinon-stubs-easily


Node's FS file system:

https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback


DisplayWords functionality in splitAndCountWords module:

http://clubmate.fi/javascript-manipulating-objects-with-object-keys/
