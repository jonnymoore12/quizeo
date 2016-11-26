$(document).ready(function() {
  runQuiz();
});

function runQuiz() {
  var questionIndex = randomQuestionIndex();
  $("#answer1").html(data[questionIndex][1]);
  var falseAnswerIndex1 = falseAnswerIndex(questionIndex, 'noIndex', 'noIndex');
  $("#answer2").html(data[falseAnswerIndex1][1]);
  // Present another false answer:
  var falseAnswerIndex2 = falseAnswerIndex(questionIndex, falseAnswerIndex1, 'noIndex');
  $("#answer3").html(data[falseAnswerIndex2][1]);
  // Present another false answer:
  var falseAnswerIndex3 = falseAnswerIndex(questionIndex, falseAnswerIndex1, falseAnswerIndex2);
  $("#answer4").html(data[falseAnswerIndex3][1]);
};

function sampleIndex(data){
  return Math.floor(Math.random()*data.length);
};

function randomQuestionIndex(){
  var questionIndex = sampleIndex(data);
  var question = '<img src="assets/images/' + data[questionIndex][0].toString() + '"/>'
  $("#question").html(question);
  return questionIndex;
};

function falseAnswerIndex(questionIndex, falseAnswerIndex1, falseAnswerIndex2){
  var index = sampleIndex(data);
  while (index == questionIndex || index == falseAnswerIndex1 || index == falseAnswerIndex2) {
    index = sampleIndex(data);
  }
  return index;
};
