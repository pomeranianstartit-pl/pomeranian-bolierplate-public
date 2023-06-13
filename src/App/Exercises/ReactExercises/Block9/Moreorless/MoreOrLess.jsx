import './styles.css';
import { useState } from 'react';

export const MoreOrLess =() => {
const [message, setMessage] = useState ('')
  function AnswerHandler (ev) {
    let currentAnswer = ev.target.value;

    

    if (currentAnswer > 10) {
      setMessage('TAK')

    } else {setMessage ('NIE')

    }

  } 
  
  return (
    <div>
      <h2>Czy A jest większe od 10?</h2>
      <input placeholder='A' type='number' onChange={AnswerHandler}></input>
      <h4>Odpowiedź: {message}</h4>
    </div>);

};
