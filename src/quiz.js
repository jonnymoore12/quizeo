$(document).ready(function() {
  loadQuestion();
});

var answer1 = ''
var currentQuestionNumber = 1;
var currentQuestionAnswered = false;

function loadQuestion() {
  var questionIndex = randomQuestionIndex();
  answer1 = data[questionIndex][1];
  var falseAnswerIndex1 = falseAnswerIndex(questionIndex, -1, -1);
  var answer2 = data[falseAnswerIndex1][1];
  var falseAnswerIndex2 = falseAnswerIndex(questionIndex, falseAnswerIndex1, -1);
  var answer3 = data[falseAnswerIndex2][1];
  var falseAnswerIndex3 = falseAnswerIndex(questionIndex, falseAnswerIndex1, falseAnswerIndex2);
  var answer4 = data[falseAnswerIndex3][1];
  randomizeMultipleChoice(answer1, answer2, answer3, answer4);
}

function sampleIndex(data) {
  return Math.floor(Math.random()*data.length);
}

function randomQuestionIndex() {
  var questionIndex = sampleIndex(data);
  var question = '<img src="assets/images/' + data[questionIndex][0].toString() + '"/>'
  $("#question").html(question);
  return questionIndex;
}

function falseAnswerIndex(questionIndex, falseAnswerIndex1, falseAnswerIndex2) {
  var index = sampleIndex(data);
  while (index == questionIndex || index == falseAnswerIndex1 || index == falseAnswerIndex2) {
    index = sampleIndex(data);
  }
  return index;
}

function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
  return array
}

function randomizeMultipleChoice(answer1, answer2, answer3, answer4) {
  var newOrder = shuffle([answer1, answer2, answer3, answer4]);
  $("#answer1").html(newOrder[0]);
  $("#answer2").html(newOrder[1]);
  $("#answer3").html(newOrder[2]);
  $("#answer4").html(newOrder[3]);
}

function checkAnswer(){
  // Access the text for the DOM element that was clicked and compare it to the
  // correct answer
  // console.log(event.target.innerHTML);
  var choice = event.target.innerHTML;
  if (choice == answer1) {
    currentQuestionNumber += 1;
    currentQuestionAnswered = true;
    loadQuestion();
  }
}
