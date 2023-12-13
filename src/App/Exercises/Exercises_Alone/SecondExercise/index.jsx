import { useState } from 'react';

export function Exercise() {
  const [counter, setCounter] = useState(0);
  const [hide, setHide] = useState(false);
  const [NumberA, setNumberA] = useState(0);

  const [numberAA, setNumberAA] = useState(0);
  const [numberBB, setNumberBB] = useState(0);

  const [numberRandom, setNumberRandom] = useState(0);
  const [handleNumber, setHandleNumber] = useState(0);
  const [newText, setNewText] = useState('');

  const handleClick = () => {
    let newnumberRandom = setNumberRandom(Math.floor(Math.random() * 100));
    return newnumberRandom;
  };
  const resetClick = () => {
    let newNEW = setNumberRandom(0);
    let newText = setNewText('');
    return <div>{(newNEW, newText)}</div>;
  };
  return (
    <>
      <h1>Kliknij 5 razy</h1>
      <button onClick={() => setCounter(counter + 1)}>
        {counter > 5 ? `Kliknięto więcej niż 5 razy` : 'Start'}
      </button>
      <p>{counter}</p>
      <h1>See or not</h1>
      <button onClick={() => setHide(!hide)}>
        {hide === false ? 'Pokaż' : 'Ukryj'}
      </button>
      <p>{hide === false ? '' : 'widać mnie'}</p>

      <div>
        <h1>Czy A jest większe od 10?</h1>
        <input
          type="number"
          placeholder="A"
          onChange={(e) => setNumberA(e.target.value)}
        />
        <p>{NumberA > 10 ? 'Tak' : 'Nie'}</p>
      </div>
      <div>
        <h1>Czy A jest większe od B?</h1>
        <input
          type="number"
          placeholder="A"
          onChange={(e) => setNumberAA(e.target.value)}
        />
        <input
          type="number"
          placeholder="B"
          onChange={(d) => setNumberBB(d.target.value)}
        />
        <p>
          Odpowiedź:{' '}
          {numberAA && numberBB === 0
            ? 'równe 0'
            : numberAA === numberBB
            ? 'A i B Jest równe '
            : numberAA > numberBB
            ? 'A Jest większe'
            : 'A Jest Mniejsze'}
        </p>
      </div>
      <div>
        <h1>Jaką jestem liczbą</h1>
        <button onClick={() => handleClick()}>Start</button>
        <input
          type="number"
          onChange={(e) => setHandleNumber(e.target.value)}
        />
        <p>{numberRandom}</p>
        <p>
          {numberRandom == handleNumber
            ? 'Gratulacje zgadłeś'
            : numberRandom > handleNumber
            ? 'Wylosowana liczba jest większa'
            : 'wylosowana liczba jest mniejsza'}
        </p>

        <button onClick={() => resetClick()}> Reset</button>
      </div>
    </>
  );
}
