let score = 0;
let currentQuestion = 0;

const questions = [
    {
        question: "Wie viele Sekunden hat eine Minute?",
        answers: ["60", "100", "30", "120"],
        correct: "60"
    },
    {
        question: "Wie viele Tage hat ein Jahr?",
        answers: ["365", "400", "350", "300"],
        correct: "365"
    },
    {
        question: "Welche Farbe ist der Himmel an einem klaren Tag?",
        answers: ["Blau", "Grün", "Rot", "Gelb"],
        correct: "Blau"
    },
    {
        question: "Was ist die Hauptstadt von Deutschland?",
        answers: ["München", "Berlin", "Frankfurt", "Köln"],
        correct: "Berlin"
    },
    // Diğer sorular...
];

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').innerText = question.question;
    document.getElementById('answer1').innerText = question.answers[0];
    document.getElementById('answer2').innerText = question.answers[1];
    document.getElementById('answer3').innerText = question.answers[2];
    document.getElementById('answer4').innerText = question.answers[3];
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestion].correct;

    if (document.getElementById(answer).innerText === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('questionDiv').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    document.getElementById('score').innerText = "Deine Punktzahl: " + score;
}