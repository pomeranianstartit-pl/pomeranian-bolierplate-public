import { useEffect, useState } from 'react';
import './styles.css';
import { resolveConfig } from 'prettier';
import { ApiSymulationSuccess } from './ApiSymulationSuccess/ApiSymulationSuccess';

export function JsPromisesExercise(parameterToEffect) {
  // const [getState, setGetState] = useState(null);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log('Wykonuje operację cykliczną...');
  //   }, 5000);

  //   // cleanup function inside useEffect
  //   return () => {
  //     clearInterval(timer);
  //     console.log('Zatrzymuje operację cykliczną... Wykonuje clean up');
  //   };
  //   // to possible options in useEffect array of dependencies to kick useEffect and cause rerender of the component
  // }, [parameterToEffect, getState]);

  function logPromiseState(promise) {
    promise
      .then(() => {
        //success
        console.log('Stan: fulfilled');
        console.log('Promise zakończony sukcesem');
      })
      .catch(() => {
        //failed
        console.log('Stan: rejected');
        console.log('Promise zakończony błędem');
      })
      .finally(() => {
        // nevermind, I will do this
        console.log('Stan: fullfiled/rejected');
        console.log('Promise zakończony');
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
  return (
    <div>
      <ApiSymulationSuccess />
    </div>
  );
}
