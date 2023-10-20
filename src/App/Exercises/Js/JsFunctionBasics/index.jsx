import { JsFunctionParams } from './JsFunctionParams';

export function Exercise() {
  // Named function
  function nazwaFuncji(a, b) {
    return a * b;
  }
  // Lambda/ funkcja strzałkowa
  const funkcjaStrzalkowa = (a, b) => {
    return a * b;
    // console.log('Hello!!!!!!')
  };

  const wyniki1 = nazwaFuncji(1, 3);
  const wyniki2 = funkcjaStrzalkowa(1, 2);
  console.log('wyniki funkcji: ', wyniki1, wyniki2);

  // przykład wykorzystania funkcji anonimowej
  const tablica = [1, 2].map(function (liczba) {
    return liczba * 5;
  });
  console.log('tablica: ', tablica);

  // arrow function
  const tablica2 = [3, 2, 1].map((liczba) => {
    return liczba * 3;
  });
  console.log('tablica2: ', tablica2);

  //
  const tablica3 = [4, 3, 2, 1].map((liczba) => liczba * 4);
  console.log('tablica3: ', tablica3);

  const prostaFunkcja = () => {};
  console.log('każda funkcja coś zwraca', prostaFunkcja());

  const zwracaObiekt = () => ({ name: 'Karol' });
  console.log('zwraca Obiekt', zwracaObiekt());

  function funkcjaZewnetrzna() {
    function funkcjaWewnetrzna(params) {
      console.log('To jest wewnętrzna');
    }
    return funkcjaWewnetrzna;
  }
  const wew = funkcjaZewnetrzna();
  wew();

  const imie = 'Piotr';

  return (
    <div>
      <h2>Funkcje podstawy</h2>
      <ul>
        <li>Named function, wynik {nazwaFuncji(1, 2)} </li>
        <li>Arrow function/lambda {funkcjaStrzalkowa(1, 2)}</li>
        <li>Anonimowe funkcje</li>
      </ul>
      <button onClick={wew}>Kliknij</button>
      <JsFunctionParams name={imie} surname="Kowalski" />
    </div>
  );
}
