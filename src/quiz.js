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
    presentCorrectAnswer();
  }
  updateCurrentQuestion();
  if (currentQuestionNumber <= TOTAL_QUESTIONS) {
    loadQuestion();
  } else {
    presentFinalScore();
    finalFeedback();
  }
}

function presentCorrectAnswer(){
  alert("No Leo, this one's a " + trueAnswer);
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
