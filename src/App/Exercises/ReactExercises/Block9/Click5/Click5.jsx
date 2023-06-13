import './styles.css';
import { useState } from 'react';

export const Click5 =() => {
  const [click, setClick] = useState(0);
  const [message, setMessage] = useState('');
  
  function clickhandler() {
    let currentClick = click;
    setClick(currentClick + 1);
  

    if (currentClick + 1 >= 5) {
      setMessage(`Gratulacje`)
    }

      else {
        setMessage(`Kliknięto ${currentClick +1} razy`)
      }
    }
      
    
  
  return (
    <div>
      <h2>Kliknij5</h2>
      <button 
        className='btn' 
        onClick={clickhandler}>
        {'START'}

      </button>
      <h4>{message}</h4>
    </div>);

};
