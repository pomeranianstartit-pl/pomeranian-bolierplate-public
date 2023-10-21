export function ExerciseJsFunction() {
  //   const originalArr = [1,3,2]
  // const sortedArr = sortImmune(originalArr)
  // console.log({
  //  originalArr, // [1, 3, 2]
  //  sortedArr// [1, 2, 3]
  // })

  function sortImmute(array) {
    return array.toSorted((a, b) => b - a);
  }

  const originalArr = [1, 5, 2, 6, 4, 3];
  const sortedArr = sortImmute(originalArr);

  console.log({
    originalArr,
    sortedArr,
  });

  // napisz funkcję która jako parametr przyjmuje obiekt przechodzi po wszystkich jego polach i kapitalizuje
  // im pierwszą literę

  let objectExample = {
    imie: 'filip',
    nazwisko: 'szczesniak',
    miejsceUrodzenia: 'kair',
  };

  function firstUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  ///////////// os Szymona:

  // const capitilize = (obj) => {
  //   const newObj = {};
  //   for (const key in obj) {
  //     newObj[key[0].toUpperCase() + key.slice(1)] = obj[key];
  //   }
  //   return newObj;
  // };
  ////////////// key z wielkiej litery:
  // const capitilize = (obj) => {
  //   return Object.fromEntries(
  //     Object.entries(obj).map(([key, value]) => [
  //       key.charAt(0).toUpperCase() + key.slice(1),
  //       value,
  //     ])
  //   );
  // };

  function capitalizeEveryValue(theObject) {
    for (let key in theObject) {
      theObject[key] = firstUpper(theObject[key]);
    }
  }
  console.log('pierwotna forma obiektu: ', objectExample);
  capitalizeEveryValue(objectExample);
  console.log(' capitalizeEveryValue:', objectExample);

  ////////////////// Zadanie 2.

  const tablicaPierwotna = [
    { id: 0, name: 'Ewa', grades: [5, 2, 3, 5, 5, 4] },
    { id: 1, name: 'Ewa2', grades: [5, 6, 2, 5, 5, 3] },
  ];

  const Average = (array) => {
    const average = array.reduce((acc, curr) => acc + curr, 0) / array.length;
    return average;
  };

  console.log(tablicaPierwotna, 'tablica pierwotna');
  const tablicaOcenSrednich = (array) => {
    const result = [];
    for (const student of array) {
      const newObj = {
        id: student.id,
        name: student.name,
        avr: Average(student.grades),
      };
      result.push(newObj);
    }
    return result;
  };
  ////////// Wersja ładna;

  const calcAvr = (arr) => {
    return arr.map(({ id, name, grades }) => {
      return {
        id,
        name,
        avr: grades.reduce((acc, grade) => acc + grade, 0) / grades.length,
      };
    });
  };

  console.log('tablica ocen średnich --------------------');
  console.log(tablicaOcenSrednich(tablicaPierwotna));
  console.log(calcAvr(tablicaPierwotna));

  const Fibonacci = (elem) => {
    if (elem < 0) {
      return `'${elem}' nie jest liczbą naturalną`;
    }
    if (elem === 0) {
      return 0;
    }
    if (elem === 1) {
      return 1;
    } else {
      return Fibonacci(elem - 1) + Fibonacci(elem - 2);
    }
  };
  console.log(Fibonacci(-2), '---ciąg Fibbonaciego');

  // stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą "...args" i zwraca ich sumę
  // sumOfParam(1,2,3,4,5,6) -> x
  // sumOfParam(1,2,3, 'not a number',5,6) -> "złe wejście"

  const sumaWielu = (...args) => {
    return args.reduce((prev, curr) => {
      if (isNaN(curr)) {
        return 'Conajmniej jeden z elementów nie jest liczbą.';
      }
      return prev + curr;
    }, 0);
  };

  console.log('Suma Wielu argumentów: ', sumaWielu(4, 4, 10, 18, 2, 2.5));

  //   Stwórz funkcję calculateWithChar, która przyjmuje jako argument jeden operator matematyczne
  // '+', '-', '*', '/'
  // funkcja calculateWithChar ma zwracać funkcję, która przyjmuje dwie liczby jako argumenty
  // calculateWithChar('+')(1,2) -> 3
  // calculateWithChar('*')(1,2) -> 2
  // calculateWithChar('/')(1,2) -> 0.5
  // calculateWithChar('---')(1,2) -> 'zły znak'
  // calculateWithChar('+')('abc',2) -> 'złe wejscie'

  function calculateWithChar(char) {
    if (char === '+') {
      return (num1, num2) => {
        return num1 + num2;
      };
    }
    if (char === '-') {
      return (num1, num2) => {
        return num1 - num2;
      };
    }
    if (char === '*') {
      return (num1, num2) => {
        return num1 * num2;
      };
    }
    if (char === '/') {
      return (num1, num2) => {
        return num1 / num2;
      };
    }
  }

  function calculateWithChar2(char) {
    switch (char) {
      case '+':
        return (num1, num2) => {
          return num1 + num2;
        };
      case '-':
        return (num1, num2) => {
          return num1 - num2;
        };
      case '*':
        return (num1, num2) => {
          return num1 * num2;
        };
      case '/':
        return (num1, num2) => {
          return num1 / num2;
        };
      default:
        return (num1, num2) => {
          return 'sorry, bad sign';
        };
    }
  }

  function calculateWithChar3(char) {
    return (num1, num2) => {
      if (typeof num1 !== 'number' || typeof num2 !== 'number')
        return 'Złe wejście';
      switch (char) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        default:
          return 'Sorry, bad sign.';
      }
    };
  }

  console.log('calculateWithChar+++', calculateWithChar('*')(5, 2));
  console.log('calculateWithChar2+++', calculateWithChar2('a')(5, 8));
  console.log('calculateWithChar3+++', calculateWithChar3('/')(5, 88));

  return (
    <div>
      <h1>ExerciseJsFunctions</h1>
      <h2>Ćw sortImmute</h2>
      <p>
        napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i
        zwraca ją posortowana funkcja ma nie zmieniać pierwotnej tablicy
      </p>
    </div>
  );
}
