const startButton = document.getElementById('start');
const statusDisplay = document.getElementById('status');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'ben-IND';

startButton.addEventListener('click', () => {
    recognition.start();
    statusDisplay.textContent = 'Listening...';
});

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    statusDisplay.textContent = `You said: "${transcript}"`;
    speak(transcript);
};

recognition.onerror = (event) => {
    statusDisplay.textContent = `Error occurred: ${event.error}`;
};

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.pitch = 0.5; // Adjust pitch for different tone
    utterance.rate = 1.2; // Adjust rate for different speed
    speechSynthesis.speak(utterance);
}
