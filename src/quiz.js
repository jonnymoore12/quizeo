$(document).ready(function() {
  loadQuestion();
});

var trueAnswer = ''
var currentQuestionNumber = 1;
var currentQuestionAnswered = false;
var score = 0
const TOTAL_QUESTIONS = 5;

function checkAnswer(){
  var choiceElement = event.target
  var choice = choiceElement.innerHTML;
  if (choice == trueAnswer) {
    correctAnswer();
  } else {
    incorrectAnswer(choiceElement);
  }
  if (currentQuestionAnswered == true) {
    if (currentQuestionNumber <= TOTAL_QUESTIONS) {
      setTimeout(function(){
        loadQuestion()
      }, 1000);
    } else {
      // presentFinalScore();
      finalFeedback();
    }
  }
}

function correctAnswer() {
  score += 1;
  currentQuestionAnswered = true;
  currentQuestionNumber += 1
  $("#feedback").html("Correct!").show().fadeOut(1000);
}

function incorrectAnswer(element){
  // highlight selected one red
  element.style.backgroundColor = "rgb(255, 64, 64)";
  // highlight correct answer green
}

function presentFinalScore(){
  alert('Your total score is: ' + score);
}

// function finalFeedback(){
//   if (score == TOTAL_QUESTIONS) {
//     alert("Not bad, dad would be proud");
//   } else {
//     alert("How can? What would mum say?!");
//   }
// }

function finalFeedback(){
  window.location="results.html";
}
