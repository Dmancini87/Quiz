

 function startGame() {
  isWin = false;
  timerCount = 100;
  startButton.disabled = true;
  startTimer()
}

function playQuiz(){
  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];
      for(letter in currentQuestion.answers){

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
  quiz.innerHTML = output.join('');
    };



function showResults(){

};
const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const submitButton = document.getElementById('submit');
const startButton = document.querySelector(".start-button");
const timerElement = document.querySelector(".timer-count");

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


  playQuiz();

  function startTimer() {
     timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        if (isWin && timerCount > 0) {
          clearInterval(timer);
          winGame();
        }
      }
      if (timerCount === 0) {
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  };
    function winGame() {
    winLose.textContent = "YOU WON!!!🏆 ";
       startButton.disabled = false;
    };

function loseGame() {
 winLose.textContent = "GAME OVER";
  startButton.disabled = false;

};


startButton.addEventListener("click", startGame);

  submitButton.addEventListener('click', showResults);