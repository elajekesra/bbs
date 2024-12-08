let score = 0;
let currentQuestion = 0;
const totalQuestions = 3; // Soruların sayısını ayarlayın
const questions = [
    {
        question: "Wie viele Sekunden hat eine Minute?",
        answers: ["60", "100", "30", "120"],
        correct: 1 // 1. cevap doğru
    },
    {
        question: "Wie viele Tage hat ein Jahr?",
        answers: ["365", "400", "350", "300"],
        correct: 1 // 1. cevap doğru
    },
    {
        question: "Welche Farbe ist der Himmel an einem klaren Tag?",
        answers: ["Blau", "Grün", "Rot", "Gelb"],
        correct: 1 // 1. cevap doğru
    }
];

function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('qrCode').style.display = 'block';
    
    // QR kodunu oluştur
    const qrCodeContainer = document.getElementById('qrcode');
    const url = "http://www.bbc-kahot.com/quiz"; // QR koduyla yönlendirilecek telefon adresi
    QRCode.toCanvas(qrCodeContainer, url, function (error) {
        if (error) console.error(error);
    });

    // 3 saniye sonra sorulara geç
    setTimeout(function() {
        document.getElementById('qrCode').style.display = 'none';
        document.getElementById('questionSection').style.display = 'block';
        showQuestion();
    }, 3000);
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('questionText').innerText = question.question;
    
    // Cevapları butonlara yerleştir
    const buttons = document.querySelectorAll('.answer');
    buttons[0].innerText = question.answers[0];
    buttons[1].innerText = question.answers[1];
    buttons[2].innerText = question.answers[2];
    buttons[3].innerText = question.answers[3];
}

function checkAnswer(answerNumber) {
    const correctAnswer = questions[currentQuestion].correct;

    // Cevap doğruysa puan ekle
    if (answerNumber === correctAnswer) {
        score++;
    }

    // Sonraki soruya geç
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('questionSection').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    document.getElementById('score').innerText = "Punkte: " + score;
}
