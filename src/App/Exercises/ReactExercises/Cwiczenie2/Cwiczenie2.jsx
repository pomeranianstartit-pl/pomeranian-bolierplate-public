import React from 'react';




import './style.css';




export function Cwiczenie2() {

  const [klikniec, setKlikniec] = React.useState(0);

   function handleOnClick(event) {

    event.preventDefault();

      setKlikniec(klikniec + 1);

  }

    return (

    <div className="blok-8__cwiczenie-2">

      <h1>Cześć!</h1>

    <button type="button" onClick={handleOnClick}>Kliknięto mnie {klikniec} razy</button>

    </div>

  );

}