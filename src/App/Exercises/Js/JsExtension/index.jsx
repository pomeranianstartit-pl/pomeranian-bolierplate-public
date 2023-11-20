import React from 'react';

// Arrow function
export const JsExtension = () => {
  // const array = [1, 2, 3];
  // array.map(() => {}) - przykładowe zastosowanie arrow function w metodzie map

  // Każda funkcja coś zwraca - nawet jeśli nie mamy słowa kluczowego return.
  const testFunction = () => {
    // return;
  };
  console.log(testFunction(), 'testFunction()');

  const argsFunction = (a, b) => {
    console.log(a, b);
    // return;
  };

  console.log(argsFunction(1), 'argsFunction(1)');

  // WARTOŚCI DOMYŚLNE DLA ARGUMENTÓW FUNKCJI
  const sayMyName = (name = 'Jan', surname = 'Kowalski') => {
    return `My name is ${name} ${surname}`;
  };

  // SPOSOBY PRZEKAZANIA ARGUMENTÓW DO FUNKCJI Z WARTOŚCIAMI DOMYŚLNYMI
  console.log(sayMyName(), '---------- 1 ---------- sayMyName()');
  console.log(sayMyName('Piotr'), '---------- 2 ---------- sayMyName()');
  console.log(
    sayMyName('Krzysztof', 'Dowolny'),
    '---------- 3 ---------- sayMyName()'
  );

  // SPREAD OPERATOR - NIEOKREŚLONA LICZBA ARGUMENTÓW FUNKCJI

  const sum = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0);
  };

  console.log(sum(1, 2, 5, 10));

  // arguments - słowo wbudowane w JS, które zwraca tablicę wszystkich argumentów przekazanych do funkcji
  function sum2(a, b, c) {
    return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
  }

  console.log(sum2(1, 5, 10), 'sum2(1,5,10)');

  // --------------------------------------------
  const outerFunction = () => {
    const innerFunction = () => {
      return 'innerFunction';
    };

    return innerFunction;
  };

  const out = outerFunction();
  console.log(out, 'out');
  // ... kod
  console.log(out(), 'out innerFunction');

  // --------------------------------------------
  // SILNIA - REKURENCYJNIE
  const strong = (n) => {
    // early return
    if (n === 0) return 1;

    return n * strong(n - 1);
  };

  console.log(strong(4), 'strong(4)');
  console.log(strong(0), 'strong(0)');

  // --------------------------------------------

  // --------------------------------------------
  const simpleFunction = () => {
    const a = 5;
    const innerFunction = (b) => {
      return a * b;
    };

    return innerFunction;
  };

  const simple = simpleFunction()(4);
  console.log(simple, 'simple');
  // -------------------- funkcepcja ------------------------
  const xFunction = () => {
    return (x, y) => {
      // x = 1
      // y = 23
      // ...  kod
      // x
      return (str) => {
        // str = 'aba'
        // ...  kod + x
        return () => {
          return 'test';
        };
      };
    };
  };

  console.log(xFunction()(1, 23)('aba')(), 'xFunction()()()()');

  // -----------------Ćwiczenia-------------
  // -----------1--------
  function fibonacci(f) {
    if (f === 0) return 0;
    if (f === 1) return 1;
    if (f > 1) return fibonacci(f - 1) + fibonacci(f - 2);
  }
  console.log(fibonacci(5));
  console.log(fibonacci(12));

  // -----------2--------

  function suma(...args) {
    for (const arg of args) {
      if (typeof arg === 'string') return `złe wejscie`;
    }
    return args.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(`suma: `, suma(1, 2, 3));

  // -----------3--------

  function zliczWystapienia(x) {
    return (...arr) => {
      if (typeof x === 'string') return 'złe podejscie';
      const newArr = arr.filter((num) => num === x);
      return newArr.length;
    };
  }
  console.log(
    `argumnet wystpił: `,
    zliczWystapienia(1)(1, 1, 2, 3, 4, 1, 1, 1, 1)
  );

  // -----------4--------
  function calculateWithChar(char) {
    return (a, b) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
        return `złe wejście`;
      } else if (char === '+') {
        return `wynik dla ${char} równa się: ${a + b}`;
      } else if (char === '*') {
        return `wynik dla ${char} równa się: ${a * b}`;
      } else if (char === '/') {
        return `wynik dla ${char} równa się: ${a / b}`;
      } else return `zły znak`;
    };
  }
  console.log(calculateWithChar('*')(2, 6));

  return <div>Js rozszerzenie wiedzy</div>;
};

// Named function
// export function JsExtension() {
//   return <div>Js rozszerzenie wiedzy</div>;
// }

// Anonymous function
// export const JsExtension = function () {
//   return <div>Js rozszerzenie wiedzy</div>;
// };

// IIFE - Immediately Invoked Function Expression
// (() => {
//   console.log('test');
// })();
