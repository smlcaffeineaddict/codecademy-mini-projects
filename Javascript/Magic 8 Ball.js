let userName = '';

// Ternary expression to handle user name input
console.log(userName ? `Hello, ${userName}!` : 'Hello!');

// Define a list of possible questions the user might ask
const possibleQuestions = [
   "Will I win the lottery?",
   "Is my love life going to improve?",
   "Should I take that new job?",
   "Will I travel to a new country this year?",
   "What is the meaning of life?",
];

// Choose a random question from the list using Math.random() and array indexing
const randomIndex = Math.floor(Math.random() * possibleQuestions.length);
const userQuestion = possibleQuestions[randomIndex];

// Print the user's question
console.log(`The Magic 8 Ball has been asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

// Define the eight possible Magic Eight Ball responses
const responses = [
    "It is certain.",
    "It is decidedly so.",
    "Reply hazy, try again.",
    "Cannot predict now.",
    "Do not count on it.",
    "My sources say no.",
    "Outlook not so good.",
    "Signs point to yes."
];

// Use the random number to choose a response
let eightBall = responses[randomNumber];

// Print the Magic Eight Ball's response
console.log("The Magic Eight Ball says:", eightBall);