export const JsFunctionParam = ({ name, surname }) => {
  //przed destrukuryzacja const JsFunctionParam = (props)
  // console.log('JsFunctionsParam props', props);
  // console.log('JsFunctionsParam props.name', props?.name);

  // const { name, surname } = props;
  console.log('JsFunctionParams destrukturyzacja', name, surname);

  const suma = (a, b) => {
    console.log('Parametry sumy', a + b);
    return a + b;
  };

  const pomnozDodajWiele = (mnoznik, ...rest) => {
    // console.log('rest', rest);
    const suma = rest.reduce((prev, curr) => prev + curr, 0);
    // console.log('suma reduce', suma);
    return mnoznik * suma;
  };
  console.log('pomnozDodajWiele', pomnozDodajWiele(2, 1, 1, 1));

  const domyslnaWartosc = (mnoznik, inna, liczba = 4) =>
    mnoznik * liczba + inna;
  console.log('funkcja z domyslna wartoscia', domyslnaWartosc(2, 3));
  //odchodzi sie od arguments
  function funkcjaArguments(a, b) {
    console.log(`funkcjaArugemnts, argumetns`, arguments[0] * arguments[1]);
  }
  funkcjaArguments(7, 2, 5, 6);

  //wartość a referencja
  const a = 4;
  const b = 4;
  console.log('czy a =b', a === b);
  const obj1 = { a: 4 };
  const obj2 = { a: 4 };
  const obj3 = obj2;
  console.log('czy obj1=obj2', obj1 === obj2);
  console.log('Czy obj2=obj3', obj2 === obj3);
  obj3.a = 77;
  //Jezeli jest true np a ===b to przechowywane przez wartosc a jezeli a ===b wychodzi false to przechowywane przez referencje
  console.log('obj1,obj2,obj3 po zmianie', obj1, obj2, obj3);

  const dodaj = (objekt, liczba) => {
    //unikamy
    objekt.value = liczba + 10;
    //unikamy
    liczba = 200;
  };

  const testO = { value: 100 };
  let lO = 10;
  console.log('testO przed', testO, lO);
  dodaj(testO, 10);
  console.log('testO po', testO, lO);
  return (
    <div>
      <h2>Parametry funkcji</h2>
      <p>Wywołanie funkcji z parametrami {suma(1, 2)}</p>
      <p>Wywołanie funkcji za dużo parametrów {suma(1, 2, 3)}</p>
      <p>Wywołanie funkcji za mało parametrów {suma(1)}</p>
      <p>Różnica pomiędzy ...args vs . arguments </p>
      <p>Wartość a referencja</p>
    </div>
  );
};
