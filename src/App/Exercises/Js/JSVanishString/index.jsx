import { useState } from 'react';

export const VanishString = () => {
  // const [timer, setTimer] = useState(0);
  const [show, setShow] = useState(false);
  const text = 'trzysekundowy napis';
  function ShowText() {
    if (show) {
      return;
    }
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2999);
  }

  return (
    <div>
      <h3>Vanish String Exercise</h3>
      <button onClick={ShowText}>Pokaż napis na 3 sekundy</button>
      {show && <div>{text}</div>}
    </div>
  );
};
