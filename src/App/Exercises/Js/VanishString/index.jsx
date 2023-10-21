import { useState, useEffect } from 'react';

export const VanishString = () => {
  const [count, setCount] = useState(0);

  const [intervalId, setIntervalId] = useState([]);

  const handleStart = () => {
    setText('tekst wyswietlany przez 5 sekund');
    useEffect(() => {
      const interval = setInterval(() => {
        setIntervalCount((prevCount) => prevCount + 1);
      }, 1000);
      if (interval > 5) {
        // handleStop();
        setText('');
      }
      return () => clearInterval(interval);
    }, [intervalCount]);
  };

  const handleStop = () => {
    intervalId.forEach((interval) => clearInterval(interval));

    setIntervalId([]);
  };

  // ------------------------------------------------------------

  const [text, setText] = useState('');

  // useEffect(() => {}) - wykonaj się po KAŻDEJ ZMIANIE stanu komponentu

  useEffect(() => {
    //... wykonaj ten kod

    console.log('Zmieniono stan komponentu');
  });

  useEffect(() => {
    console.log('Zamontowano komponent');
  }, []);

  // useEffect(() => {}, [count]) - wykonaj się PO KAŻDEJ ZMIANIE stanu count

  // useEffect(() => {
  //   console.log('Zmieniono stan count');

  //   if (count > 5) {
  //     handleStop();
  //     setText('');
  //   }
  // }, [count]);
  const [intervalCount, setIntervalCount] = useState(0);

  return (
    <div>
      <div>{count}</div>

      <div>{text}</div>

      <button onClick={handleStart}>Dodaj</button>

      {/* <button onClick={handleStop}>Stop</button> */}

      {/* <ReactInterval /> */}
    </div>
  );
};

const ReactInterval = () => {
  const [intervalCount, setIntervalCount] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setIntervalCount((prevCount) => prevCount + 1);
    }, 1000);
    if (interval > 5) {
      // handleStop();
      setText(text);
    }
    return () => clearInterval(interval);
  }, [intervalCount]);

  // return <div>{intervalCount}</div>;
};
