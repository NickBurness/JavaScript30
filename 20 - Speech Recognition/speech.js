window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-GB' || 'en-US';

let p = document.createElement('p');
const voice = document.querySelector('.words');
voice.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    const loveScript = transcript.replace(/love|heart/gi, '❤');
    p.textContent = loveScript;

    if (e.results[0].isFinal) {
        p = document.createElement('p');
        voice.appendChild(p);
    }
});

recognition.addEventListener('end', recognition.start);
recognition.start();