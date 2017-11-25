## Word Counter Application

### The what:

This is a node application which; takes a text file (Supplied by the user), outputs the individual words which are in the book along with their word count.

It them displays if their word count is a prime number or not.



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

Designed an MVP:

Simple Application which is given a file already and counts the numbers.
It outputs to the command line.

After outputting the numbers and their word counts it then does this again, stating if the word count is prime or not.



Next feature:

It formats this and displays it in a html file which is rendered in the browser.


## Where my thinking came from

I designed the MVP as I did because I had recently done something in the command line. I wanted to get the simplistest working products



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
