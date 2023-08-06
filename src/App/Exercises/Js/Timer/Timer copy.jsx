/* eslint-disable prettier/prettier */
import './styles.css';
import { useState, useEffect } from 'react';

// export const Timer = () => {
// const [value, setValue] = useState(0);
// const [progress, setProgress] = useState(10)


// function handleOnClick() {
//   setValue(value + 1)
// }


// useEffect(() => {
//   console.log('efekt callabck')
//   const id = setTimeout(() => {
//     console.log('zwiekszam progress po czasie'); setProgress(value)
//   }, 1000);

//   return () => {
//     console.log('sprzatam');
//     clearTimeout(id);
//   }
// },
//   [value]
// )

// console.log('pierwsza wiadomosc', value, progress);

export const Timer = () => {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(10)


  function handleOnClick() {
    setValue(value + 1)
  }


  useEffect(() => {
    console.log('efekt callabck')
    const id = setInterval(() => {
      console.log('zwiekszam progress po czasie', value, progress); setProgress(progress)
    }, 1000);

    return () => {
      console.log('sprzatam');
      clearInterval(id);
    }
  },
    [value, progress]
  )

  console.log('pierwsza wiadomosc', value, progress);
  return (
    <div>
      <h1>useEffect, setTimeout, setInterval</h1>
      <p>Value: {value} Progress: {progress}</p>
      <button onClick={handleOnClick}>Kliknij</button>
      <div style={{ background: 'red', width: progress }}>.</div>
    </div>
  );
};
