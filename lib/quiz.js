$(document).ready(function() {
  runQuiz();
});

function runQuiz() {
  // Make a random image appear which will act as the question:
  var questionIndex = Math.floor(Math.random()*data.length)
  var question = '<img src="assets/images/' + data[questionIndex][0].toString() + '"/>'
  // Present correct answer corresponding to image:
  var answer1 = data[questionIndex][1];
  console.log(questionIndex);

  // Randomize one other possible answer:
  var answer2Index = Math.floor(Math.random()*data.length)
  while (answer2Index == questionIndex) {
    answer2Index = Math.floor(Math.random()*data.length);
  }
  console.log(answer2Index);
  var answer2 = data[answer2Index][1];

  // Randomize one other possible answer:
  var answer3Index = Math.floor(Math.random()*data.length)
  while (answer3Index == questionIndex || answer3Index == answer2Index) {
    answer3Index = Math.floor(Math.random()*data.length);
  }
  var answer3 = data[answer3Index][1];
  console.log(answer3Index);

  // Randomize one other possible answer:
  var answer4Index = Math.floor(Math.random()*data.length)
  while (answer4Index == questionIndex || answer4Index == answer2Index || answer4Index == answer3Index) {
    answer4Index = Math.floor(Math.random()*data.length);
  }
  var answer4 = data[answer4Index][1];
  console.log(answer4Index);

  $("#question").html(question);
  $("#answer1").html(answer1);
  $("#answer2").html(answer2);
  $("#answer3").html(answer3);
  $("#answer4").html(answer4);
};
