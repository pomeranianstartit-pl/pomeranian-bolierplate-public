import { useState } from 'react';

export function ReactEventsUseState() {
  const test = 'test'; // string wyswietrlany na www
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('Placeholder');
  // sami określamy nazwę zmiennej i funkcji, która będzie aktualizować ustawioną wartość
  // np:
  //   const [visibile, setVisible] = useState(true); w nawiasie pierwsza początkowa wartość

  // deklaracja funkcji:
  const handleClick = (event) => {
    // event to czekanie na iterakcje z uzytkownikiem
    // event -> obiekt zdarzenia, SyntheticBaseEvent wyświetlany w konsoli zawiera duzo inf - np:
    //... target - button, type - click, react name - onClick:
    console.log('coś zostało kliknięte!!', event);
  };
  // w 'e' przechowujemy info o wartosci wprowadzanej w inpucie (dokladnie e.target.value)
  const handleChange = (e) => {
    // e -> obiekt zdarzenia (event)
    // e.target -> element, który wywołał zdarzenie
    // e.target.value -> wartość elementu, który wywołał zdarzenie
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  // poniźej funkcj ktora sprawdza wartosc 'count' i po kliknięciu (bo count to button onClick) dodaje do count 1:
  const handleCountClick = () => {
    // setCount -> funkcja aktualizująca wartość zmiennej count
    setCount(count + 1);
    console.log('wartość licznika ' + count);
  };

  return (
    <div>
      {/* Wyświetlenie wartości przypisanej do zmiennej poprzez uzycie wąsów {} w kodzie JSX */}
      <div>Test zmienna: {test}</div>
      <div>useState count: {count}</div>
      {/* w reakcie  dajemy przedrostek 'on' - onClick - na klinięciu, poprzez wąsy {} informujemy o tym, e tu będzie kod java scriptowy */}
      <button onClick={handleCountClick}>Zwiększ o jeden</button>
      {/* ----------------------------- */}
      <h1>Cześć!</h1>
      <p>Wpisz tekst</p>
      {/* w 'e' przechowujemy info o wartosci wprowadzanej w inpucie: */}
      <input type="number" value={inputValue} onChange={handleChange} />

      {/* wywołanie funkcji - dopiero na kliknięciu wywoływana jest funkcja, a nie od razu gdy pojawiła się w kodzie */}
      {/* wywołanie funkcji jak damy '()' to funkcja wywoła się ju w trakcie renderowania a nie po kliknięciu */}
      <button onClick={handleClick}>Reset</button>
      {/* Linia 13 jest adekwatna z linią 11 */}
      {/* <button onClick={(event) => handleClick(event)}>Kliknij</button> */}

      {/* <input onChange={handleChange} /> */}

      <p>{inputValue} - tutaj będzie wpisany nasz tekst</p>
    </div>
  );
}
