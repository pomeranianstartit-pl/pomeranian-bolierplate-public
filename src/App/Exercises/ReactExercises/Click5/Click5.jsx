import { useState } from 'react';
import './styles.css';

export const Click5 = () => {

  const [click, setClick] = useState(0);
  const [message, setMessage] = useState();

  function clickHandler() {
    let currentClick = click;
    setClick(currentClick + 1);

    console.log(click);

    if (click%5 === 0 && click!=0){
      console.log("Gratulacje");
      setMessage("Gratulacje");
    }

    /*
    let myVar = 0;
      if (myVar > 1) {
        console.log('> 1');
      } else if(myVar === 0) {
        console.log('Zmienna = 0');
      }
      else if (myVar === 3) {
        console.log('Zmienna = 3');
      } else {
        console.log('reszta');
      }
      */
  }

  return (
    <div>
      <h1>Kliknij 5</h1>
      <button className="btn" onClick={clickHandler}>
        {'START'}
      </button>
      <h2>{message}</h2>
    </div>
  )
}
