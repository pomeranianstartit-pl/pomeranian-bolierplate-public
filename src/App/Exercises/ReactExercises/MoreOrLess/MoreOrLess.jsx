import './styles.css';
import { useState } from 'react';
export const MoreOrLess = () => {
  const [message, setMessage] = useState('Wprowadź');

  function answerHandler(ev) {
    let currentAnswer = ev.target.value;
    //console.log(currentAnswer)
    if (currentAnswer > 10) {
      setMessage('TAK');
    } else {
      setMessage('NIE');
    }
  }
  return (
    <div>
      <h1>Czy A jest większe od 10?</h1>
      <input placeholder="A" type="number" onChange={answerHandler}></input>
      <h2>
        {'Odpowiedź: '} {message}
      </h2>
    </div>
  );
};
