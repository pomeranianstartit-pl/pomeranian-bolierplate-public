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

  console.log(toCamelCase('Pierwszy znak stringa'));
  // Napisz funkcję, która przyjmuje dwa napisy i zwraca tablicę z literami, które występują w obu napisach.
  // commonLetters("Hello", "World") => ["l", "o"]

  const getCommonChars = (str1, str2) => {
    const letters = str1.split('');
    return [...new Set(letters.filter((letter) => str2.includes(letter)))];
  };

  console.log(getCommonChars('Hello', 'World'));

  // ----------------------------------------------------------
  // Napisz funkcję, która przyjmuje dwa napisy i zwraca tablicę z literami, które występują w obu napisach.
  // commonLetters("Hello", "World") => ["l", "o"]
  const commonLetters = (str1, str2) => {
    const arr1 = str1.split('');
    const arr2 = str2.split('');

    const common = arr1.filter((char) => arr2.includes(char));

    return Array.from(new Set(common));
  };

  console.log(commonLetters('Hello', 'World'));

  // ----------------------------------------------------------
  // Napisz funkcję, która przyjmuje tablicę słów i zwraca tablicę z liczbami określającymi ilość samogłosek
  // w tych słowach
  // ['a', 'e', 'i', 'o', 'u']
  // wordLengths(["apple", "banana", "orange"]) => [2, 3, 3]
  // z neta metoda
  function wordLengths(words) {
    return words.map(
      (word) =>
        word.split('').filter((char) => 'aeiouAEIOU'.includes(char)).length
    );
  }

  console.log(wordLengths(['apple', 'banana', 'orange']));
  // ----------------------------------------------------------
  // Napisz funkcję, która pobiera dwa napisy i sprawdza, czy są one anagramami
  // isAnagram("iceman", "cinema") => true
  // isAnagram("iceman", "cinemma") => false
  const anagramParser = (str) => str.toLowerCase().split('').sort().join('');
  const isAnagram = (str1, str2) => anagramParser(str1) === anagramParser(str2);

  console.log(isAnagram('kot', 'kto'));
  return <div>String methods</div>;
};
