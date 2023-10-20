export const JsFunctionParams = ({ name, surname }) => {
  // console.log('props', props);
  // console.log('propos.name', props?.name);
  // const {name, surname} = props;
  console.log('destrukturyzacja', name, surname);

  const suma = (a, b) => {
    console.log('Parametry sumy', a, b);
    return a + b;
  };

  // funkcja bez ograniczenia parametrów - rest
  const pomnozDodajWiele = (mnoznik, ...rest) => {
    // console.log('rest', rest);
    const suma = rest.reduce((prev, curr) => prev + curr, 0);
    // console.log('suma reduce', suma);
    return mnoznik * suma;
  };
  console.log('pomnozDodajWiele ', pomnozDodajWiele(2, 1, 1, 1, 3, 4, 5, 6));

  const domyslnaWartosc = (mnoznik, inna, liczba = 4) =>
    mnoznik * liczba + inna;
  console.log(domyslnaWartosc);

  // starego typu tylko z taka funkcją nie strzałkową
  function funkcjaArguments(a, b) {
    console.log(
      'funkcja funkcjaArguments, arguments',
      arguments[0] * arguments[1]
    );
  }
  funkcjaArguments(7, 2, 5, 6);

  //Wartość a referencja
  const a = 4;
  const b = 4;
  console.log('Czy a = b ?', a === b);

  const obj1 = { a: 4 };
  const obj2 = { a: 4 };
  const obj3 = obj2;
  console.log('Czy obj1 = obj2 ?', obj1 === obj2);
  console.log('Czy obj2 = obj3 ?', obj2 === obj3);

  obj3.a = 77;
  console.log('obj1, obj2, obj3, po zmianie', obj1, obj2, obj3);

  const dodaj = (obiekt, liczba) => {
    // unikamy zmiany wartości wewnątrz funkcji
    obiekt.value = liczba + 10;
    liczba = 200;
  };
  const testObjekt = { value: 100 };
  let lO = 10;
  console.log('testObjekt przed', testObjekt, lO);
  dodaj(testObjekt, 10);
  console.log('testObjekt po', testObjekt, lO);

  return (
    <div>
      <h2>Parametry funkcji</h2>
      <p>Wywołanie funkcji z parametrami {suma(1, 2)}</p>
      <p>za dużo parametrów {suma(1, 2, 3)}</p>
      <p>za mało parametrów {suma(1)}</p>
      <p>Różnica pomiędzy ...args vs. arguments</p>
      <p>Wartość a referencja</p>
    </div>
  );
};
