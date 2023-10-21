export const JsHoisting = () => {
  let wynikGlobal = 100;

  const add = (a) => {
    let wynik = 0;
    if (a > 10) {
      wynik = a + 3;
    } else {
      wynik = a + 2;
    }
    return wynik;
  };

  const wynikFunkcji = add(20);
  console.log('wynik funkcji add', wynikGlobal, wynikFunkcji);
  // console.log(wynik);

  // currying
  const sum = (a, b) => a + b;
  const addMore = (a) => {
    const addEvenMore = (b) => {
      return a + b;
    };
    return addEvenMore;
  };

  console.log('currying', addMore(5)(6), sum(5, 6));

  const logger = (name) => (message) => console.log(name, message);
  const loggHosting = logger('To jest log z komponentu Hoisting');
  loggHosting('Hello');
  loggHosting('ABCD');
  loggHosting('Bey');

  // zadanie dodaj liczby od 1 do X
  // value = 2; [0, 0] .map [1, 2]
  const addFrom1ToValue = (value) =>
    new Array(value)
      .fill(0)
      .map((val, index) => index + 1)
      .reduce((prev, current) => prev + current, 0);
  console.log('addFrom1ToValue', addFrom1ToValue(100));

  // to samo przez rekurencję
  const addFrom1ToValueRekurencja = (value, result = 0) => {
    if (value === 1) {
      return result + value;
    } else {
      return addFrom1ToValueRekurencja(value - 1, result + value);
    }
  };
  console.log('addFrom1ToValueRekurencja', addFrom1ToValueRekurencja(100));
  //   ## Podsumowanie :
  // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
  // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return
  // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  // - https://www.w3schools.com/js/js_arrow_function.asp
  // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  // - https://stackabuse.com/how-to-reverse-a-string-in-javascript/
  // - https://www.geeksforgeeks.org/javascript-multidimensional-array/
  // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
  // - https://devmentor.pl/b/rekurencja-alternatywa-dla-petli-w-javascript
  // - https://www.programiz.com/javascript/hoisting
  // - https://blog.piotrnalepa.pl/2018/04/22/function-currying-o-co-tu-chodzi-i-jak-tego-uzywac/

  return (
    <div>
      <h1>Hoisting</h1>
      <h2>zasięg zmiennych</h2>
      <h2>rekurencja</h2>
    </div>
  );
};
