import { useState } from 'react';

export const VanishString = () => {
  // const [timer, setTimer] = useState(0);
  const [show, setShow] = useState(false);
  const [text, setTest] = useState('');
  function ShowText() {
    if (show) {
      return;
    }
    setShow(true);
    setTest('Trzysekundowy napis');
    setTimeout(() => {
      setShow(false);
      setTest('');
    }, 1000);
  }

  return (
    <div>
      <h3>Vanish String Exercise</h3>
      <button onClick={ShowText}>Pokaż napis na 3 sekundy</button>
      {show && <div>Trzysekundowy napis</div>}
      <div>{text}-- text po raz drugi</div>
    </div>
  );
};
