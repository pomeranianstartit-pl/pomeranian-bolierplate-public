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

  return <div>Promises</div>;
}
