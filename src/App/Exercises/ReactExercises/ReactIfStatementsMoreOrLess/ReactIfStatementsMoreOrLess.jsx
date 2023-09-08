import React, { useState } from 'react';

// import './style.css';

export function ReactIfStatementsMoreOrLess() {
  const [inputValue, setInputValue] = useState(0);
  // const [text, setText] = useState('start');
  const handleChange = (event) => {
    const newValue = event.target.value;
    // w tym konkretnie miejscu event ma taka wartość
    setInputValue(newValue);
    // if (newValue > 10) {
    // const newText = `liczba ${newValue} większa od 10`;
    // setText(newText);
    // } else {
    // setText('za mala liczba');
    // }
  };
  const visible = inputValue > 5;
  //console.log(inputValue);
  // podaje w consoli kazda wprowadzona wartosc bo dzialan=my onChange - na zmianie
  return (
    <div>
      <input type="number" onChange={handleChange} value={inputValue} />

      {/* 1 sposob na if wewnatrz jsx - skrócony if */}
      {/* {inputValue < 10 ? 'warunek spelniony' : 'warunek nie jest spelniony'} */}

      {/* 2 sposob na if wewnatrz jsx - conditional rendering */}
      {/* {inputValue < 10 && 'warunek spelniony'} */}
      {/* {inputValue >= 10 && 'warunek niespelniony'} */}

      {/* przykladowy conditional rendering dla widocznosci elementu */}
      {visible && 'wyrenderuj mnie jesli visible jest true'}
      {/* <div>{text}</div> */}
    </div>
  );
}
