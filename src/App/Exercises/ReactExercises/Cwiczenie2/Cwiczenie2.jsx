import React from 'react';
import './style.css';
export function Cwiczenie2() {
  const [counter, setCounter] = React.useState(0);

  function handleClick() {
    // bierze poprzedni stan (counter) i zwieksza go o 1
    setCounter(counter + 1);

    // setCounter przechowuje w sobie poprzedni/aktualny state (counter)
    // setCounter((prev) => prev + 1);
  }

  return (
    <div className="cwiczenie2">
      <h2>Cześć!</h2>
      <button onClick={handleClick}>
        {/* {`Kliknięto we mnie ${counter} ${counter === 1 ? 'raz' : 'razy'}`} */}
        Kliknięto we mnie {counter} {counter === 1 ? 'raz' : 'razy'}
      </button>
    </div>
  );
}

// najczęściej używane event handlery
// onClick w buttonach
// onChange w inputach
// onSubmit, onReset w formach

// logic ?(if true) :(else)

// 1 === 1  true
// '1' === 1 false
// 1 == 1 true
// '1' == 1 true

// "1" + "1" = 11
// 1 + "1" = 11

// === sprawdza wartość i element
