import { useEffect, useState } from 'react';
import './styles.css';

/*

napisać useEffect'a oraz stworzyć Promise'a,
który zostanie spełniony i wyświetli nam 
"I'm resolved :)"  używamy async/await
użyjmy useState do zapisania odpowiedzi z promisa.

*/

const DELAY = 500; // 0.5sec

const getSomeResults = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I'm resolved:");
    }, DELAY);
  });

export const AsyncAwaitExercise = () => {
  const [results, setResults] = useState();
  useEffect(() => {
    const handleAsync = async () => {
      try {
        const result = await getSomeResults();

        setResults(result);
      } catch (err) {
        setResults(err);
      }
    };

    handleAsync();
  }, []);

  return (
    <div>
      <h3>Async Await Exercise</h3>

      <button type="button" onClick={() => setResults('')}>
        Reset
      </button>
      <div>Result: {results}</div>
    </div>
  );
};
