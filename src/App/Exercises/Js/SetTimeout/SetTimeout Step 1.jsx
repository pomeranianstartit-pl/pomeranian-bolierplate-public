import './styles.css';
import { useState } from "react";

export const SetTimeout = () => {


  const [value, setValue] = useState(0)
  console.log('pierwsza wiadomosc', value);

  function handleOnClick() {
    setValue(value + 1)
  }

  return (
    <div>
      <h1> useEffect, setTimeout, setInterval</h1>
      <p>{value}</p>
      <button onClick={handleOnClick}>zwieksz wartosc</button>

    </div>
  );
};