const Quizobj = [
    {
        question: "Q1: What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?",
        a: 2008,
        b: 2007,
        c: 2009,
        d: 2010,
        ans: "ans1"
    },
    {
        question: "Q2: What war did Captain America fight in?",
        a: "World War 1",
        b: "World War 2",
        c: "Vietnam War",
        d: "Gulf War",
        ans: "ans2"
    },
    {
        question: "Q3: Who was the first major character to die?",
        a: "Black Widow",
        b: "Heimdall",
        c: "Nebula",
        d: "Tony Stark",
        ans: "ans2"
    },
    {
        question: "Q4: What type of doctor is Stephen Strange?",
        a: "Cardiothoracic surgeon",
        b: "Trauma surgeon",
        c: "Plastic surgeon",
        d: "Neurosurgeon",
        ans: "ans4"
    },
    {
        question: "Q1: What is the real name of the Black Panther?",
        a: "M`Baku",
        b: "N`Jadaka",
        c: "N`Jobu",
        d: "T`Challa",
        ans: "ans4"
    },

]






const questions = document.querySelector(".Question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#Submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questonList = Quizobj[questionCount];
    questions.innerHTML = questonList.question;

    option1.innerHTML = questonList.a;
    option2.innerHTML = questonList.b;
    option3.innerHTML = questonList.c;
    option4.innerHTML = questonList.d;
};


loadQuestion();

const CheckAnswer = () => {
    let answer;

    answers.forEach((currAnsElem) => {
        if (currAnsElem.checked) {
            answer = currAnsElem.id;
        }

    });
    return answer
}

const deselectAll = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false)
}

submit.addEventListener("click", () => {
    const checkAnswer = CheckAnswer();
    console.log(checkAnswer);


    if (checkAnswer == Quizobj[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();

    if (questionCount < Quizobj.length) {

        loadQuestion()
    }
    else {

        showScore.innerHTML = `
     <h3> You Scored ${score}/${Quizobj.length} ✌ </h3>
     <button class="btn" onclick="location.reload()">Play Again</button>
     `;

        showScore.classList.remove("score")

    }

});








