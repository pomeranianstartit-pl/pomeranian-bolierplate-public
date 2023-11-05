import { JsFunctionParams } from './JsFunctionParams';

export function JsFunctionBasics() {
  function functionName(parameter1, parameter2) {
    return (parameter1 + parameter2) / 2;
  }

  const arrowFunction = (parameter1, parameter2) => {
    Math.sqrt(parameter2 * parameter1);
  };

  function modify(liczba) {
    return liczba * 2;
  }

  const tablica = [1, 3].map(modify);

  const tablica2 = [3, 2, 6].map(function (liczba) {
    // console.log('Hello Tablica 3');
    return liczba * 3;
  });

  const tablica3 = [0, 2, 10].map((liczba) => {
    return liczba * 3;
  });

  const tablica4 = [100, 10, 20].map((liczba) => liczba * 4);

  const zwracaObiekt = () => ({ name: 'Karol' });

  function funkcjaZewnętrzna() {
    function funkcjaWewnętrzna() {
      console.log('To jest funckja wewnętrzena.');
    }
    return funkcjaWewnętrzna;
  }
  const wew = funkcjaZewnętrzna();
  wew();

  console.log(tablica, 'wynik tablica');
  console.log(tablica2, 'wynik tablica2');
  console.log(tablica3, 'wynik tablica3');
  console.log(tablica4, 'wynik tablica4');
  console.log(zwracaObiekt, 'wynik obiekt');

  const noVowels = (str) => {
    const arr = [];
    for (const letter of str) {
      if (!['a', 'e', 'u', 'i', 'o'].includes(letter)) {
        arr.push(letter);
      }
    }
    return arr.join('');
  };

  console.log(
    'statement without Vowels,',
    noVowels('statement without Vowels')
  );

  return (
    <div>
      <h1>JS Function Basics</h1>
      <ul>
        <li>functionName, wynik: {functionName(44, 66)}</li>
        <li>arrowFunction, wynik: {arrowFunction(44, 66)}</li>
        <li>Zwraca obiekt, obiekt: {zwracaObiekt}</li>
        <li>AnonymousFunction</li>
        <li>
          <button onClick={wew}>Kliknij</button>
          <JsFunctionParams name="Jan" surname="Kowalski" />
        </li>
      </ul>
    </div>
  );
}
