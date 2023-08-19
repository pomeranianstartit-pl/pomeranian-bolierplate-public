import { useState } from 'react';
import './styles.css';

export const TryCatchFinally = () => {
  const [results, setResults] = useState();
  const handleOnClick = () => {
    try {
      let value = { index: 9, sum: 100 };
      Object.freeze(value);
      // ...
      value.sum = 200;
      setResults(`[Sukces]{${value.sum}}`);
    } catch (err) {
      setResults(`[Error]{${err.message}}`);
    } finally {
      setResults((prev) => prev + '[Finally]');
    }
  };

  return (
    <div>
      <h3>Try Catch Finally</h3>
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
