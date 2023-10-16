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


  // ZADANIA 
  // 1.stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą "...args" i zwraca ich sumę 

  const sumOfParams_1 = (...args) => {

    let sum = 0;

    for (const arg of args) {

      if (typeof arg === 'string') {

        sum = 'złe wejście';

      }

    }

 

    if (sum === 'złe wejście') return sum;

 

    return args.reduce((acc, curr) => acc + curr, 0);

  };

 

  const sumOfParams_2 = (...args) => {

    return args.reduce((acc, curr) => {

      if (typeof acc === 'string') return 'złe wejście';

      return acc + curr;

    }, 0);

  };

 

  const sumOfParams_3 = (...args) => {

    let sum = 0;

 

    for (const arg of args) {

      if (typeof arg === 'number') {

        sum += arg;

      } else {

        return 'złe wejście';

      }

    }

    return sum;

  };


// 2. Stwórz funkcję calculatorWithChar ma zwracać funkcję, która przyjmuje jako argument jeden operator matematyczny '+', '-', '*', '/',
// *funkcja ma zwracać funkcję, która przyjmuje dwie liczby jako argumenty 

const calculateWithChar = (operator) => {
  return (arg1, arg2) => {
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
      return 'złe wejscie'; 
    }
    switch (operator) {
      case '+' : 
        return arg1 + arg2;
      case '-' :
        return arg1 - arg2;
      case '/' :
        return arg1 / arg2; 
      case '*' :
        return arg1 * arg2;
        default:
          return 'zły znak';

    }
  }
}

// 3. Funkcja zwraca podany w argumencie element ciągu Fibonacciego
// *napisać rekurencyjnie
function Fibonacci (n) {
  if (n === 0) return 0; 
  if (n === 1) return 1; 
  if (n > 1) return Fibonacci(n - 1) + Fibonacci(n - 2);
}

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
  console.log(xFunction()(1, 23)('aba')(), 'xFunction()()()()');

  console.log ('---------');

  console.log(sumOfParams_1(1, 2, '3', 4, 5), 'sumOfParams_1');

  console.log(sumOfParams_2(1, 2, 3, 4, 5), 'sumOfParams_2');

  console.log(sumOfParams_3(1, 2, '3', 4, 5), 'sumOfParams_3');

  console.log ('---------');

  console.log(calculateWithChar('+')(2,3));

  console.log ('---------');

  console.log(Fibonacci(3));
  console.log(Fibonacci(12));



 

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