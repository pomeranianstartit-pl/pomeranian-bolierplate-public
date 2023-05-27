import './styles.css';

export function Exercise() {
  // const a = 2;
  // const b = 3;
  // Ddeclaration types
  // function multiplyTypeFunction() {
  //   return a * b;
  // }

  // const multiplyTypeArrowFunction = () => {
  //   return a * b;
  // };

  // // lambda
  // const multiplyTypeArrowFunction_lambda = () => a * b;

  // const filterHelper = (num) => {
  //   return (num) => 3;
  // };

  // const array_anonymous_function_with_declaration = [1, 2, 3].filter(
  //   (num) => num >= 3
  // );
  // const array_function_with_declaration = [1, 2, 3].filter((num) =>
  //   filterHelper(num)
  // );

  // function outsideFunction() {
  //   function insideFunction() {
  //     console.log('test');
  //   }

  //   // wywołanie funkcji
  //   return insideFunction();

  //   // zwracamy zmienną do której jest przypisana ta funkcja - przekazujemy referencje do tej funkcji
  //   // return insideFunction;
  // }

  // outsideFunction();

  // ------------------------------------------------------------------------
  // ARGUMENTY FUNKCJI

  // function multiplyTypeFunction(a, b, c) {
  //   return a * b * c;
  // }

  // function multiplyTypeFunction(...values) {
  //   // values jako lista z wartościami
  //   return values;
  // }

  // function multiplyTypeFunction(callback1, callback2, ...values) {
  //   // values jako lista z wartościami
  //   callback1;
  //   callback2;
  //   // ... values
  //   return values;
  // }

  // multiplyTypeFunction(() => {});

  // multiplyTypeFunction
  // const l1 = 1;
  // const l2 = 1;

  // console.log(l1 === l2);

  // const obj1 = {} // gdzieś w pamięci mamy zadeklarowany obiekt
  // const obj2 = {}

  // console.log(obj1 === obj2) //będzie false, bo nie odnosimy się do wartości w obiekcie, więc JS porównuje ich źródła, które nie są takie same

  // ------------------------------------------------------------------------

  function outsideFunction_hoisting() {
    let a = 1;
    function insideFunction() {
      let a = 2;
      console.log(a);
    }

    console.log(a);

    return insideFunction();
  }

  outsideFunction_hoisting();

  return (
    <div>
      {/* Deklaracja funkcji */}
      {/* <div>{multiplyTypeFunction(a, b)}</div>
      <div>{multiplyTypeArrowFunction(a, b)}</div> */}
      {/* Wywołanie funkcji anonimowej - nie deklarujemy */}
      <div>
        {/* {() => {
          return a * b;
        }} */}
      </div>
    </div>
  );
}
