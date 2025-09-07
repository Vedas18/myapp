import React, { useState } from 'react';
import './App.css';
import kiraSpeech from './kira-speech.mp3'; // ✅ Your MP3 in src/

const kiraSubtitles = [
  {
    time: 0,
    text: "My name is Yoshikage Kira. I’m 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married."
  },
  {
    time: 13,
    text: "I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don’t smoke, but I occasionally drink. I’m in bed by 11 PM and make sure I get eight hours of sleep, no matter what."
  },
  {
    time: 32,
    text: "After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up."
  },
  {
    time: 53,
    text: "Wh-What are you talking about?!"
  },
  {
    time: 57,
    text: "I’m trying to explain that I’m a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight, I wouldn’t lose to anyone."
  }
];

function App() {
  const [currentText, setCurrentText] = useState("");
  const [started, setStarted] = useState(false);

  const startSpeech = () => {
    if (started) return; // prevent restarting on multiple clicks

    const audio = new Audio(kiraSpeech);
    audio.play();

    setStarted(true);

    const interval = setInterval(() => {
      const currentTime = Math.floor(audio.currentTime);

      const subtitle = kiraSubtitles
        .slice()
        .reverse()
        .find((s) => currentTime >= s.time);

      if (subtitle && subtitle.text !== currentText) {
        setCurrentText(subtitle.text);
      }

      if (audio.ended) {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div className="App" onClick={startSpeech}>
      <header className="App-header">
        {!started ? (
          <p className="start-text">
          Click anywhere
        </p>
        
        ) : (
          <p className="creepy-text">
            {currentText}
          </p>
        )}
      </header>
    </div>
  );
}

export default App;






