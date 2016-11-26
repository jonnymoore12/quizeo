$(document).ready(function() {
  runQuiz();
});

function runQuiz() {
  var questionIndex = randomizeQuestion(data);
  // // Present correct answer corresponding to image:
  correctAnswer(questionIndex);
  // Present one false answer:
  var falseAnswer1Index = falseAnswer1(questionIndex);
  // Present another false answer:
  var falseAnswer2Index = falseAnswer2(questionIndex, falseAnswer1Index);
  // Present another false answer:
  var falseAnswer3Index = falseAnswer3(questionIndex, falseAnswer1Index, falseAnswer2Index);
};

function sampleIndex(data){
  return Math.floor(Math.random()*data.length);
};

function randomizeQuestion(){
  var questionIndex = sampleIndex(data);
  var question = '<img src="assets/images/' + data[questionIndex][0].toString() + '"/>'
  $("#question").html(question);
  // Come back to this. Hoisting?
  return questionIndex;
};

function correctAnswer(questionIndex){
  $("#answer1").html(data[questionIndex][1]);
};

function falseAnswer1(questionIndex){
  var falseAnswer1Index = sampleIndex(data);
  while (falseAnswer1Index == questionIndex) {
    falseAnswer1Index = sampleIndex(data);
  }
  $("#answer2").html(data[falseAnswer1Index][1]);
  return falseAnswer1Index;
};

function falseAnswer2(questionIndex, falseAnswer1Index){
  var falseAnswer2Index = sampleIndex(data);
  while (falseAnswer2Index == questionIndex || falseAnswer2Index == falseAnswer1Index) {
    falseAnswer2Index = sampleIndex(data);
  }
  $("#answer3").html(data[falseAnswer2Index][1]);
  return falseAnswer2Index;
};

function falseAnswer3(questionIndex, falseAnswer1Index, falseAnswer2Index){
  var falseAnswer3Index = sampleIndex(data);
  while (falseAnswer3Index == questionIndex || falseAnswer3Index == falseAnswer1Index || falseAnswer3Index == falseAnswer2Index) {
    falseAnswer3Index = sampleIndex(data);
  }
  $("#answer4").html(data[falseAnswer3Index][1]);
  return falseAnswer3Index;
};
