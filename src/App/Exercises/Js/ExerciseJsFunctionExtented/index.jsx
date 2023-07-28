import { CurrencyBitcoin } from '@mui/icons-material';
import './styles.css';

export function Exercise() {
  // 1.
  // Napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i zwraca ją posortowana
  // funkcja ma nie zmieniać pierwotnej tablicy

  const sortImmute = (arr) => arr.slice().sort((a, b) => a - b);

  // const sortImmute = (arr) => {
  //   return arr.slice().sort((a, b) => a - b)

  // };

  // const sortImmute = (arr) => {
  // const sortedArray = arr.slice().sort((a, b) => a - b)

  //   return sortedArray;
  // };

  const arr = [1, 3, 2, 5, 4];
  const sortedArr = sortImmute(arr);

  console.log(arr);

  console.log(sortedArr);

  // 2.

  // ciąd fibonaczniego
  // funkcja zwraca podany w argumencie element ciągu Fibonacciego
  // napisać rekurencyjnie

  const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  console.log(fibonacci(4));

  // 3.
  // stwórz funkcję calculateWithChar, która przyjmuje jako argument jeden operator matematyczne
  // '+', '-', '*', '/'
  // funkcja calculateWithChar ma zwracać funkcję, która przyjmuje dwie liczby jako argumenty

  const calculateWithChar = (operator) => {
    return (num1, num2) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'złe wejście';
      }

      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        case '%':
          return num1 % num2;
        default:
          return 'zły znak';
      }
    };
  };

  console.log(calculateWithChar('+')(1, 2));
  console.log(calculateWithChar('*')(1, 2));
  console.log(calculateWithChar('/')(1, 2));
  console.log(calculateWithChar('---')(1, 2));
  console.log(calculateWithChar('+')('abc', 2));

  // zad2 - funkcja, która przyjmuje dowolną ilość argumentów za pomocą "...arg" i zwraca ich sumę.

  function sum(...args) {
    if (args.every((numer) => typeof numer === 'number')) {
      return args.reduce((acc, curr) => acc + curr, 0);
    }
    return 'Złe wejście';
  }

  console.log(sum(1, 2, 3, 4, 5, 6));
  console.log(sum(3, 2, 'not a number'));

  // 3
  function zliczWystapienia(number) {
    return function liczenie(...argu) {
      if (typeof number !== 'number') {
        return 'złe wejscie';
      }
      return argu.filter((element) => element === number).length;
    };
  }
  console.log(zliczWystapienia(1)(1, 1, 2, 3));
  console.log(zliczWystapienia('nie liczba')(1, 2, 3));
  console.log(zliczWystapienia(1)(1, 2, 3, 'cokolwiek'));
  //

  //

  const originalObj = { name: 'john', Surname: 'wick', age: '100' };

  const zacznijDużąLiterą = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const zmienionyObiekt = (originalObj) => {
    const zkapitalizowaneImię = zacznijDużąLiterą(originalObj.name);
    return { ...originalObj, name: zkapitalizowaneImię };
  };

  console.log({ originalObj });
  console.log(zmienionyObiekt(originalObj));
  //
  //

  function sredniaArytmetyczna(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'błędne dane';
    }

    return (a + b) / 2;
  }

  // Testuję funkcję
  const liczba1 = 5;
  const liczba2 = 7;
  console.log(sredniaArytmetyczna(liczba1, liczba2)); // Wyświetli: 6

  const nieLiczba1 = 'abc';
  const nieLiczba2 = 10;
  console.log(sredniaArytmetyczna(nieLiczba1, nieLiczba2)); // Wyświetli: błędne dane

  function wykonajCwiczenie9() {
    console.log(`Wynik ćwiczenia9: ${sredniaArytmetyczna(4, 7)}`);
  }

  //
  const obliczSrednia = (tablicaOcen) => {
    return tablicaOcen.map((obiekt) => {
      const { imię, oceny } = obiekt;
      const srednia =
        oceny.reduce((sum, ocena) => sum + ocena, 0) / oceny.length;
      return { imię, srednia };
    });
  };
  const tablicaOcen = [
    { imię: 'Jan', oceny: [4, 5, 3, 4, 5] },
    { imię: 'Anna', oceny: [5, 5, 4, 5, 3] },
  ];

  const wynik = obliczSrednia(tablicaOcen);
  console.log(wynik);

  return <div>Test</div>;
}
