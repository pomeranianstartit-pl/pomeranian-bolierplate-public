import './styles.css';
import { useEffect, useState } from 'react';

export const UseEffectTraining = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [number]);

  return <div>{number}</div>;
};
