function startGame() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('qrCode').style.display = 'block';

    // QR Kodunu Oluştur
    const qrCodeContainer = document.getElementById('qrcode');
    const url = "http://www.bbc-kahot.com/quiz";  // Kullanıcının telefonundan açacağı sayfa
    QRCode.toCanvas(document.getElementById('qrcode'), url, function (error) {
        if (error) console.error(error);
    });

    // "Fragen starten" butonunu gösterme
    document.getElementById('startQuizButton').style.display = 'block';
}