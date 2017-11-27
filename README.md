## Word Counter Application

### The what:

This is a node application which; takes a text file (Supplied by the user), outputs the individual words which are in the book along with their word count.

It them displays if their word count is a prime number or not.


## Testing

To Test run:

````
$npm test
````

Test Coverage:

Giff

Test coverage has been calculated using Istanbul.
https://istanbul.js.org/

Liniting, which basically means ensuring the

## Why I chose the testing frameworks I did:

Used Chai with Mocha. I chose this over Jasmine for 2 reasons: 1. Jasmine needs the browser and a spec runner file to function when I have used it in the past. Since I chose to make a commandline application / simple node application I did not want to use a testing framework which required the browser if my application itself did not.
2. Chai allows more extensive testing, there are multiple things you can do with it which I am not sure about how to do with jasmine / if you can.. such as also asserting the length of an array.
Chai: http://chaijs.com/guide/styles/#expect



## Application Journey / User Story

`````
As a user,
So that I can get a wordCount,
I want to supply a text file to the application.

As a user,
So that I can analyse this text file with my new shiny wordCount app,
I want to see a list of words in this file. - I don't care where I see these.

As a user,
So that I can analyse this text file with my new shiny wordCount app,
I want to see the number of times these words appear. - at the moment I am totally unfussy by what this looks like.

As a user,
So that I can satisfy my prime number fascination while using my new wordCount app,
I want to see if the number of times these words appear is prime.

As a user,
So my eyes don't hurt when using the WordCounter App,
I want the output of all of WordCount's outstanding functionality, to be more visually appealing.
`````


## The Information Story - How I plan / design the programme flow

A text file/ text is provided as an argument when WordCounter is initialised.

CHECKS That the input is a string / converts it to a string

It removes all capitalisation / punctuation





Any non-words / strange characters are removed.

The text is split at empty spaces or lines. (Into individual words.)

From each word any punctuation or capitalisation is removed.




## My approach


## Why I chose node:

because I thought it would be the simplest, quickest and easiest way to acheive the MVP which fully satisfied the spec. Making it a web application involves view and html set up which should be MVP +, once there is a working product in the console.




Designed an MVP:

Simple Application which is given a file already and counts the numbers.
It outputs to the command line.

After outputting the numbers and their word counts it then does this again, stating if the word count is prime or not.



Next feature:

It formats this and displays it in a html file which is rendered in the browser.


### Level of abstraction chosen and why split the way it was

### Testing

Why did i chose mainly expect/ assert and why chai ..


## Controller / Opening the file.

First I started by doing this asynchronously. This meant that the file opened and loaded before the wordCounter App functions could be ran on it's content. It therefore did not work.

I then decided to do this syncronously. While the node FS modules are something I have had experience with in my final project, using them syncronously and potentially using setTimeouts is something I have had less experience with.

This was my first attempt. This obviously didn't work because the variable fileContents could not be accessed outside of the function it is set in.


## Where my thinking came from

I designed the MVP as I did because I had recently done something in the command line. I wanted to get the simplistest working products

## Issues

tring to access ```_isPrimeCalculator``` method from within object.keys loop as it changed the environmental context .. all of a sudden because it was being called on Object not the module I defined the context / environment of this was not the split-and-count-words but the global? environment.

so had to find a way to access the keys in the hash differently




syncronousity of fs.readfile

## Reflection


Issues with using Spy .. unsure of the encapsulation .. why it is going through files sometimes and not others.

https://stackoverflow.com/questions/11552991/cleaning-up-sinon-stubs-easily





At first my tests were not thorough enough. For the functionality which removed all punctuation and whitespace, I had not tested it against every type of character. When I added another test to include all characters it revealed the method (the regex expression within it) was lacking.

While writing the first set of tests for the split-and-count-words module I became unsure about the level of abstarction I had designed.
- When giving this module sample input I had to make sure the sample input contained no capitals, punctuation or whiteshape. This functionality should be done by the clean-input-text module which should be ran before it, however if there was an issue in they way the classes were called in main (as it may not be obvious that you have to 'clean' the input text before splitting and counting it) then the programme wouldn't deliever to the spec. As punctuation and capitalised words would be counted as different words.
- this made me think maybe since the split-and-count-words functionality / module and the clean-input-text both relay on each other to deliver the relatively simple MVP with all functionality they could have been within one module. This would also reduce the amount of code having to be written,.. for example at the bottom of each of these 2 modules I write a function which calls the other functions in that module .. this could just be one function if they were together. Also there would be less code in the tests and I could be more thoroughly convinced all the functions were working together as intended .. because ...


