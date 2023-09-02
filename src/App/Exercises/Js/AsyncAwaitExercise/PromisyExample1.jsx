import { useState } from 'react';

// https://javascript.info/promise-basics
export const PromisyExample1 = () => {
  const [results, setResults] = useState();

  const handleOnClick = () => {
    const promise = new Promise(() => {
      let result = 0;
      for (let i = 0; i < 100; i++) {
        result++;
      }
      return result;
    });

    promise.then((res) => {
      console.log('Wynik:', res);
      setResults(res);
    });
  };

  return (
    <div>
      <h3>Przykład 1 - Promisy i asynchroniczność</h3>
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
