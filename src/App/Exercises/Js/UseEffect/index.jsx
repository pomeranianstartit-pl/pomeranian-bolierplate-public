import { useState, useEffect } from 'react';

export const Exercices = () => {
  const [count, setCount] = useState(0);

  const [intervalId, setIntervalId] = useState([]);

  const handleStart = () => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    setIntervalId([...intervalId, interval]);
  };

  const handleStop = () => {
    intervalId.forEach((interval) => clearInterval(interval));

    setIntervalId([]);
  };

  // ------------------------------------------------------------

  const [text, setText] = useState('Domyślny tekst');

  // useEffect(() => {}) - wykonaj się po KAŻDEJ ZMIANIE stanu komponentu

  useEffect(() => {
    //... wykonaj ten kod

    console.log('Zmieniono stan komponentu');
  });

  // useEffect(() => {}, []) - wykonaj się TYLKO RAZ po zamontowaniu komponentu

  useEffect(() => {
    //... wykonaj ten kod

    console.log('Zamontowano komponent');

    // handleStart();
  }, []);

  // useEffect(() => {}, [count]) - wykonaj się PO KAŻDEJ ZMIANIE stanu count

  useEffect(() => {
    //... wykonaj ten kod

    console.log('Zmieniono stan count');

    if (count > 5) {
      handleStop();

      setText('Zatrzymano licznik - wynik maksymalny to 5');
    }
  }, [count]);

  // useEffect(() => {}, [count, text]) - wykonaj się PO KAŻDEJ ZMIANIE stanu count LUB text

  // useEffect(() => {

  //   //... wykonaj ten kod

  //   console.log('Zmieniono stan count');

  // }, [count, text]);

  return (
    <div>
      <div>{count}</div>

      <div>{text}</div>

      <button onClick={handleStart}>Dodaj</button>

      <button onClick={handleStop}>Stop</button>

      <ReactInterval />
    </div>
  );
};

const ReactInterval = () => {
  const [intervalCount, setIntervalCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntervalCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [intervalCount]);

  return <div>{intervalCount}</div>;
};
