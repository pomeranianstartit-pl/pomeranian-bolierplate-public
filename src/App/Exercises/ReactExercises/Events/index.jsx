import React, { useState } from 'react';

import './style.css';

//1. Dodać element <button>
//2. Import useState z React
//3. Zadeklarowanie zmiennej która będzie przetrzymywać zmienna stanu
//4. Zadeklarowanie zmiennej która będzie funkcją zmieniającą stan
//5. Ostylować

export function Events() {
  const [text, setText] = useState('Nie kliknięto we mnie');
  const [counter, setCounter] = useState(0);

  //let text2 = 'Nie kliknięto we mnie 2';

  function handleOnClick() {
    setText('Kliknięto we mnie');

    if (counter >= 3) {
      return setCounter((counter) => counter + 2);
    }

    setCounter((counter) => counter + 1);
  }

  // Zwykła funkcja

  function name() {
    console.log('name1');
  }

  name();

  // Funkcja strzałkowa

  const name2 = () => {
    console.log('name2');
  };

  name2();

  return (
    <div>
      <h2>Cześć i czołem!</h2>
      <button className="events-button" onClick={handleOnClick}>
        <span>{text}</span> {counter > 0 && <span>{counter} razy</span>}
      </button>
    </div>
  );
}

// 1. Dodać nowy useState do liczenia kliknięć
//2. Inkrementować nową zmienną counter po każdym kliknięciu
// 3. wyświertlić
// ad1. const [counter, setCounter] = useState(0);
// ad2. function handleOnClick() {
//  setText('Kliknięto we mnie');
//  setCounter((counter) => counter + 1);
//ad3.
//{counter > 0 ? `${text} ${counter} razy` : text}   TO TO SAMO CO <span>{text}</span> {counter > 0 && <span>{counter} razy</span>}
//to pierwsze to zapis w JS a drugie w React

//Funkcje warunkowe ---> if(counter >=3) {setCounter((counter) ==> counter + 2);
//else {setCounter((counter) ==> counter + 1)}}

//function handleOnClick() {
//setText('Kliknięto we mnie');

//if (counter >= 3) {
//return setCounter((counter) => counter + 2);
//}

//setCounter((counter) => counter + 1);

// If..else if..else
// if (counter >= 5) {
//   setCounter((counter) => counter + 2);
// } else if (counter >= 3) {
//   setCounter((counter) => counter + 3);
// } else {
//   setCounter((counter) => counter + 1);
// }

// Ternary operator
// counter >= 3
//   ? setCounter((counter) => counter + 2)
//   : setCounter((counter) => counter + 1);

// if..else
// if (counter >= 3) {
//   setCounter((counter) => counter + 2);
// } else {
//   setCounter((counter) => counter + 1);
// }

// if + if
// if (counter < 3) {
//   //         początkowa   początkowa + 1
//   setCounter((counter) => counter + 1);
// }
