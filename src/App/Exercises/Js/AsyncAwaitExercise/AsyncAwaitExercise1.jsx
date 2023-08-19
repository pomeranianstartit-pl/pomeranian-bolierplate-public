import { useState, useEffect } from 'react';

export function AsyncAwaitExercise1() {
  const [result, setResult] = useState();

  const getResult = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("I'm resolved");
      }, 1000);
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getResult();
        setResult(data);
        console.log('wynik', data);
      } catch (error) {
        setResult(error);
      } finally {
        console.log('Finished');
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h3>Async Await Ćwiczenie - with useEffect</h3>
      <div>Result: {result}</div>
    </div>
  );
}
