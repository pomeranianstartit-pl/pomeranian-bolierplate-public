export const StringMethods = () => {
  const str1 = 'Hell"o"';
  const str2 = "World's";
  const str3 = `Hello "test" ${str1} ${str2} 'sdsd'`;
  console.log(str1, str2, str3, 'Sposoby deklaracji stringów');

  // ----------------------------------------------------------
  console.log(str1[0], 'Pierwszy znak stringa');
  // 'Pierwszy znak stringa'
  // 'PierwszyZnakStringa'
  // charAt - zwraca znak na podanej pozycji

  console.log(str1.charAt(0), 'Pierwszy znak stringa');
  // ----------------------------------------------------------
  // zwraca podciąg na podanej pozycji
  // slice - (index początkowy)

  console.log(str2.slice(4), 'str2.slice(4)');
  // slice - (index początkowy, index końcowy)
  console.log(str2.slice(2, 4), 'str2.slice(2,4)');
  // ----------------------------------------------------------
  // split - dzieli stringa na tablicę

  const str4 = 'Hello world from another universe';
  console.log(str4.split(' '), 'str4.split()');
  console.log(str4.split('o'), 'str4.split(o)');
  // ----------------------------------------------------------
  // includes - sprawdza czy string zawiera podany ciąg znaków
  console.log(str4.includes('World'), 'str4.includes(world)');
  // 'Pierwszy znak stringa'
  // 'PierwszyZnakStringa'
  const toCamelCase = (str) => {
    const arr = str.split(' ');
    let accStr = '';
    for (const element of arr) {
      accStr += element[0].toUpperCase() + element.slice(1);
    }
    return accStr;
  };
  // Napisz funkcję, która przyjmuje dwa napisy i
  // zwraca tablicę z literami, które występują w obu napisach.
  // commonLetters("Hello", "World") => ["l", "o"]

  const stringOne = 'Hello';
  const stringTwo = 'World';
  function commonLetters(stringOne, stringTwo) {
    let newArray = [];

    for (const charStringOne of stringOne) {
      for (const charStringTwo of stringTwo) {
        if (charStringOne === charStringTwo) {
          console.log(charStringOne);

          newArray.push(charStringOne);
        }
      }
    }
    return Array.from(new Set(newArray));
  }

  //   Napisz funkcję, która przyjmuje tablicę słów i zwraca tablicę z liczbami
  // określającymi ilość samogłosek
  // w tych słowach
  // ['a', 'e', 'i', 'o', 'u']
  // wordLengths(["apple", "banana", "orange"]) => [2, 3, 3]

  function wordLengths(arrayOfWords) {
    let newArray = [];
    let templateArray = ['a', 'e', 'i', 'o', 'u'];
    let countedNumb = 0;
    for (const arrayObject of arrayOfWords) {
      for (const charArrayObject of arrayObject) {
        for (const templateArrayObject of templateArray) {
          if (charArrayObject === templateArrayObject) {
            countedNumb += 1;
          }
        }
      }
      newArray.push(countedNumb);
      countedNumb = 0;
    }
    return newArray;
  }

  // ----------------------------------------------------------
  // Napisz funkcję, która pobiera dwa napisy i sprawdza, czy są one anagramami
  // isAnagram("iceman", "cinema") => true
  // isAnagram("iceman", "cinemma") => false
  const anagramParser = (str) => str.toLowerCase().split('').sort().join('');
  const isAnagram = (str1, str2) => anagramParser(str1) === anagramParser(str2);

  console.log(isAnagram('iceman', 'cinema'));
  console.log(toCamelCase('Pierwszy znak stringa'));
  console.log(commonLetters(stringOne, stringTwo));
  return <div>Cwiczenia z metodami string</div>;
};
