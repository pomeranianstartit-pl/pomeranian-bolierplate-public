import React from 'react';

import './style.css';

export function Cwiczenie1() {
  const [state, setState] = React.useState('');
  function handleSubmit(e) {
    const inputText = e.target.value;
    console.log(e);
    console.log(inputText);
    setState(inputText)
  }

  return (
    <div>
      <h1>cześć</h1>
      <div className='columns'>

        <form>
          <label>wpisz tekst</label>
          <input onChange={handleSubmit} type="text" id='text' placeholder='Tu wpisz tekst' />
        </form>
        <p>{state}</p>
      </div>

    </div>
  );
}
