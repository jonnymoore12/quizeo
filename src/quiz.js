var trueAnswer = ''
var currentQuestionNumber = 1;
var currentQuestionAnswered = false;
var firstTimeAnsweringQuestion = true;
var score = 0
var totalQuestions = 5;
var percentage = 0

$(document).ready(function() {
  getTotalQuestions();
  loadQuestion();
});

function checkAnswer() {
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
      calculatePercentage();
      setTimeout(function(){
        finalFeedback()
      }, 1000);
    }
  }
}

function correctAnswer() {
  if (firstTimeAnsweringQuestion == true) {
    score += 1;
  }
  currentQuestionAnswered = true;
  currentQuestionNumber += 1
  $("#feedback").html("Correct!").show().fadeOut(1000);
}

function incorrectAnswer(element) {
  firstTimeAnsweringQuestion = false;
  $(element).toggleClass("choice incorrect");
  // element.style.backgroundColor = "rgb(255, 64, 64)";
}

function calculatePercentage() {
  percentage = Math.floor((score / totalQuestions) * 100)
}

function finalComment( ) {
  var comment = ''
  if (percentage >= 96) {
    comment = "Coming along nicely. Dad would be proud."
  } else if (percentage > 80) {
    comment = "Must try harder. Back to the academy you go."
  } else {
    comment = "How can?! What would mum say?"
  }
  return "\"" + comment + "\""
}

function finalFeedback() {
  document.getElementById("finalFeedback").style.visibility="visible";
  document.getElementById("totalQuestions").innerHTML=totalQuestions;
  document.getElementById("correct").innerHTML=score;
  document.getElementById("percentage").innerHTML=percentage.toString() + "%";
  document.getElementById("comment").innerHTML=finalComment();
}
