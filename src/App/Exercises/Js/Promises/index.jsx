import { useEffect, useState } from 'react';
import './styles.css';

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
  }, [personalData, getState]);
  // służy do optymalizacji działania aplikacji
 
  return (
    <div className='playing-with-js-promises'>
  
    </div>
  );
}
