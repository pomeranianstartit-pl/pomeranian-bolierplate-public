import React from 'react';

import './style.css';

export function MoreOrLess() {
  const [text, setText] = React.useState('true');
  function handleOnChange(e) {

    let inputNo = e.target.value

    console.log(inputNo)
    if (inputNo < 10) {
      setText(false)
    }
    else {
      setText(true)
    }
    console.log(text)

  }

  return (
    <div>
      <div className='columns'>

        <form>
          <label>Co jest większe od 10</label>
          <input onChange={handleOnChange} type="number" id='number' placeholder='A' />
        </form>
        <p>Odpowiedż {text ? 'Yes' : 'No'}</p>
      </div>

    </div>
  );
}
