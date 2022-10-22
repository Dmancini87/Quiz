const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const submitButton = document.getElementById('submit');
// the questions used in the quiz
const myQuestions = [
    {
      question: "Commonly used data types do NOT include ______",
      answers: {
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
      },
      correctAnswer: "c"
    },
    {
      question: "The condition in an else/if statement is enclosed in ______ ",
      answers: {
        a: "Curly Brackets",
        b: "Quotes",
        c: "Parentheses",
        d: "Square Brackets",
      },
      correctAnswer: "c"
    },
    {
      question: "A very useful tool for develeopment and debbugging for printing content to the debugger is:",
      answers: {
        a: "Java Script",
        b: "terminal bash",
        c: "for loops",
        d: "console.log",
      },
      correctAnswer: "d"
    },
    {
    question: "A very useful tool for develeopment and debbugging for printing content to the debugger is:",
    answers: {
      a: "Java Script",
      b: "terminal bash",
      c: "for loops",
      d: "console.log",
    },
    correctAnswer: "d"
  },
  {
    question: "A very useful tool for develeopment and debbugging for printing content to the debugger is:",
    answers: {
      a: "Java Script",
      b: "terminal bash",
      c: "for loops",
      d: "console.log",
    },
    correctAnswer: "d"
  }
  ];