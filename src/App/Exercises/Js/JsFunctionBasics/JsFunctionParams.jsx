export const JsFunctionParams = ({ name, surname }) => {
  //   console.log('JsFunctionParams props:', props);
  //   console.log('JsFunctionParams props.name', props?.name);
  //   const { name, surname } = props;
  console.log('JsFunctionParams destruktutyzacja', name, surname);

  const suma = (a, b) => {
    console.log('Parametry sumy:', a, b);
    return a + b;
  };

  const pomnozDodajWiele = (mnoznik, ...rest) => {
    // console.log('rest', rest);
    const suma = rest.reduce((prev, curr) => prev + curr, 0);
    // console.log('suma reduce', suma);
    return mnoznik * suma;
  };
  console.log('pomnozDodajWiele', pomnozDodajWiele(2, 1, 1, 1, 115));

  const domyslnaWartosc = (mnoznik, inna, liczba = 4) =>
    mnoznik * liczba + inna;
  console.log('funkcja z domyslna wartoscia', domyslnaWartosc(2, 3));

  function funkcjaArguments() {
    console.log('funkcjaArguments, arguments', arguments[0] * arguments[1]);
  }
  funkcjaArguments(7, 2, 5, 6);

  //   wartość a referencja
  const a = 4;
  const b = 4;
  console.log('Czy a = b', a === b);
  const obj1 = { a: 4 };
  const obj2 = { a: 4 };
  const obj3 = obj2;

  console.log('Czy obj1 = obj2', obj1 === obj2);
  console.log('Czy obj3 = obj2', obj3 === obj2);
  obj3.a = 77;
  console.log('obj3, obj2, obj1, po zmianie', obj1, obj2, obj3);

  const dodaj = (objekt, liczba) => {
    // unikamy
    objekt.value = liczba + 10;
    // unikamy
    liczba = 200;
  };

  const test0 = { value: 100 };
  let l0 = 10;
  console.log('test0 przed', test0, l0);
  dodaj(test0, l0);
  console.log('test0 po', test0, l0);

  return (
    <div>
      <h2>Parametry funkcji</h2>
      <p>wywołanie funkcji z parametrami {suma(1, 2)}</p>
      <p>wywołanie funkcji za dużo parametrów {suma(1, 2, 3)}</p>
      <p>wywołanie funkcji za mało parametrów {suma(1)}</p>
      <p>Różnica pomiędzy ..arg vs. arguments</p>
      <p>Wartość a referencja</p>
    </div>
  );
};
