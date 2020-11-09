/*Author: Tavia Eckhart, Sean Brown, Kevin Martelli
Special thanks to Wes's Lecture Powerpoint, https://codepen.io/P1N2O/pen/pyBNzX
Created: October 2, 2020
License: Public Domain*/


// we define answers
    var answers = ["Fuck Yeah!",
                   "If I could marry that I would.",
                   "Fuck Yeah man! Definitely.",
                   "Fuck Yeah dude!",
                   "You betcha!",
                   "As I appears on Google, yes",
                   "Ummmm I think so. Lets try and solve it.",
                   "I think ... Yes.",
                   "Yes",
                   "Signs point to yes",
                   "Don't count on it",
                   "Fuck no.",
                   "W3Schools says no.",
                   "Outlook not so good",
                   "Very doubtful",
                   "That's not so hot, ask me again.",
                   "Ask me after you've checked the console.",
                   "I can't give away my secrets just yet.",
                   "Cannot predict now",
                   "Concentrate and check the console."];
// When the page loads it initiates the function that calls each element by ID
    window.onload = function() {
       var eight = document.getElementById("eight");
       var answer = document.getElementById("answer");
       var eightball = document.getElementById("eight-ball");
       var question = document.getElementById("question");
// when you click the eightball element trigger a function that takes the length of the input string and checks to see if its less than 2 letters
       eightball.addEventListener("click", function() {
         if (question.value.length < 2) {
           //less than two letters prompts the user to enter a question
           alert('Enter a question!');
         } else {
           //change the eightball's text to a random answers
           eight.innerText = "";
           var num = Math.floor(Math.random() * Math.floor(answers.length));
           answer.innerText = answers[num];
         }
       });
    };
