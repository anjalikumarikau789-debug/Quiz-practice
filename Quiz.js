const quizData = [
  { question: "What does HTML stand for?",
     options: ["Hypertext Markup Language", "Hyper Transfer Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
      correct: 0 },
                  { question: "Which CSS Property is used to control the spacing between elements?",
                     options: ["margin", "padding", "spacing", "border-spacing"],
                      correct: 0 },
                    { question: "Which is the Javascript function used to select an HTML element by its id?",
                       options: ["getElementById()", "querySelector()", "getElement()", "selectElement()"],
                        correct: 0 },
                    { question: "In React, which hook is used to perform side effects in a function component?",
     options: ["useState", "useEffect", "useMemo", "useRef"], 
     correct: 1 },
                   { question: "Which HTML tag is used to create an ordered list?",
                     options: ["<ul>", "<ol>", "<li>", "<dl>"],
                      correct: 1 }
];

let current = 0;
let score = 0;
let selected = false;

const qEl = document.getElementById('question');
const optEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');

function loadQuestion(){
  selected = false;
  nextBtn.disabled = true;
  const data = quizData[current];
  document.getElementById('qCount').innerText = `Question ${current+1} / ${quizData.length}`;
  document.getElementById('progressBar').style.width = `${(current/quizData.length)*100}%`;
  qEl.innerText = data.question;
  optEl.innerHTML = '';
  data.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.innerText = opt;
    btn.onclick = () => {
      if(selected) return;
      selected = true;
      if(i === data.correct){
        btn.classList.add('correct');
        score++;
        document.getElementById('scoreText').innerText = `Score: ${score}`;
      } else {
        btn.classList.add('wrong');
        optEl.children[data.correct].classList.add('correct');
      }
      nextBtn.disabled = false;
    };
    optEl.appendChild(btn);
  });
}

nextBtn.onclick = () => {
  current++;
  if(current < quizData.length){
    loadQuestion();
  } else {
    document.getElementById('quizBox').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('finalScore').innerText = `Your Score: ${score} / ${quizData.length}`;
    document.getElementById('message').innerText = score >= 4 ? "Great job Anjali! Ready for Project 3 🚀" : "Good try! Ek baar phir try karo ❤️";
  }
};

loadQuestion();
