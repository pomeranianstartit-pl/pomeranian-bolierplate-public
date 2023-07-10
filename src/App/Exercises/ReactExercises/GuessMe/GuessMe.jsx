import React, { useState } from 'react';

import './style.css';

export function GuessMe() {
  const [liczba, setLiczba] = useState();
  const [randomNumber, setRandomNumber] = useState();

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1)
    console.log(randomNumber)
    console.log(`liczba to ${liczba}`)
  };



  const handleOnChange = (event) => {
    let inputValue = event.target.value;
    setLiczba(inputValue++);
  };

  return (
    <div>
      <h1>Jaką jestem liczbą?</h1>
      <p> jestem liczbą: {randomNumber}</p>
      <button className="startButton" onClick={generateRandomNumber}>START</button>
      <br></br>
      <input placeholder="A"type="number" value={Number(liczba)} onChange={handleOnChange}></input>
      <p>
        {randomNumber > liczba && 'Jestem większa'}
        {randomNumber < liczba && 'Jestem mniejsza'}
        {liczba == randomNumber && 'Gratulacje!'}
      </p>
      <br></br>
      <button className="resetButton"onClick={generateRandomNumber}>RESET</button>
    </div>
  );
}
