import React from 'react';

import './style.css';
import { Form } from 'react-router-dom';

export function MoreOrLess() {
  const [text, setText] = React.useState('false');

  function handleOnChange(event) {
    const text = event.target.value;
    console.log(text);
    //   setText(text);
    if (text > 10) {
      setText(true);
    } else {
      setText(false);
    }
  }

  return (
    <div className="columns">
      <h2>Czy A jest większe od 10</h2>

      <input type="number" placeholder="A" onChange={handleOnChange}></input>
      <p>{text ? 'tak' : 'nie'}</p>
    </div>
  );
}
