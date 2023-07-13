import React from 'react';

import './style.css';

export function Cwiczenie1() {
  const [state, setState] = React.useState('placeholder');
  function handleSubmit(e) {
    e.preventDefault();

    const inputText = e.target[0].value;
    console.log(e);
    console.log(inputText);
    setState(inputText)
  }

  return (
    <div>
      <h1>cześć</h1>
      <div className='columns'>

        <form onSubmit={handleSubmit}>
          <label>wpisz tekst</label>
          <input type="text" id='text' placeholder='Tu wpisz tekst' />
          <button type="submit" >Kliknij mnie</button>
        </form>
        <p>{state}</p>
      </div>

    </div>
  );
}
