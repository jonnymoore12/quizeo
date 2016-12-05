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
  }
  currentQuestionNumber += 1;
  currentQuestionAnswered = true;
  if (currentQuestionNumber <= TOTAL_QUESTIONS) {
    loadQuestion();
  } else {
    alert('Your total score is: ' + score);
  }
}
