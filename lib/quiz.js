$(document).ready(function() {
  runQuiz();
});

function runQuiz() {
  // Make a random image appear which will act as the question
  var question = '<img src="assets/images/' + data[0][0].toString() + '"/>'
  // Present 4 possible answers
  var answer1 = data[0][1];
  var answer2 = data[1][1];
  var answer3 = data[2][1];
  var answer4 = data[3][1];

  $("#question").html(question);
  $("#answer1").html(answer1);
  $("#answer2").html(answer2);
  $("#answer3").html(answer3);
  $("#answer4").html(answer4);

};
