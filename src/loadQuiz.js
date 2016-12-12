function quiz(param) {
  window.location.href = "quiz.html?totalQuestions=" + param;
}

function getTotalQuestions() {
  var url = location.href;
  var paramStartPos = url.indexOf("?totalQuestions=");
  var paramValue = url.substr(paramStartPos + 16);
  totalQuestions = paramValue;
}

function home() {
  window.location.href = "index.html"
}

function requiz() {
  quiz(totalQuestions);
}
