const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Rome"],
        correct: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: ["Earth", "Saturn", "Jupiter", "Uranus"],
        correct: 2
    },
    // Add more questions here...
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const formElement = document.getElementById("quiz-form");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const option1Element = document.getElementById("option1-text");
const option2Element = document.getElementById("option2-text");
const option3Element = document.getElementById("option3-text");
const option4Element = document.getElementById("option4-text");

// Load the first question
loadQuestion();

formElement.addEventListener("submit", handleSubmit);
restartButton.addEventListener("click", restartQuiz);

function handleSubmit(event) {
    event.preventDefault();
    const userAnswer = parseInt(document.querySelector("input[name='answer']:checked").value);
    if (userAnswer === questions[currentQuestion].correct) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect. The correct answer is " + questions[currentQuestion].answers[questions[currentQuestion].correct];
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
        score = 0;
        resultElement.textContent = "";
        scoreElement.textContent = "Your final score is: " + score + " / " + questions.length;
    } else {
        loadQuestion();
        scoreElement.textContent = "Score: " + score + " / " + questions.length;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    scoreElement.textContent = "Score: 0 / " + questions.length;
    resultElement.textContent = "";
}

function loadQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    option1Element.textContent = questions[currentQuestion].answers[0];
    option2Element.textContent = questions[currentQuestion].answers[1];
    option3Element.textContent = questions[currentQuestion].answers[2];
    option4Element.textContent = questions[currentQuestion].answers[3];
}