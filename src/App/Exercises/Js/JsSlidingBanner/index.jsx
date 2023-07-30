import { useState, useEffect } from 'react';
import './styles.css';

const defaultText = 'I  love  JavaScrip      ';

export const JsSlidingBanner = () => {
  const [isRunning, setIsRunnig] = useState(false);
  const [text, setText] = useState(defaultText);

  function handleStartStop() {
    setIsRunnig(!isRunning);
  }
  function handleReset() {
    setIsRunnig(false);
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
      <div>
        <img
          src="https://i.postimg.cc/vHFNx9MC/2023-05-11-16-
48-30.gif"
          alt="przykład"
          width={400}
        />
      </div>
      <div>
        <h1>
          <span
            style={{ backgroundColor: 'grey', color: 'White', width: '300px' }}
          >
            {text}
          </span>
        </h1>
      </div>
      <button onClick={handleStartStop}>{isRunning ? 'STOP' : 'START'}</button>
      <button onClick={handleReset}>RESTART</button>
    </div>
  );
};
