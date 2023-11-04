//import './styles.css';

import { JsFunctionParams } from './JsFunctionParams';

export const JsFunctionBasics = () => {
  // Named function
  function nazwaFunkcji(a, b) {
    return a * b;
  }

  // Lambda/ funkcja strzałkowa
  const funkcjaStrzalkowa = (a, b) => {
    return a * b;
    // console.log('Hello!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  };

  const wynik1 = nazwaFunkcji(1, 3);
  const wynik2 = funkcjaStrzalkowa(1, 2);
  console.log('Wyniki funkcji: ', wynik1, wynik2);

  // przykład wykorzystania funkcji anonimowej
  const tablica = [1, 2].map(function (liczba) {
    return liczba * 5;
  });
  console.log('tablica: ', tablica);

  // arrow function
  const tablica2 = [3, 2, 1].map((liczba) => {
    return liczba * 3;
  });
  console.log('tablica2:', tablica2);

  const tablica3 = [4, 3, 2, 1].map((liczba) => liczba * 4);
  console.log('tablica3:', tablica3);

  const prostaFuncja = () => {};
  console.log('każda funkcja coś zwraca', prostaFuncja());

  const zwracaObiekt = () => ({ name: 'Karol' });
  console.log('zwraca obiekt', zwracaObiekt());

  function funkcjaZewnętrzna() {
    function funkcjaWewnętrzna() {
      console.log('To jest wewnętrzna');
    }
    return funkcjaWewnętrzna;
  }

  const wew = funkcjaZewnętrzna();
  wew();

  return (
    <div>
      <h1>Funkcje podstawy</h1>
      <ul>
        <li>Named function, wynik {nazwaFunkcji(1, 2)}</li>
        <li>Arrow function/lambda {funkcjaStrzalkowa(1, 2)}</li>
        <li>Anonimowe funkcje</li>
      </ul>
      <button onClick={wew}>Kliknij</button>
      <JsFunctionParams />
    </div>
  );
};
