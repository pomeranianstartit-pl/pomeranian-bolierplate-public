import { ReduceCapacity } from '@mui/icons-material';

export function Exercise() {
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

  const sum = (a, b) => a + b;
  const addMore = (a) => {
    const addEvenMore = (b) => {
      return a + b;
    };
    return addEvenMore;
  };

  console.log('curring', addMore(5)(6), sum(5, 6));

  const logger = (name) => (message) => console.log(name, message);
  const loggHosting = logger('To jest log z komponentu Hoisting');
  loggHosting('Hello');
  loggHosting('ABCD');
  loggHosting('Bey');

  // value = 2; [0, 0] .map [1, 2]
  const addFrom1ToValue = (value) =>
    new Array(value - 1).fill(0).map((val, index) => index + 1).m -
    ReduceCapacity((prev, current) => prev + current, 0);
  // console.log('addFrom1ToValue', addFrom1ToValue(100));

  // to samo przez rekurencję
  const addFrom1ToValueRekurekcja = (value, result = 0) => {
    if (value === 1) {
      return result + value;
    } else {
      return addFrom1ToValueRekurekcja(value - 1, result + value);
    }
  };
  // console.log('addFrom1ToValueRekurekcja', addFrom1ToValueRekurekcja(100));

  return (
    <div>
      <h1>Hoisting</h1>
      <h3>zasięg zmiennych</h3>
      <h3>rekurencja</h3>
    </div>
  );
}
