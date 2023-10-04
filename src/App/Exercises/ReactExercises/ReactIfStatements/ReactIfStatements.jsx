import {useState} from 'react';
import './style.css';

export function ReactIfStatements() {

  const [text, setText] = useState('');
  const [clickedCount, setClickedCount] = useState(0);
  
  function handleClick() {
    const newClickedCount = clickedCount + 1;
    // if (warunek) {
    //   kod wykonywany jeśli warunek jest spełniony
    // } else {
    //   kod który zostanie wykonany jeśli warunek niespełniony
    // }

    if (newClickedCount >= 5) {
      setText('Kliknięto przycisk 5 lub więcej razy!')
    } else {
      setText('Kliknięto przycisk mniej niż 5 razy')
    }
    
    setClickedCount(newClickedCount);
    ;
  }

  return (
    <div>
      <h1>React If Statements</h1>
      <button onClick={handleClick}>Kliknij mnie!</button>
      <p className="test">{text}</p> 
      {
        clickedCount > 15 && (
        <p>Ilość kliknięć: {clickedCount}</p>
      )}     
      
    </div>
  );
}