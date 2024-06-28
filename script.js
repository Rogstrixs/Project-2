const questions = [
    {
        question: "How many Dragon Balls are there?",
        answers: ["two", "seven", "nine", "five"],
        correct: 1
    },
    {
        question: "Which anime series revolves around a boy who sells his soul to a demon?",
        answers: ["Demon Slayer", "Jujutsu Kaisen", "Black Butler", "Death Note"],
        correct: 2
    },
    {
        question: "An outcast prince takes over the revolution by controlling the mind of others. Who is he?",
        answers: ["Lelouch vi Britannia", "Zen Wistaria", "Prince Arslan", "Alibaba Saluja"],
        correct: 0
    },
    {
        question: "Kaneki was tortured for ten days. Even his hair turned white from black, and his fingers and toes were cut off. Who did this to him?",
        answers: ["Dr. Kano", "Yamori", "Kisho Arima", "Shu Tsukiyama"],
        correct: 1
    },
    {
        question: "In the anime series 'Bleach,' what is the name of the main character who becomes a Soul Reaper?",
        answers: ["Izuku Midoriya", "Thorfinn", "Zenitsu Agatsuma", "Ichigo Kurosaki"],
        correct: 3
    },
    {
        question: "What is the name of the virtual reality game featured in the anime series 'Sword Art Online'?",
        answers: ["Sword Art Online", "Gulag", "Log Horizon", "Shangri-La Frontier"],
        correct: 0
    },
    {
        question: "In the anime series 'One Punch Man,' what is the name of the overpowered superhero who defeats enemies with a single punch?",
        answers: ["Tatsumaki", "Metal Knight", "Saitama", "Genos"],
        correct: 2
    },
    {
        question: "What is the name of the navigator and thief who joins Luffy on his Journey in the 'One Piece' manga series?",
        answers: ["Nami", "Franky", "Brook", "Zoro"],
        correct: 0
    },
    {
        question: "Who is the archaeologist and former assassin in the Straw Hat Pirates crew in the 'One Piece' manga series?",
        answers: ["Sanji", "Nico", "Chopper", "Usopp"],
        correct: 1
    },
    {
        question: "Which character is the host of the One-Tail in the 'Naruto' manga series?",
        answers: ["Naruto", "Hinata", "Itachi", "Gaara"],
        correct: 3
    },
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit-btn");
const restartButton = document.getElementById("restart-btn");
const option1Element = document.getElementById("option1-text");
const option2Element = document.getElementById("option2-text");
const option3Element = document.getElementById("option3-text");
const option4Element = document.getElementById("option4-text");

// Load the first question
loadQuestion();

submitButton.addEventListener("click", handleSubmit);
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
        showResults();
    } else {
        loadQuestion();
        scoreElement.textContent = "Score: " + score + " / " + questions.length;
    }
}

function showResults() {
    scoreElement.textContent = "Your final score is: " + score + " / " + questions.length;
    resultElement.textContent = "";
    submitButton.disabled = true;
    restartButton.disabled = false;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    scoreElement.textContent = "Score: 0 / " + questions.length;
    resultElement.textContent = "";
    submitButton.disabled = false;
    restartButton.disabled = true;
}

function loadQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    option1Element.textContent = questions[currentQuestion].answers[0];
    option2Element.textContent = questions[currentQuestion].answers[1];
    option3Element.textContent = questions[currentQuestion].answers[2];
    option4Element.textContent = questions[currentQuestion].answers[3];
}