// 1. length - sprawdza dlugosc

// 2. charAt() - zwraca nam litere pod podanym indeksem

// 3. trim() - ucina nam puste miejsca po obu koncach stringa (zostawia te w srodku)

// 4. replace() - zamienia podany string na inny podany (tylko pierwszy)

// 5. replaceAll() - zamienia podany string na inny podany (wszystkie)

// 6. split() - zamienia string w tablice z elementami stringa

// 7. indexOf() - zwraca index pod ktorym jest szukana fraza

// 8. toUpperCase()/toLowerCase() - podnosi do wielkiej lub malej litery

// 9. includes() - zwraca boolean czy string zawiera dany ciag znakow

// 10. startsWith() - zwraca boolean czy string zaczyna sie od danego ciagu znakow

//ZADANKA:

// 1. Napisz funkcje która zwraca string z podniesioną pierwszą literą
// 2. Napisz funkcje która obcina string po x znakach, x przekaz jak argument funkcji
// 3. Napisz funkcję która sprawdza czy email jest poprawny (czy posiada @ i czy występuje kropka po @)
// 4. Napisz funkcje która sprawdza czy string jest palindromem

import React from 'react';

const StringMethods = () => {
  function capitalizeFirstLetter(str) {
    const result = str.charAt(0).toUpperCase() + str.slice(1);
    return `${str} => ${result}`;
  }

  function sliceFromIndex(str, sliceIndex) {
    const result = str.slice(0, sliceIndex);
    return `${str} sliced from ${sliceIndex} index => ${result}`;
  }

  function EmailIndex(str) {
    const atIndex = str.indexOf('@');
    const dotIndex = str.indexOf('.');

    const result = atIndex > 0 && atIndex < dotIndex;

    return `Is valid email: ${str}: ${result}`;
  }

  return (
    <div>
      <h2>String methods cardio</h2>
      <ol>
        <li>{capitalizeFirstLetter('friday!')}</li>
        <li>{sliceFromIndex('Hello World', 5)}</li>
        <li>{EmailIndex('katarzynaolkowska@gmail.com')}</li>
      </ol>
    </div>
  );
};

export { StringMethods };
