import { Timer } from './Timer';
import './styles.css';
import { useEffect, useState } from 'react';

export function Exercise() {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);
  // --------------------------------------------------------------------
  // USE EFFECT
  // --------------------------------------------------------------------

  // useEffect bez dependency array - WYWOŁA SIĘ ZA KAŻDYM RAZEM GDY KOMPONENT ZOSTANIE WYRENDEROWANY
  useEffect(() => {
    console.log('useEffect na każdej zmianie');
  });

  // Nasłuuchuj na zmiany count i doubleCount
  useEffect(() => {
    console.log(count, doubleCount, 'count lub double count uległ zmianie');
  }, [count, doubleCount]);

  // Nasłuuchuj na zmiany count
  useEffect(() => {
    console.log(count, 'count uległ zmianie');
  }, [count]);

  // Nasłuuchuj na zmiany doubleCount
  useEffect(() => {
    doubleCount === 2
      ? console.log('Count === 2 ')
      : console.log('Count !== 2');
    console.log(doubleCount, 'doubleCount uległ zmianie');
  }, [doubleCount]);

  // useEffect z pustym dependency array - WYWOŁA SIĘ TYLKO RAZ PO ZAMOUNTOWANIU KOMPONENTU
  useEffect(() => {
    // pobierz dane z serwera, wyswielt błędy, ewentualnie poinformuj użytkonika o konkretej syutacji
    console.log('UseEffect - z pustą dedendency array - wywołaj na inicie');
  }, []);

  return (
    <div>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Dodaj 1
      </button>
      <button onClick={() => setDoubleCount((prevState) => prevState + 2)}>
        Dodaj 2
      </button>
      <div>
        <div>Count {count}</div>
        <div>Double count {doubleCount}</div>
      </div>

      <Timer />
    </div>
  );
}
