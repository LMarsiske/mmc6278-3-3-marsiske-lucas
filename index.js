// Your code here
var questionsArr = [
  {
    question: "Are Java and JavaScript related?",
    answer: false,
  },
  {
    question:
      "Can Electron be used to build desktop apps with JavaScript, HTML, and CSS?",
    answer: true,
  },
  {
    question: "Is React a JavaScript framework?",
    answer: true,
  },
  {
    question: "Can Node be run in the front-end?",
    answer: false,
  },
  {
    question: "Is Vue a JavaScript framework?",
    answer: true,
  },
];

function runQuiz() {
  console.log(questionsArr);
  let correct = 0;
  for (let i = 0; i < questionsArr.length; i++) {
    let el = questionsArr[i];
    let response = confirm(el.question);
    console.log(response, el.answer);
    if (response === el.answer) {
      correct++;
    }
  }
  console.log(correct);
  let percent = Math.round((correct / questionsArr.length) * 100);
  console.log(percent);
  alert(`You scored ${percent.toString()}%`);
}
