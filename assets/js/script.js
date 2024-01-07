
// questions for quiz
let quizData = [
    {
        question: 'What was the largest animal to ever live ?',
        a: 'T-rex',
        b: 'Mammuth',
        c: 'Blue whale',
        d: 'Shark',
        correct: 'c'

    }, {
        question: 'What aniaml causes the most deaths today?',
        a: 'Crocodiles',
        b: 'Sharks',
        c: 'Mosquitoes',
        d: 'Snakes',
        correct: 'c'
    }, {
        question: 'How fast can a cheetah run ?',
        a: '50 km/h',
        b: '70 km/h',
        c: '100 km/h',
        d: '130 km/h',
        correct: 'd'

    }, {
        question: 'What animal is the most endangered today?',
        a: 'Amur leopard',
        b: 'Tiger',
        c: 'Rhino',
        d: 'Gorilla',
        correct: 'a'
    }, {
        question: 'What animal live the longest ?',
        a: 'Turtles',
        b: 'Parrots',
        c: 'Quahog clam',
        d: 'Lobsters',
        correct: 'c'
    }, {
        question: 'wich is the largest bird ?',
        a: 'Sea eagle',
        b: 'ostrich',
        c: 'condor',
        d: 'Emu',
        correct: 'b',
    },{
        question: 'Which has the thickest fur of any mammal?',
        a: 'Seel',
        b: 'Penguin',
        c: 'Sea otter',
        d: 'Orca',
        correct: 'c',
    }
]
// variables to get from DOM
let answerElem = document.querySelectorAll(".answer");
let quiz = document.getElementById("quiz")
let questionEle = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById("button")

let currentQuiz = 0;
let points = 0;


loadQuiz();

// function to load Questions and asnwers to quiz
function loadQuiz() {
    deselectAnswers();
    let currentQuizData = quizData[currentQuiz];

    questionEle.innerText = currentQuizData.
        question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

// function to get correct answer to allow next question
function getSelected() {
    let answer = undefined;

    answerElem.forEach(answerElem => {
        if (answerElem.checked) {
            answer = answerElem.id;

        }
    });

    return answer;

}

function deselectAnswers(){
    answerElem.forEach(answerElem => {
        answerElem.checked = false;
    });


}


// asnwer button skips to next question
submitBtn.addEventListener("click", () => {

let answer = getSelected();

  if(answer){
    if(answer === quizData[currentQuiz].
        correct) {
            points++;
        }
   
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    }else {
        quiz.innerHTML = `<h2> you got ${points}/${quizData.length} questions right!
         </h2> <button onclick="location.reload()">Play Again</button>`;
    }
  }
});
