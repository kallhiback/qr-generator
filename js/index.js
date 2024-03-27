function generateQR() {
    const qrText = document.getElementById("qr-text").value;
    const qrCode = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrText}" alt="QR Code">`;
    document.getElementById("qr-code").innerHTML = qrCode;}