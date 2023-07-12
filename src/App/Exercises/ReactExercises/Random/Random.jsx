import { useState } from 'react';
import './styles.css';

export const Random = () => {
  const [answerRandom, setAnswerRandom] = useState(0);
  const [answer, setAnswer] = useState('Zacznijmy');

  function numberxHolder(num) {
    let number = parseInt(num.target.value);
    console.log(number);

    if (number === answerRandom) {
      setAnswer('Wygrałeś!');
    } else if (number < answerRandom) {
      console.log('Za mało');
      setAnswer('Za mało');
    } else {
      console.log('Za dużo');
      setAnswer('Za dużo');
    }
  }

  function randomGenerator() {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log(randomNumber);
    setAnswerRandom(randomNumber);
  }

  function Restart() {
    setAnswerRandom(0);
    console.log('Ustawiono twoją liczbę oraz liczbę losową na 0');
  }
  return (
    <div>
      <h1>Jaką jestem liczbą od 1 do 10?</h1>
      <button className="btn" onClick={randomGenerator}>
        {'START'}
      </button>
      <input type="number" placeholder="A" onChange={numberxHolder} />
      <h2>{`${answer}`}</h2>
      <button className="btn" onClick={Restart}>
        {'RESET'}
      </button>
    </div>
  );
};
