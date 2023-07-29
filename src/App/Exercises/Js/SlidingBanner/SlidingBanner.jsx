import './styles.css';
import { useEffect, useState } from 'react';

export const SlidingBanner = () => {
  const defaultText = 'I love JavaScript ';
  const [isRunning, setIsRunning] = useState(false);
  const [text, setText] = useState(defaultText);

  function handleStopStart() {
    setIsRunning(!isRunning);
  }

  function handleRestart() {
    setIsRunning(false);
    setText(defaultText);
  }

  useEffect(() => {
    if (!isRunning) return;
    const id = setInterval(() => {
      setText((currentText) => {
        const tablica = [...currentText];
        const firstCharacter = tablica.shift();
        tablica.push(firstCharacter);
        return tablica.join('');
      });
    }, 200);
    return () => clearInterval(id);
  }, [isRunning]);

  return (
    <div>
      <p>
        <img
          src="https://i.postimg.cc/vHFNx9MC/2023-05-11-16-
48-30.gif"
          alt="przykład"
          width={400}
        />
      </p>
      <button onClick={handleStopStart}>{isRunning ? 'stop' : 'start'}</button>
      <button onClick={handleRestart}>restart</button>
      <p>
        <span style={{ backgroundColor: 'aqua' }}>{text}</span>
      </p>
    </div>
  );
};
