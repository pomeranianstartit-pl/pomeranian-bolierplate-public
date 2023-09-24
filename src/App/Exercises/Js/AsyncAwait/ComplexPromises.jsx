import { useState } from 'react';
import './styles.css';

const DELAY = 500; // 0.5sec
const times = 1e6;

const getSomeRuslts = (max = 10000, delay = DELAY) =>
  new Promise((resolve, _reject) => {
    setTimeout(() => {
      console.time('inner-' + max);
      const result = Array(max)
        .fill(0)
        .map((_, index) => ({ index }));
      console.timeEnd('inner-' + max);
      resolve('Success: ' + result.length);
    }, delay);
  });

export const ComplexPromises = () => {
  const [results, setResults] = useState();

  const handleOneByOne = async () => {
    console.time('promise-one-by-one');
    const p1 = await getSomeRuslts(times);
    const p2 = await getSomeRuslts(times * 2);
    const p3 = await getSomeRuslts(times * 3);
    console.timeEnd('promise-one-by-one');
    setResults([p1, p2, p3].join(', '));
  };

  const handleAll = async () => {
    console.time('promise-all');
    const p1 = getSomeRuslts(times);
    const p2 = getSomeRuslts(times * 2);
    const p3 = getSomeRuslts(times * 3);
    const allDone = await Promise.all([p1, p2, p3]);
    // is rejected, when any of the promises in the given array reject
    // rejection reason is the reason of the FIRST promise that rejected
    console.timeEnd('promise-all');
    setResults(allDone.join(', '));
  };

  const handleAllSettled = async () => {
    console.time('promise-all-settled');
    const p1 = getSomeRuslts(times);
    const p2 = getSomeRuslts(times * 2);
    const p3 = Promise.reject('Failed :(');
    const allSettled = await Promise.allSettled([p1, p2, p3]);
    // returns an array of results (both rejected and fulfilled)
    // each result conatains information about status and (value or reason)
    console.timeEnd('promise-all-settled');
    setResults(
      allSettled
        .map(({ status, value, reason }) => `${status}, ${value}, ${reason}`)
        .join(' | ')
    );
  };

  const handleAny = async () => {
    console.time('promise-any');
    const p1 = getSomeRuslts(times, 3);
    const p2 = getSomeRuslts(times * 2, 2);
    // const p3 = getSomeRuslts(times * 3);
    // const p1 = Promise.reject('Failed :(');
    // const p2 = Promise.reject('Failed :(');
    const p3 = Promise.reject('Failed :(');

    const anyFulfilled = await Promise.any([p1, p2, p3]);
    // promise fulfills when any of the inputs fulfills
    // it rejects when all of the promisses reject
    // it fulfills with first promise fulfillment value
    console.timeEnd('promise-any');
    setResults(anyFulfilled);
  };

  const handleRace = async () => {
    console.time('promise-race');
    const p1 = getSomeRuslts(times, 3);
    const p2 = getSomeRuslts(times * 3, 2);
    // const p3 = getSomeRuslts(times * 6, 1);
    // const p1 = Promise.reject('Failed :(');
    // const p2 = Promise.reject('Failed :(');
    const p3 = Promise.reject('Failed :(');

    const raceFirst = await Promise.race([p1, p2, p3]);
    // Creates a Promise that is resolved or rejected
    // when any of the provided Promises are resolved or rejected.
    // returns first SETTLED promise

    console.timeEnd('promise-race');
    setResults(raceFirst);
  };

  return (
    <div>
      <h3>ComplexPromises</h3>
      <button onClick={handleOneByOne}>Handle One by One</button>
      <button onClick={handleAll}>Handle All</button>
      <button onClick={handleAllSettled}>Handle All Settled</button>
      <button onClick={handleAny}>Handle Any</button>
      <button onClick={handleRace}>Handle Race</button>
      <button type="button" onClick={() => setResults('')}>
        Reset
      </button>
      <div>Result: {results}</div>
    </div>
  );
};