Commit history:

In this case I committed when I wrote the tests, so looking back through the history will reveal a code-base which is failing all the tests. Working professionally I would only commit when the code was passing the tests, however in this instance, I wanted to show that I was using TDD and red-green-refactor approach.

Chosen testing framwork:


Feature test / Testing Main:

Attempted to do a feature test which did the same as main did. However I wasn't sure this was necissary as all main does is call the other modules plus the node module fs.
However it was useful for revealing some naming improvements for the two functions which called all the other functions within their module.

Split-And-Count-Words Testing:

One of my biggest struggles was creating a sinon spy for console.log which could be used by more than one test. I changed the scope of where this spy was defined to inside the main module describe functionality, instead the 'displayWords' describe functionality (with both it blocks being called there), to defining it twice under a new name.  This either gave me an error that the spy was not defined or that i was attempting to create a spy for something (log) which had already been wrapped.

- The test for callAllFunctions was simply to check the functions were called in the right order.

- It effected my test coverage.




MVP+

Remove Roman numerals and numbers from the text.
Sort the words. So they are displayed in order of frequency, from most frequent to least.

MVP ++

User is prompted to input the file by the comandline.So the word counter can be used for other files. I would do this using the real line module in node. I would console.log a prompt for the user to add the file name. This would then go into a function to read a file - fs module would be used. It could be further improved with the fs open file functionality which would allow the user to open a file on their local desktop and then this could be read.



### Resources

testing:

https://github.com/stephengeller/prime-numbers-tech-test/tree/master/src

https://www.sitepoint.com/unit-test-javascript-mocha-chai/

http://chaijs.com/guide/styles/#expect

Node's FS file system:

I have used this before in my final project. Needs to be syncronous because I don't want anything to happen until the data is loaded.
I started with using it asyncronously but this loaded the file first then preformed the wordcounter app functionality on it.

https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback


DisplayWords functionality in splitAndCountWords module:

http://clubmate.fi/javascript-manipulating-objects-with-object-keys/


Submission checklist

Don't submit a tech test without running through these questions first.

If any of the questions are unclear, take a look at out our guide for improving your code

 Is your code properly tested?

 Does your repository have a good README?

 Re-read the original task and check you've fulfilled all the requirements.

 Is your code formatted idiomatically?

Employer quote: "Code was...untidy."
 Does your code look correctly formatted on GitHub as well as on your computer?

 Have you taken as much logic as possible out of your controllers into models/libraries?

 Have you taken logic out of your views?

 Does your code follow the Single Responsibility Principle? Ask each class, spec and method/function what it does, if the reply involves the word "and" you probably need to refactor.

 Are the units well encapsulated?

 Have you kept your methods/classes as small as possible?

 Have you run your code through a linter?

 Do all your names make sense? Can someone else understand what's going on without you having to explain it to them? Do your names use the language of the problem domain?

 Is any of your code doing anything unusual/suprising?

 Have you removed all comments except those that are absolutely necessary?

Testing checklist

Careers team quote: [One of] the big 3 things we hear from employers [is] write tests."
 Is all your code tested (especially unit tests but also feature tests where appropriate)?

 Are your tests passing?

 Do you have high test coverage?

 Have you tested unhappy paths and edge cases?

 Do your unit tests mock their collaborators?

 Do you always test for behaviour, rather than state?

 Do your specs read well when you run them?

README checklist

Careers team quote: "[One of] the big 3 things we hear from employers [is] write a good README."
Employer quote: "The ReadMes are quite poor...so I had to go through their code to see what they made."
 Describe how you approached designing your solution to the problem.

 Describe how you structured your code. Why did you do it this way?

 Describe how to install and run your code and tests.

 Describe the dependencies your code has. What trade-offs did you make when deciding what dependencies to use?

 If you've deployed the app, include a link to it.

 Include screenshots of your running app.

 Try very hard to complete all the tasks in the tech test. If you run out of time, outline how you would have approached the sections you didn't get to.

Employer quote: "We did say it's OK not to complete all parts if you run out of time, but I would have expected some attempt to outline their approach/thoughts instead to show what they can do."
 Describe the extensions you would add if you had more time.

 Spelling and grammar.
