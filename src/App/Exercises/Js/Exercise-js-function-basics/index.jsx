import './styles.css';

export function Exercise() {
  const a = 2;
  const b = 3;
  function multiplyTypeFunction() {
    return a * b;
  }

  const multiplyTypeArrowFunction = () => {
    return a * b;
  };

  //lambda
  const multiplyTypeArrowFunction_lambda = (a, b) => a * b;

  const filterHelper = (num) => {
    return (num) => 3;
  };

  // const array_anonymous_function_with_declaration = [1, 2, 3].filter(
  //   (num) => num >= 3
  // );
  // const array_function_with_declaration = [1, 2, 3].filter((num) =>
  //   filterHelper(num)
  // );

  function outsideFunction() {
    function insideFunction() {
      console.log('test');
    }

    // !!! wywołanie funckji
    return insideFunction();

    // !!! w tym przypadku zwracamy zmienną, do której jest przypisana ta funkcja - przekazujemy referencję do funkcji
    // return insideFunction
  }

  outsideFunction();

  // -------------------------------------------------------
  // ARGUMENTY FUNKCJI

  // function multiplyTypeFunction_2(a, b, c) {
  //   return a * b * c;
  // }

  // function multiplyTypeFunction_2(...values) {
  //   // !!! values jako lista z wartościami
  //   return values;
  // }

  // function multiplyTypeFunction_3(callback1, a, ...values) {
  //   // !!! values jako lista z wartościami
  //   callback1();
  //   console.log(a);
  //   // ... values
  //   return values;
  // }

  // // multiplyTypeFunction_2(2, 4, 5);
  // multiplyTypeFunction_3(
  //   () => {
  //     console.log('1');
  //   },
  //   'maslo',
  //   1,
  //   2,
  //   3,
  //   4,
  //   5,
  //   6
  // );

  // const l1 = 1;
  // const l2 = 1;

  // console.log(l1 === l2);

  // const obj1 = {}; // ... gdzieś w pamięci mamy zadeklarowany obiekt
  // const obj2 = {}; // ... gdzieś w pamięci mamy zadeklarowany obiekt

  // console.log(obj1 === obj2); // false, bo porównujemy tu referencje, które są różne (obiekty są zapisane w różnych miejscach w pamięci)

  // -------------------------------------------------------
  function outsideFunction_hoisting() {
    let a = 1;
    function insideFunction() {
      let a = 2;
      console.log(a);
    }

    console.log(a);
    return insideFunction();
  }

  outsideFunction();

  return (
    <div>
      {/* Deklaracja funkcji */}
      <div>{multiplyTypeFunction(a, b)}</div>
      <div>{multiplyTypeArrowFunction(a, b)}</div>
      {/* Wywołanie funkcji anonimowej - nie deklarujemy */}
      <div>
        {() => {
          return a * b;
        }}
      </div>
    </div>
  );
}
