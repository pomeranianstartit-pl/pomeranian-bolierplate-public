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

// 1. Napisz funkcje która zwraca string z podniesioną pierwszą literą
// 2. Napisz funkcje która obcina string po x znakach, x przekaz jak argument funkcji
// 3. Napisz funkcję która sprawdza czy email jest poprawny (czy posiada @ i czy występuje kropka po @)
// 4. Napisz funkcje która sprawdza czy string jest palindromem

/* const StringMethods = () => {
  function capitalizeFirstLetter(str) {
    const result = str.charAt(0).toUpperCase() + str.slice(1);
    return `${str} => ${result}`;
  }

  return (
    <div>
      <h2>String methods cardio</h2>
      <ol>
        <li>{capitalizeFirstLetter('hello weekend')}</li>
      </ol>
    </div>
  );
};

export { StringMethods }; */

/*const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const searchTerm2 = 'quick';
const indexOfFirst = paragraph.indexOf(searchTerm2.toLowerCase());
console.log((searchTerm2.charAt(0).toUpperCase() + searchTerm2.slice(1)).split("").reverse().join(""));
console.log(indexOfFirst);
console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, indexOfFirst + 1)}`); */

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

  return (
    <div>
      <h2>String methods cardio</h2>

      <ol>
        <li>{capitalizeFirstLetter('cześć 👋')}</li>

        <li>{sliceFromIndex('Hello world!', 5)}</li>

        <li>{checkValidEmail('test@test.com')}</li>
      </ol>
    </div>
  );
};

export { StringMethods };

//funkcja zwroci nam boolean (prefix is[...])
const isPalindrome = (str = '') => {
  //normalizujemy stringa (toLowerCase - zamienaimy znaki na małe; usuwamy białe znaki replace())

  if (str === '') {
    return false;
  }

  const normalizedStr = str.toLowerCase().replace(' ', '');
  // rozbijamy stringa (split); zamieniamy kolejnosc znakow i z powrotem kleimy wszystkie rozbite znaki;
  const reversedStr = normalizedStr.split('').reverse().join('');

  return normalizedStr === reversedStr;
};

const getIsPalindrome = isPalindrome('kajak');

if (getIsPalindrome) {
  console.log('jest palindromem');
} else {
  console.log('nie jest palindromem');
}