import { useState } from 'react';

export function AsyncAwaitExample1() {
  const [promiseResult, setPromiseResult] = useState('empty');

  //  async function handleOnClick() {
  const handleOnClick = async () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) resolve('Success');
        if (!success) reject('Rejected');
      }, 1000);
    });

    // promise.then((result) => setPromiseResult(result)).catch(setPromiseResult);
    try {
      const result = await promise;
      setPromiseResult(result);
    } catch (error) {
      setPromiseResult(error);
    } finally {
      console.log('Zakończono');
    }
  };

  return (
    <div className="promise-excercise">
      <h3>Async Await Example 1</h3>
      <button type="button" onClick={handleOnClick}>
        Start
      </button>
      <button type="button" onClick={() => setPromiseResult('cleared')}>
        Clear
      </button>
      <div>result: {promiseResult}</div>
    </div>
  );
}
