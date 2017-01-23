const magicCode = "kupe";
const codeLength = magicCode.length;
let codeAttempt = [];

document.onkeypress = function(e) {
  codeAttempt.push(e.key);
  if (codeAttempt.length > codeLength) {
    codeAttempt.shift();
  }
  if (codeAttempt.join("") == "kupe") {
    revealAnswer();
  }
}

function revealAnswer() {
  const choices = document.querySelectorAll(".choice, .incorrect");
  choices.forEach(choice => {
    if (choice.innerHTML != trueAnswer) {
      choice.innerHTML = "KUPO KUPO KUPO KUPO!";
    }
  });
}
