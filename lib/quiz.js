$(document).ready(function() {
  runQuiz();
});

function runQuiz() {
  // Make a random image appear which will act as the question
  var question = data[0][0];
  // Make the answer appear as one option
  // Make 3 additional incorrect "answers" appear
  var answer1 = data[0][1];
  var answer2 = data[1][1];
  var answer3 = data[2][1];

  $("#question").html(question);
};
