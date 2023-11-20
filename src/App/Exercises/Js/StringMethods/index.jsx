import React from 'react';

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

// 11. slice() - jezeli jeden argument ucina nam string od tego indexu / jezeli podamy 2 argumenty to od pierwszego do drugiego podanego indexu

// 1. Napisz funkcje która zwraca string z podniesioną pierwszą literą

// 2. Napisz funkcje która obcina string po x znakach, x przekaz jak argument funkcji

// 3. Napisz funkcję która sprawdza czy email jest poprawny (czy posiada @ i czy występuje kropka po @)

// 4. Napisz funkcje która sprawdza czy string jest palindromem

const StringMethods = () => {
  const getEmptyStringInfo = () => 'TO JEST PUSTY STRING KIEROWNIKU';

  function capitalizeFirstLetter(str) {
    if (str.length === 0) return getEmptyStringInfo();

    const result = str.charAt(0).toUpperCase() + str.slice(1);

    // str.charAt(0) === str[0]

    return `${str} => ${result}`;
  }

  function sliceFromIndex(str, sliceIndex) {
    if (str.length === 0) return getEmptyStringInfo();

    const result = str.slice(0, sliceIndex);

    return `${str} sliced from ${sliceIndex} index => ${result}`;
  }

  function checkValidEmail(str) {
    const atIndex = str.indexOf('@');

    const dotIndex = str.indexOf('.');

    const result = atIndex > 0 && atIndex < dotIndex;

    return `Is valid email: ${str}: ${result}`;
  }

  function checkPalindrome(str){
    const result = str === str.split('').reverse().join('');
    return `${str} is palindrome: ${result}`;
  }

  return (
    <div>
      <h2>String methods cardio</h2>

      <ol>
        <li>{capitalizeFirstLetter('cześć 👋')}</li>

        <li>{sliceFromIndex('Hello world!', 5)}</li>

        <li>{checkValidEmail('test@test.com')}</li>
        <li>{checkPalindrome('anna')}</li>
      </ol>
    </div>
  );
};

export { StringMethods };
