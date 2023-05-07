import React from 'react';
import { useState } from 'react';
import './style.css';

export function Blok8() {
  const [iloscklikniec, setIlosc] = useState(0);

  function clickHandler() {
    // console.log('Kliknieto przycisk');
    // alert ('Kliknieto przycisk')
    setIlosc(iloscklikniec + 1);
  }
  return (
    <div>
      <h2>
        Cześć!
        {/* Nazywam się Roberto de Pacas-Jueves-Viernes-Trynidad-Escalceriia-Portoso-del-Santa-Ecclesia */}
      </h2>
      {/* <p>Przykładowy Route bloku 8</p> */}
      <button className="btn" onClick={clickHandler} type="button">
        {' '}
        Kliknieto mnie {iloscklikniec} razy.
      </button>
      {/* <p>
        (Napis)
        {wartosc * 2}
      </p> */}
    </div>
  );
}
