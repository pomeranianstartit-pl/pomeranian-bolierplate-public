import './styles.css';

export function Hoisting() {
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

  const wynikfunkcjiadd = add(20);
  console.log('wynik funkcji add', wynikGlobal, wynikfunkcjiadd);

  //currying
  const sum = (a, b) => a + b;
  const addMore = (a) => {
    const addEventMore = (b) => {
      return a + b;
    };
    return addEventMore;
  };
  console.log(addMore(5)(6), sum(5, 6));
  const logger = (name) => (message) => console.log(name, message);

  const loggHosting = logger('To jest log z kompenentu Hoisting');
  loggHosting('Hello');
  loggHosting('ABCD');
  loggHosting('Bay');

  //value =2; [0,0].map[1,2]
  const addFrom1ToValue = (value) =>
    new Array(value)
      .fill(0)
      .map((val, index) => index + 1)
      .reduce((prev, curr) => prev + curr, 0);
  console.log('addFrom1ttoValue', addFrom1ToValue(100));

  //to samo przez rekurencje
  const addFrom1toValueRekurencja = (value, result = 0) => {
    if (value === 1) {
      return result + value;
    } else {
      return addFrom1toValueRekurencja(value - 1, result + value);
    }
  };
  console.log('addFrom1toValueRekurencja', addFrom1toValueRekurencja(100));

  return (
    <div>
      <h1>Hoisting</h1>
      <h2>Zasięg zmiennych</h2>
    </div>
  );
}
