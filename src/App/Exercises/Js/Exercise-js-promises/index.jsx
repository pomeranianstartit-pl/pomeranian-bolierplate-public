import { useEffect, useState } from 'react';
import './styles.css';

export function JSPromisesExercise({ parameterToEffect }) {
  const [getState, setState] = useState(null);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('wykonuje operacje cykliczna...');
    }, 5000);
    //cleanup function insinde useEffect
    return () => {
      clearInterval(timer);
      console.log('zatrzymaj operacje cykliczna... cleanup');
    };
  }, [parameterToEffect, getState]);

  function logPromiseState(promise) {
    promise
      .then(() => {
        //succes
        console.log('stan fullified');
        console.log('promis sakonczony sukcesem');
      })
      .catch(() => {
        //failed
        console.log('stan rejected');
        console.log('promis sakonczony bledem');
      })
      .finally(() => {
        //nevermind I will do this
        console.log('stan fullified/rejected');
        console.log('promis sakonczony');
      });
  }

  const myPromise = new Promise((resolve, rejected) => {
    setTimeout(() => {
      const random = Math.random();

      if (random < 0.5) {
        resolve();
      } else {
        rejected();
      }
    }, 2000);
  });
  logPromiseState(myPromise);
  return <div>Promises</div>;
}
