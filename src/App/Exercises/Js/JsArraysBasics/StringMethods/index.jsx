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

  // ćwiczenie 1 Napisz funkcję, która przyjmuje dwa napisy i zwraca tablicę z literami, które występują w obu napisach.
  // commonLetters("Hello", "World") => ["l", "o"]

  const stringOne = 'Hello';
  const stringTwo = 'World';

  function commonLetters(stringOne, stringTwo) {
    const letters1 = new Set(stringOne);
    const letters2 = new Set(stringTwo);
    const common = [...letters1].filter((letter) => letters2.has(letter));
    return common;
  }

  const resultCommonLetters = commonLetters(stringOne, stringTwo);

  console.log('Wspólne litery:', resultCommonLetters);

  // ćwiczenie 2 Napisz funkcję, która przyjmuje tablicę słów i zwraca tablicę z liczbami określającymi ilość samogłosek
  // w tych słowach ['a', 'e', 'i', 'o', 'u'] wordLengths(["apple", "banana", "orange"]) => [2, 3, 3]
  const wordLengths = ['apple', 'banana', 'orange'];
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  function countVowels(word) {
    let vowelCount = 0;

    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        vowelCount++;
      }
    }

    return vowelCount;
  }

  function countVowelsInArray(wordArray) {
    const vowelCounts = wordArray.map((word) => countVowels(word));
    return vowelCounts;
  }

  const vowelCounts = countVowelsInArray(wordLengths);

  console.log('Liczba samogłosek w każdym słowie:', vowelCounts);

  // ćwiczenie 3 Napisz funkcję, która pobiera dwa napisy i sprawdza, czy są one anagramami isAnagram("iceman", "cinema") => true
  // isAnagram("iceman", "cinemma") => false
  const word1 = 'iceman';
  const word2 = 'cinema';

  function isAnagram(word1, word2) {
    if (word1.length !== word2.length) {
      return false;
    }
    const NewWord1 = word1.split('').sort().join('');
    const NewWord2 = word2.split('').sort().join('');

    return NewWord1 === NewWord2;
  }

  const Anagrams = isAnagram(word1, word2);
  console.log('Czy słowa są anagramami?', Anagrams);

  return <div>ćwiczenia z metodami string</div>;
};
