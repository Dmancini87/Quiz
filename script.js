

function startGame() {
  isWin = false;
  timerCount = 100;

  startButton.disabled = true;
  renderBlanks()
  startTimer()
}
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

    function buildQuiz(){

      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  

          for(letter in currentQuestion.answers){
  

            answers.push(
              `<label>
                <input type="button" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  

          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  

      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  

      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;

      myQuestions.forEach( (currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  

        if(userAnswer === currentQuestion.correctAnswer){

          numCorrect++;
  

          answerContainers[questionNumber].style.color = 'lightgreen';
        }

        else{

          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const timerElement = document.querySelector(".timer-count");
    let timer;
    let timerCount;

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
        question: "Arrays in JavaScript can be used to store ___",
        answers: {
          a: "numbers and strings",
          b: "other arrays",
          c: "booleans",
          d: "all of the above",
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
      question: "String vaules must be enclosed within when _____ being assigned to variables:",
      answers: {
        a: "commas",
        b: "parenthesis",
        c: "quotes",
        d: "curly brackets",
      },
      correctAnswer: "b"
    }
    ];
  
    buildQuiz();
  
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

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  

    showSlide(currentSlide);
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

  