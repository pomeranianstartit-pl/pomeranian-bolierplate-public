import { useState } from 'react';
import './styles.css';

export const MoreOrLessBetween = () => {
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  const [answer, setAnswer] = useState('Nie zmieniono jeszcze nic');
  function numberHolder1(number) {
    let A = number.target.value;
    setA(A);
    comper(A, B);
  }
  function numberHolder2(number) {
    let B = number.target.value;
    setB(B);
    comper(A, B);
  }
  function comper(A, B) {
    if (A === B) {
      console.log('są równe');
      setAnswer('Są równe!');
    } else if (A > B) {
      console.log('A jest większe');
      setAnswer('A jest większe');
    } else {
      console.log('B jest większe');
      setAnswer('B jest większe');
    }
  }
  return (
    <div>
      <h1>Czy A jest większe od B?</h1>
      <input type="number" placeholder="A" onChange={numberHolder1} />
      <br />
      <input type="number" placeholder="B" onChange={numberHolder2} />
      <h2>{`Odpowiedź: ${answer}`}</h2>
    </div>
  );
};
