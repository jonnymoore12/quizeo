var trueAnswer = ''
var currentQuestionNumber = 1;
var currentQuestionAnswered = false;
var score = 0
var totalQuestions = 5;
var percentage = 0

$(document).ready(function() {
  getTotalQuestions();
  loadQuestion();
});

function checkAnswer(){
  var choiceElement = event.target
  var choice = choiceElement.innerHTML;
  if (choice == trueAnswer) {
    correctAnswer();
  } else {
    incorrectAnswer(choiceElement);
  }
  if (currentQuestionAnswered == true) {
    if (currentQuestionNumber <= totalQuestions) {
      setTimeout(function(){
        loadQuestion()
      }, 1000);
    } else {
      // presentFinalScore();
      calculatePercentage();
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
  element.style.backgroundColor = "rgb(255, 64, 64)";
}

function presentFinalScore(){
  alert('Your total score is: ' + score);
}

function calculatePercentage(){
  percentage = Math.floor((score / totalQuestions) * 100)
}

function finalFeedback(){
  document.getElementById("finalFeedback").style.visibility="visible";
  document.getElementById("totalQuestions").innerHTML=totalQuestions;
  document.getElementById("correct").innerHTML=score;
  document.getElementById("percentage").innerHTML=percentage.toString() + "%";

}
