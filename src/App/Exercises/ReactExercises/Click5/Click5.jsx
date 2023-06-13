import { useState } from 'react';
import './styles.css';

export const Click5 = () => {

  const [click, setClick] = useState (0);
  const [message, setMessage] = useState (``);

  function clickHandler() {
    let currentClick = click;
    setClick(currentClick +1);
  
    if(currentClick+1 >=5) {setMessage (`Gratulacje!`);} else {setMessage (`Klieknieto ${currentClick +1} razy`);
      

    } 
  }

  return <div>
    <h1>Kliknij</h1>
      <button className='btn' onClick={clickHandler}> {`START`}</button>
      <h2>
        {message}
      </h2>
  </div>;
};
