import './styles.css';
import { useState, useEffect } from "react";

export const SetTimeout = () => {


  const [value, setValue] = useState(0)


  function handleOnClick() {
    setValue(value + 1)
  }

  function callBack() {
    console.log('jestem funkcja efekt callback');
    setValue(value + 1)
  }
  useEffect(callBack, [])
  console.log('pierwsza wiadomosc', value);
  return (
    <div>
      <h1> useEffect, setTimeout, setInterval</h1>
      <p>{value}</p>
      <button onClick={handleOnClick}>zwieksz wartosc</button>

    </div>
  );
};