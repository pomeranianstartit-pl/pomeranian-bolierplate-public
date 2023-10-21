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

  //   Napisz funkcję, która przyjmuje dwa napisy i zwraca tablicę z literami, które występują w obu napisach.
  // commonLetters("Hello", "World") => ["l", "o"]

  const commonLetters = (str1, str2) => {
    const letters = [];
    for (const letter of str1) {
      if (str2.includes(letter) && letter !== ' ') {
        //   if (str2.includes(letter) && letter !== ' ') {
        letters.push(letter);
      }
    }
    const uniqueLetters = new Set(letters);
    uniqueLetters.delete(' ');
    return [...uniqueLetters];
  };
  console.log(
    'wspólne litery:',
    commonLetters('jak', 'jak go malują diabolicznie')
  );

  // Napisz funkcję, która przyjmuje tablicę słów i zwraca tablicę z liczbami określającymi ilość samogłosek
  // w tych słowach
  // ['a', 'e', 'i', 'o', 'u']
  // wordLengths(["apple", "banana", "orange"]) => [2, 3, 3]

  const numberOfVowels = (arr) => {
    const resultArray = [];
    const vowels = 'aąeęiuoóy';
    for (const word of arr) {
      let VowelCounter = 0;
      for (const letter of word) {
        if (vowels.includes(letter)) {
          VowelCounter++;
        }
      }
      resultArray.push(VowelCounter);
    }
    return resultArray;
  };

  //   const numberOfVowels2 = (arr) => {
  //     const VowelsOnly = [];
  //     for (const vowels of arr) {}
  //   };

  console.log(
    numberOfVowels(['eye', 'of', 'the', 'tiger', 'tiger']),
    'Number of Vowels Here'
  );

  //   Napisz funkcję, która pobiera dwa napisy i sprawdza, czy są one anagramami
  // isAnagram("iceman", "cinema") => true
  // isAnagram("iceman", "cinemma") => false

  const anagramParser = (str) => str.toCamelCase().split('').sort().join('');

  const isAnagram = (word1, word2) => {
    const arr1 = Array.from(word1.toLowerCase()).sort();
    const arr2 = Array.from(word2.toLowerCase()).sort();

    while (arr1.length > 0) {
      if (arr1.pop() !== arr2.pop()) {
        return false;
      }
    }
    return true;
  };

  console.log('czy to anagramy są? kol i tok', isAnagram('iceman', 'cinema'));

  return <div>String methods</div>;
};
