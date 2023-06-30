import { useEffect, useState } from 'react';
import './styles.css';
import { ApiSymulationSuccess } from './ApiSymulationSuccess/ApiSymulationSuccess';
export function JsPromisesExercise(parameterToEffect) {

  const [getState, setState] =useState(null);

  useEffect (()=>{
    const timer =setInterval (()=>{
      console.log("Wykonuje operację cykliczną...")
    }, 5000 );
    // cleanup function inside useEffect

    return ()=>{
      clearInterval(timer);
      console.log('Zatrzymaj operacje cykliczna ... Wykonuje cleanup')
    }
    // possible options in useEffect array to kick useEffect and cause
  }, [ getState]);
  // służy do optymalizacji działania aplikacji
 function logPromiseState(promise) {
  promise
  .them(()=>{
    // sucess
    console.log('Stan: fullfilled');
    console.log( 'Promise: zakonczony sukcesem');
  })
  .catch(()=>{
    // failed
    console.log('Stan: rejected');
    console.log( 'Promise: zakonczony bledem');
  })
  .finally(()=>{
    console.log('Stan: fullfilled/rejected');
    console.log( 'Promise: zakonczony');
  })

  const myPromises = new Promise ((resolve, rejected)=>{
    setTimeout(()=>{
      const random =Math.random();
      if (random < 0,5) {
        resolve ()
      }
      else { rejected()}
    })
  })

 }
  return (
    <div className='playing-with-js-promises'>
  <ApiSymulationSuccess/>
    </div>
  );
}
