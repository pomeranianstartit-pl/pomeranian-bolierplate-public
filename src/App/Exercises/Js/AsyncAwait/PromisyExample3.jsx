import { useState } from 'react';
import './styles.css';

const DELAY = 500; // 0.5 sec

export const PromisyExample3 = () => {
  const [results, setResults] = useState();
  const handleOnClick = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        let result = 0;
        for (let i = 0; i < 100; i++) {
          result++;
        }
        reject(new Error('Something went wrong'));
        resolve(result);
      }, DELAY);
    });

    promise.then((res) => {
      console.log('Wynik:', res);
      setResults(res);
    });
  };

  return (
    <div>
      <h3>Przykład 3 - Promisy i asynchroniczność</h3>
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
