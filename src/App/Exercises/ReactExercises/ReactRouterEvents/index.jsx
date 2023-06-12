import React from 'react';
import { useState } from 'react';

import './style.css';

export function ReactRouterEventsJS() {
  const [getCount, setCount]=useState (0)
  function handleClick(){
    return; //console.log("jestem kliknietem buttonem");
  }

  function handleOnChangeInput(event){
    const inputValue = event.target.value; 
    return; //console.log (`Wprowadzona cos`, inputValue);
  }

  function handleIncrement () {
    setCount(getCount +1);
  }

  function handleDecrement () {
    setCount(getCount -1);
  }

  return (
    
    <div className='form--container'>
      <h1> Czesc! </h1>
       <label for="textInput">Wpisz Tekst</label>
  <input type="text" id="textInput" name="textInput" placeholder='Tekst do wpisania'
  onChange= {handleOnChangeInput}/>
  



  <div className='counter --container'> 
    <p>Licznik: {getCount}</p>
      <input onClick={handleIncrement} type="button" value={getCount === 0 ? `Kliknieto we mnie ${getCount} razy`
      : `Super! Klieknieto we mnie ${getCount} razy`}/>
      <input onClick={handleDecrement} type="button" value="Decrement"/>
  </div>
    </div>
  );
}
