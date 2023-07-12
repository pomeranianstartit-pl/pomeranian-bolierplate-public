import { useState } from 'react';
import './styles.css';

export const MoreOrLess = () => {
  const [YesOrNot, setYesOrNot] = useState('Nie wpisałeś jeszcze liczby!');
  function ansewerHandler(ev) {
    let A = ev.target.value;
    if (A > 10) {
      setYesOrNot('TAK');
    } else {
      setYesOrNot('NIE');
    }
    console.log(A);
  }
  return (
    <div>
      <h1>Czy A jest większe od 10?</h1>
      <input type="number" placeholder="A" onChange={ansewerHandler} />
      <h2>{`Odpowiedź: ${YesOrNot}`}</h2>
    </div>
  );
};
