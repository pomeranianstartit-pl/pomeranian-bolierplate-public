import { useState } from 'react';
import './styles.css';

export const MoreOrLess = () => {
  const [message, setMessage] = useState('');

  function answerHandler(ev) {
    let currentAnswer = ev.target.value;

    if (currentAnswer > 10) {
      console.log('TAK');
      setMessage('TAK');
    } else {
      console.log('NIE');
      setMessage('NIE');
    }
  }
  return (
    <div>
      <h1>Czy A jest większe od 10</h1>
      <input placeholder="A" type="number" onChange={answerHandler}></input>
      <h2>
        {'Odpowiedź: '}
        {message}
      </h2>
    </div>
  );
};
