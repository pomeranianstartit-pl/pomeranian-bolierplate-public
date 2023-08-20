import { useState } from 'react';

export function ReactEventsUseState() {
  const test = 'test';
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('Placeholder');
  // sami określamy nazwę zmiennej i funkcji, która będzie aktualizować ustawioną wartość
  // np:
  //   const [visibile, setVisible] = useState(true);

  const handleClick = (event) => {
    // event -> obiekt zdarzenia
    console.log('coś zostało kliknięte!!', event);
  };

  const handleChange = (e) => {
    // e -> obiekt zdarzenia (event)
    // e.target -> element, który wywołał zdarzenie
    // e.target.value -> wartość elementu, który wywołał zdarzenie
    setInputValue(e.target.value);
  };

  const handleCountClick = () => {
    // setCount -> funkcja aktualizująca wartość zmiennej count
    setCount(count + 1);
  };

  return (
    <div>
      {/* Wyświetlenie wartości przypisanej do zmiennej poprzez uzycie wąsów {} w kodzie JSX */}
      <div>Test zmienna: {test}</div>
      <div>useState count: {count}</div>
      <button onClick={handleCountClick}>Zwiększ o jeden</button>
      {/* ----------------------------- */}
      <h1>Cześć!</h1>
      <p>Wpisz tekst</p>
      <input type="number" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Reset</button>
      {/* Linia 13 jest adekwatna z linią 11 */}
      {/* <button onClick={(event) => handleClick(event)}>Kliknij</button> */}
      <p>{inputValue} - tutaj będzie wpisany nasz tekst</p>
    </div>
  );
}
