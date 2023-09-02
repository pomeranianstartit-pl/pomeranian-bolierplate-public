import { useState } from 'react';
import './styles.css';

const DELAY = 500; // 0.5 sec

export const PromisyExample2 = () => {
  const [results, setResults] = useState();

  console.log('Jeden');
  const handleOnClick = () => {
    console.log('Dwa');
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = 0;
        for (let i = 0; i < 100000; i++) {
          result++;
        }
        console.log('Trzy');
        resolve(result);
      }, DELAY);
    });
    console.log('Cztery');
    promise.then((res) => {
      console.log('Pięć');
      setResults(res);
    });
    console.log('Sześć');
  };
  console.log('Siedem');

  return (
    <div>
      <h3>Przykład 2 - Promisy i asynchroniczność</h3>
      <button type="button" onClick={handleOnClick}>
        Start
      </button>
      <button type="button" onClick={() => setResults('')}>
        Reset
      </button>
      <div>Result: {results}</div>
    </div>
  );
};
