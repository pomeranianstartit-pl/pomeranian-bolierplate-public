import {useState} from 'react';

import './style.css';

function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

export function ReactGuessNumber() {

  const [randomNumber, setRandomNumber] = useState(generateRandomNumber())
  const [inputNumber, setInputmNumber] = useState(0)
  const [text, setText] = useState('')  

  function handleChange(event) {    
    setInputmNumber(event.target.value);
    console.log(typeof(inputNumber))
  }

  function handleClickStart () {    
    if (inputNumber.length==0) {
      setText("nic nie wpisałeś/aś")}
      else {
      if (inputNumber < randomNumber) {
        setText('Jestem Większa')
      } else if (inputNumber > randomNumber) {
        setText('Jestem Mniejsza')
      } else {
        setText('Gratulacje, trafiaś/eś')
      }
      console.log(randomNumber, "randomnumber")
      console.log(inputNumber, "input number")
    }
  }
      
  function handleClickReset () {
    setRandomNumber(generateRandomNumber())
    console.log(randomNumber)
  }

  return (
    <div id="frame">
      <h2>Jaką jestem liczbą?</h2>
      <button id="startButton"onClick={handleClickStart}>START</button>
      <div>
        <input 
        onChange={handleChange}
        type="number"
        value={inputNumber}
        placeholder='Wpisz liczbę pomiędzy 1 a 10'/>
        </div>
      <p>{text}</p>
      <button onClick={handleClickReset}>RESET</button>
    </div>
  );
}
