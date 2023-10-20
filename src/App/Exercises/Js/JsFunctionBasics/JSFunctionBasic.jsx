import { JsFunctionParams } from './JsFunctionParams';
import './styles.css';

export function JsFunctionBasics() {
  //named function
  function nazwaFunkcji(a, b) {
    return a * b;
  }
  // lambda funkcja stzrałkowa
  const funkcjaStrzalkowa = (a, b) => {
    return a * b;
  };

  const wynik1 = nazwaFunkcji(1, 3);
  const wynik2 = funkcjaStrzalkowa(1, 2);

  console.log('Wyniki funkcji: ', wynik1, wynik2);

  //Funkcja anonimowa

  const tablica = [1, 2].map(function (liczba) {
    return liczba * 5;
  });
  console.log('tablica: ', tablica);

  // arrow function anonimowa
  const tablica2 = [3, 2, 1].map((liczba) => {
    return liczba * 3;
  });
  console.log('tablica2: ', tablica2);

  const tablica3 = [4, 3, 2, 1].map((liczba) => liczba * 4);
  console.log('tablica3: ', tablica3);

  const prostaFunkcja = (liczba) => liczba * 4;
  [1].map((liczba) => liczba * 4);
  console.log('prosta funkcja: ', prostaFunkcja);

  const najprostszaFunkcja = () => {};
  console.log('kazda funkcja coś zwraca ', najprostszaFunkcja());

  // funkcja z obiektem
  const zwracaObiekt = () => ({ name: 'Ania' });
  console.log('funkcja zwraca obiekt', zwracaObiekt());

  function funkcjaZewnetrzna() {
    function funkcjaWewnetrzna() {
      console.log('To jest funkcja wewnętrzna');
    }
    return funkcjaWewnetrzna;
  }
  const wew = funkcjaZewnetrzna();
  wew();

  const imie = 'Piotr';

  return (
    <div>
      <h1>Funkcje podstawy - powtórka</h1>
      <ul>
        <li>Named function, wynik {nazwaFunkcji(1, 2)}</li>
        <li>Arrow function / lambda {funkcjaStrzalkowa(1, 2)}</li>
        <li>Anonimowe funkcje</li>
      </ul>
      <button onClick={wew}>Kliknij</button>
      <JsFunctionParams name={imie} surname="Kowalski" />
    </div>
  );
}
