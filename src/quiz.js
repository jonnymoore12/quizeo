$(document).ready(function() {
  loadQuestion();
});

var trueAnswer = ''
var currentQuestionNumber = 1;
var currentQuestionAnswered = false;
var score = 0
const TOTAL_QUESTIONS = 5;

function checkAnswer(){
  var choice = event.target.innerHTML;
  if (choice == trueAnswer) {
    score += 1;
  } else {
    feedbackForIncorrectAnswer();
  }
  updateCurrentQuestion();
  if (currentQuestionNumber <= TOTAL_QUESTIONS) {
    loadQuestion();
  } else {
    presentFinalScore();
    finalFeedback();
  }
}

function feedbackForIncorrectAnswer(){
  $("#feedback").html("No Leo, that one was a  " + trueAnswer).fadeOut(3000);
}

function updateCurrentQuestion(){
  currentQuestionNumber += 1;
  currentQuestionAnswered = true;
}

function presentFinalScore(){
  alert('Your total score is: ' + score);
}

function finalFeedback(){
  if (score == TOTAL_QUESTIONS) {
    alert("Not bad, dad would be proud");
  } else {
    alert("How can? What would mum say?!");
  }
}
