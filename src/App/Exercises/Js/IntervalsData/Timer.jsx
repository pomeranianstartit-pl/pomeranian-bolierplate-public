import { useState } from 'react';

// setInterval():
// Jest używane do cyklicznego wykonywania pewnych operacji w określonych odstępach czasu, np. do aktualizacji zawartości strony co kilka sekund.
export const Timer = () => {
  const [showText, setShowText] = useState(false);
  const [intervalTimeoutId, setIntervalTimeoutId] = useState(null);
  const [setTimeoutId, setSetTimeoutId] = useState(null);

  const handleClick = () => {
    setShowText(true);

    setIntervalTimeoutId(
      setInterval(() => {
        console.log('test');
        setShowText((prevState) => !prevState);
      }, 1000)
    );
  };

  const handleClickClear = () => {
    clearInterval(intervalTimeoutId);
  };

  const handleClickSetTimeout = () => {
    setIntervalTimeoutId(
      setSetTimeoutId(
        setTimeout(() => {
          alert('Po jednej sekundzie wyświetlony zostanie alert!!');
        }, 1000)
      )
    );
  };

  const handleClickClearSetTimeout = () => {
    clearTimeout(setTimeoutId);
  };

  return (
    <div>
      {/* setInterval */}
      <button onClick={handleClick}>Wyswietl napis</button>
      <button onClick={handleClickClear}>ClearInterval</button>

      {/* setTimeout */}
      <button onClick={handleClickSetTimeout}>setTimeout button</button>
      <button onClick={handleClickClearSetTimeout}>
        clear setTimeout button
      </button>
      {showText && <div>Hej jestem napisem!!</div>}
    </div>
  );
};
