import './styles.css';
import { useEffect, useState } from 'react';

export const JsSlidingBanner = () => {


  const defaultText = 'I love JS';

  const [isRunnig, setIsRunning] = useState(false)
  const [text, setText] = useState(defaultText)



  function handleStart() {

    setIsRunning(!isRunnig)

  }
  function handleReset() {
    setIsRunning(false)
    setText(defaultText)
  }

  useEffect(() => {
    if (!isRunnig) return;
    const id = setInterval(() => {
      setText((currentText) => {
        const tablica = [...currentText];
        const firstCharacter = tablica.shift();
        tablica.push(firstCharacter);
        return tablica.join('');
      })
    }, 200)
    return () => clearInterval(id)
  }, [isRunnig])

  return (
    <div>
      <h1>slider</h1>
      <img
        src="https://i.postimg.cc/vHFNx9MC/2023-05-11-16-
48-30.gif"
        alt="przykład"
        width={400}
      />
      <button onClick={handleStart}>{isRunnig ? 'stop' : 'start'}</button>
      <button onClick={handleReset}>reset</button>
      <p ><span style={{ backgroundColor: 'red' }} >{text}</span></p>

    </div>
  );
};
