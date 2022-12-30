
//start container 
var startContainer =  document.getElementById("startContainer");
var startBtn = document.getElementById("startBtn");

//quiz section 
var quizSection = document.getElementById("quizSection");
var questionText = document.getElementById("questionText");
var nextBtn = document.getElementById("next-btn");
var submitBtn = document.getElementById("initals");
var userInitals = document.querySelector("#user-initals");
var userScore =  document.querySelector("#user-score");
var scoresPage = document.querySelector("#high_scores_page")
var runningQuestion = 0;
var score = 0 


//answer choices
var choiceBtn = document.querySelectorAll("choice-btn");
var answerChoiceA = document.getElementById("answerChoiceA");
var answerChoiceB = document.getElementById("answerChoiceB");
var answerChoiceC = document.getElementById("answerChoiceC");
var answerChoiceD = document.getElementById("answerChoiceD");
var correctAnswer = document.getElementById("correct");  

//timer countdown 
var timeLeft = 60;
var time_start= false;
var timerEl = document.getElementById("countdownTimer");
var countdownTimerInterval = setInterval(setCountdownTimer, 1000);

//questions array
var questionsArr= [
  { 
   question: "What is NOT an example of an algorithum?",

   choiceA: "A) Software documentation", 
   choiceB: "B) A cooking recipie",
   choiceC: "C)A computer program",
   choiceD: "D) Tying your shoe",
   correct: "A"
  },
  {
   question: "What is an array in javascript?",
   choiceA: "A. A code snippet that can be called by other code or by itself, or a variable that refers to the function.", 
   choiceB: "B. It represents a truth value: true or false.", 
   choiceC: "C. A single variable that holds multiple values.", 
   choiceD: "D. It holds key-value pairs and remembers the original insertion order of the keys.", 
   correct: "C"
  },
  {
   question: "Which of the following is not a common data type?",
   choiceA: "A. Strings", 
   choiceB: "B. Boolean", 
   choiceC: "C. Numbers", 
   choiceD: "D. Alert", 
   correct: "D"
  },
  {
   question: "What is the correct meaning of FIFO??",
   choiceA: "A. Fly in fly out", 
   choiceB: "B. First in first out", 
   choiceC: "C. Last in first out", 
   choiceD: "D. From inside from outside",
   correct: "B"
 }
]
//called at pageload 
function init() {
  getWins();
  getlosses();
}

startBtn.addEventListener("click", function() {
  startContainer.style.display ="none";
  quizSection.style.display = "block";
  renderQuestions();
  time_start = true;
  setCountdownTimer()
});


function setCountdownTimer() {
  document.getElementById("time").innerHTML = timeLeft;
  if (time_start)
  timeLeft--;
  if(time <= 0) {
  //win condition 
 
  }
  if (timeLeft === 0) {
    clearInterval(countdownTimerInterval);
    document.getElementById("time").innerHTML = "Game over!";
    endGame();
  }
  
}

function renderQuestions() {
  var q = questionsArr[runningQuestion]; 
  
    questionText.innerHTML = "<h1>"+ q.question +"</h1>";
    answerChoiceA.innerHTML = "<h2>" + q.choiceA + "</h2>";
    answerChoiceB.innerHTML = "<h2>" + q.choiceB + "</h2>";
    answerChoiceC.innerHTML = "<h2>" + q.choiceC + "</h2>";
    answerChoiceD.innerHTML = "<h2>" + q.choiceD + "</h2>";

}


function checkAnswer(answer) {
  nextBtn.style.display = "block";
  correctAnswer = questionsArr[runningQuestion].correct;
  if (answer === correctAnswer) {
    console.log(answer + " is correct");
    document.getElementById("answerResponse").innerHTML = "Correct!";
    score ++; 
    setTimeout(function() {
      document.getElementById("answerResponse").innerHTML = "";
      }, 2000
    );
  } else {
      console.log( answer + " is incorrect");
      document.getElementById("answerResponse").innerHTML = "Incorrect :(";
      setTimeout(function() {
        document.getElementById("answerResponse").innerHTML = "";
        }, 2000
      );
    
    }
  if (runningQuestion >= questionsArr.length -1){
    endGame()
  }

}

nextBtn.addEventListener('click', () => {
  runningQuestion++
  setNextQuestion()
})

function setNextQuestion(){
  resetState()
  renderQuestions(runningQuestion)
  function resetState() {
    nextBtn.style.display = "none";
  }
}

function endGame() {
  nextBtn.style.display= "none";
  quizSection.style.display = "none";
  document.getElementById("game-over").style.display= "block";
  document.getElementById("end-score").innerHTML= score;
}

