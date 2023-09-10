import { useEffect, useState } from 'react';

import './styles.css';

export const VanishString = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleOnClick = () => {
    setIsVisible(true);
  };
  useEffect(() => {
    let id;
    if (isVisible === true) {
      id = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
    return () => clearTimeout(id);
  }, [isVisible]);

  // export const SetTimeout = () => {
  //   const [value, setValue] = useState(0);
  //   const [counter, setCounter] = useState(0);
  //   const [timeoutId, setTimeoutId] = useState();
  //   const [intervalId, setIntervalId] = useState();
  //   const [message, setMessage] = useState('');
  //   const handleOnClick = () => {
  //     clearTimeout(timeoutId);
  //     const id = setTimeout(() => setValue((prevValue) => prevValue + 1), 2000);
  //     setTimeoutId(id);
  //   };

  return (
    <>
      <div>
        <button onClick={handleOnClick}>Pokaż Tekst</button>
      </div>

      {isVisible && <div> NAPIS: </div>}
    </>
  );
};
