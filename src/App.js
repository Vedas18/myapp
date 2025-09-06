import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import kiraSpeech from './kira-speech.mp3';

function App() {
  const fullText = "I am Kira Yoshikage. I live quietly in Morioh, working an ordinary office job. I desire only peace and routine. My hands are beautiful, delicate, and pure. I wish to remain unnoticed, calm, precise… efficient. That is all I want. That is all I am.";

  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const audioRef = useRef(new Audio(kiraSpeech));

  const startApp = () => {
    audioRef.current.play();
    setStarted(true);
  };

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [started]);

  if (!started) {
    return (
      <div className="App" onClick={startApp} style={{cursor: 'pointer'}}>
        <header className="App-header">
          <p>Click anywhere to start Kira’s monologue</p>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{displayedText}</p>
      </header>
    </div>
  );
}

export default App;




