import './styles.css';
import { useState } from 'react';

export const FindNumber = () => {
  const [message, setMessage] = useState('');

  function answerHandler(ev) {
    let currentAnswer = ev.target.value;
    if (currentAnswer === 7) {
      setMessage('Gratulacje trafiłeś/aś!');
    } else if (currentAnswer < 7) {
      setMessage('Jestem mniejsza');
    } else {
      setMessage('Jestem większa');
    }
  }
  function randomNumber() {
    return Math.random();
  }
  return (
    <div>
      <h2>Jaką jestem liczbą?</h2>
      <button className="btn" onClick={randomNumber}>
        {'START'}
      </button>
    </div>
  );
};
