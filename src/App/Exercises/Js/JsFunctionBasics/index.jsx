import { JsFunctionParam } from './JsFunctionsParams';
import './styles.css';

export const Exercise = () => {
  //Named function
  function nazwaFunkcji(a, b) {
    return a * b;
  }
  //lambda /funkcja strzałkowa
  const funkcjastrzałkowa = (a, b) => {
    return a * b;
  };
  const wynik1 = nazwaFunkcji(1, 3);
  const wynik2 = funkcjastrzałkowa(1, 2);
  console.log('wynik  funkcji: ', wynik1, wynik2);

  const tablica = [1, 2].map(function (liczba) {
    return liczba * 5;
  });
  console.log('tablica', tablica);

  const tablica2 = [3, 2, 1].map((liczba) => {
    return liczba * 3;
  });
  console.log('tablica2', tablica2);

  const tablica3 = [4, 3, 2, 1].map((liczba) => liczba * 4);

  console.log('tablica3', tablica3);

  const prostaFunkcja = () => {};
  console.log('każda funkcja coś zwraca', prostaFunkcja());

  const zwracaObiekt = () => ({ name: 'Karol' });
  console.log('zwraca obiekt ', zwracaObiekt());

  function funkcjaZewnetrza() {
    function funkcjaWewnetrzna() {
      console.log('To jest wewnętrzna');
    }
    return funkcjaWewnetrzna;
  }

  const wew = funkcjaZewnetrza();

  wew();
  const imie = 'Piotr';

  return (
    <div>
      <h1>Funkcje podstawy</h1>
      <ul>
        <li>Named function,wynik {nazwaFunkcji(1, 2)}</li>
        <li>Arrow function/lambda {funkcjastrzałkowa(1, 2)}</li>
        <li>Anonimowe funkcje</li>
      </ul>
      <button onClick={wew}>Kliknij</button>
      <JsFunctionParam name={imie} surname="Kowalski" />
    </div>
  );
};
