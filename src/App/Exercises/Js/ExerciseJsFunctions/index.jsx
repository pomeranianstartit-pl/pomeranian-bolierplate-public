export const ExerciseJsFunctions = () => {
  const sortImmune = (parametr) => {
    const result = [...parametr];
    return result.sort((a, b) => a - b);
  };
  const originalArr = [1, 3, 2];
  const sortedArr = sortImmune(originalArr);

  console.log({
    originalArr, // [1, 3, 2]
    sortedArr, // [1, 2, 3]
  });
  let objectExample = {
    imie: 'filip',
    nazwisko: 'szczesniak',
    miejsceUrodzenia: 'kair',
  };
  function capitalizeFirstLetter(parametr) {
    // const newParametr = parametr.toString();
    // return newParametr.charAt(0).toUpperCase() + newParametr.slice(1);
    for (const property in parametr) {
      const changedValue =
        parametr[property].charAt(0).toUpperCase() +
        parametr[property].slice(1);
      parametr[property] = changedValue;
    }
  }
  console.log(capitalizeFirstLetter(objectExample), objectExample);

  //Rozwiazanei Szymona(prowadzacy)

  const capitilize = (obj) => {
    //nowa pomocnicza aby nie iterować po oryginalnym
    const newObj = {};

    for (const key in obj) {
      newObj[key[0].toUpperCase() + key.slice(1)] = obj[key];
    }

    return newObj;
  };
  console.log(capitilize({ age: 20, name: 'artur' }), capitilize);
  //druga wersja destrukturyzacja tablicy
  //bez destruktyryzowac to było zamiast [key], [value]=(arr) w mapie
  //odwrocenie procesu z tablicy na tablice fromEntries
  //entries przerabia z obektu na tablice
  //klucze zawsze traktowane jako string

  const capitalize = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key.charAt(0).toUpperCase() + key.slice(1),

        value,
      ])
    );
  };
  console.log(capitalize({ age: 20, name: 'artur' }), capitalize);

  //Rozwiazanie Arka
  // let objectExample = {
  //   imie: 'filip',
  //   nazwisko: 'szczesniak',
  //   miejsceUrodzenia: 'kair',
  // };

  // function capitalizeEveryValue(theObject) {
  //   for (const property in theObject) {
  //     const changedValue =
  //       theObject[property].charAt(0).toUpperCase() +
  //       theObject[property].slice(1);
  //     theObject[property] = changedValue;
  //   }
  // }
  // console.log('pierwotna forma obiektu: ', objectExample);
  // capitalizeEveryValue(objectExample);
  // console.log(' capitalizeEveryValue:', objectExample);

  //Napisz funkcję, która jako parametr przyjmuje tablicę obiektów natomiast zwraca tablicę z wyliczoną wartością średnią zamiast ocen
  //funkcja ma nie zminiać pierwotnej tablicy

  // ZADANIE:

  const calcAvr = (arr) => {
    return arr.map(({ id, name, grades }) => {
      const avr = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
      return {
        id,
        name,
        avr: avr,
      };
    });
  };

  const tablicaPierwotna = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
    { id: 2, name: 'Eve2', grades: [4, 2, 4, 6, 1, 2, 3] },
  ];

  const tablicaWynikowa = calcAvr(tablicaPierwotna);
  console.log(tablicaPierwotna, 'tablicaPierwotna');
  console.log(tablicaWynikowa, 'tablicaWynikowa');

  // tablicaWynikowa -> [
  //    {id: 0, name: "Eve", avr: 3.14},
  //    {id: 1, name: "Eve2", avr: 3.14},
  // ]

  //---------------------------------------------------------

  //Funkcja zwraca podany w argumencie element ciągu Fibonacciego
  // napisać rekurencyjnie
  // fibonacci(3) -> 2
  // fibonnaci(12) -> 144
  const fibonacci = (n) => {
    if (n < 0) return 'Błąd - musi być liczba naturalna';
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 2) + fibonacci(n - 1);
  };
  console.log(fibonacci(10), 'fibonacci(10)');
  //zadanie kolejne
  //------------------------------------------------------
  //rozwiazanie Arka
  // const sumaWielu = (...args) => {
  //   for (const arg of args) {
  //     if (isNaN(arg)) {
  //       return 'Conajmniej jeden z elementów nie jest liczbą.';
  //     }
  //   }
  //   return args.reduce((prev, curr) => prev + curr, 0);
  // };
  //stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą "...args" i zwraca ich sumę
  // sumOfParam(1,2,3,4,5,6) -> x
  // sumOfParam(1,2,3, 'not a number',5,6) -> "złe wejście"
  const sumOfParam = (...args) => {
    let suma = 0;

    suma = args.reduce((prev, curr) => prev + curr, 0);

    return suma;
  };
  console.log(sumOfParam(1, 2, 3, 4, 5, 6));

  // Rozwiązanie Szymona(prowadzacy)
  const sumOfParams = (...args) => {
    return args.reduce((acc, curr) => {
      if (typeof acc !== 'number') return 'Złe wejście';
      return acc + curr;
    }, 0);
  };
  console.log(sumOfParams(10, 1, 1, '15', 23), 'sumOfParams(10)');
  //-----------------------
  //Kolejne zadania
  //stwórz funkcje calculateWithChar, która przyjmije jako argument jeden operator matematyczne '+','-','*','/'

  const outerFunction = (znak, number1, number2) => {
    if (typeof (number1 && number2) !== 'number') return 'złe wejście';
    if (znak === '-') return number1 - number2;
    if (znak === '+') return number1 + number2;
    if (znak === '*') return number1 * number2;
    if (znak === '/') return number1 / number2;
    else return 'zły znak';
  };
  //rozwiazanie szymona
  // const calculateWithChar = (operator) => {
  //   return (val1, val2) => {
  //     if (typeof val1 !== 'number' || typeof val2 !== 'number')
  //       return 'Złe wejście';
  //     switch (operator) {
  //       case '+':
  //         return val1 + val2;
  //       case '-':
  //         return val1 - val2;
  //       case '/':
  //         return val1 / val2;
  //       case '*':
  //         return val1 * val2;
  //       case '%':
  //         return val1 % val2;
  //       default:
  //         return 'Zły znak';
  //     }
  //   };
  // };
  console.log('outerFunction', outerFunction('+', 5, 3));
  return (
    <div>
      <h1>ExerciseJsFunctions</h1>
      <h2>Ćw sortImmute</h2>
      <p>
        Napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i
        zwraca ją posortowana funkcja ma nie zmieniać pierwotnej tablicy
      </p>
      <p>
        napisz funkcję która jako parametr przyjmuje obiekt przechodzi po
        wszystkich jego polach i kapitalizuje im pierwszą literę
      </p>
    </div>
  );
};
