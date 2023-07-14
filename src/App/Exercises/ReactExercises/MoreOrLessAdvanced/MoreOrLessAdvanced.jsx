import React from 'react';

import './style.css';

export function MoreOrLessAdvanced() {
  const [aIsGreater, setaIsGreater] = React.useState();
  const [bIsGreater, setbIsGreater] = React.useState();


  function handleOnChange1(e) {

    let aNo = e.target.value
    setaIsGreater(aNo)

  }

  function handleOnChange2(e) {

    let bNo = e.target.value
    setbIsGreater(bNo)

  }
  let text;
  if (aIsGreater > bIsGreater) {
    text = 'A jest większe'
  }
  else if (aIsGreater < bIsGreater) {
    text = 'B jest większe'
  }
  else {
    text = 'som takie same'
  }


  return (
    <div>
      <div className='columns'>

        <form>
          <label>Co jest większe od 10</label>
          <input onChange={handleOnChange1} type="number" id='number1' placeholder='A' />
          <input onChange={handleOnChange2} type="number" id='number2' placeholder='B' />
        </form>
        <p>Odpowiedż {text}</p>
      </div>

    </div>
  );
}
