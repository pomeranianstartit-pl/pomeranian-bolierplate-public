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

  function commonLetters(str1, str2) {
    const commonLettersArray = [];

    // Iterujemy przez każdą literę w pierwszym napisie.
    for (let i = 0; i < str1.length; i++) {
      const letter = str1[i];

      // Sprawdzamy, czy ta litera występuje również w drugim napisie i czy jeszcze jej nie dodaliśmy do tablicy.
      if (str2.includes(letter) && !commonLettersArray.includes(letter)) {
        commonLettersArray.push(letter);
      }
    }
    return commonLettersArray;
  }

  console.log(commonLetters('Hello', 'World'));

  // --------------------

  const commonLetters2 = (str1, str2) => {
    const letters = [];
    for (const letter of str1) {
      if (str2.includes(letter)) {
        letters.push(letter);
      }
    }
    const uniqueLetters = new Set(letters);
    return [...uniqueLetters];
  };

  console.log(commonLetters2('Hello', 'World'));
  // -------------------------------
  const commonLetters3 = (str1, str2) => {
    const arr1 = str1.split('');
    const arr2 = str2.split('');

    const common = arr1.filter((char) => arr2.includes(char));

    return Array.from(new Set(common));
  };

  console.log(commonLetters3('Hello', 'World'));

  // ----------------------
  //   Napisz funkcję, która przyjmuje tablicę słów i zwraca tablicę z liczbami określającymi ilość samogłosek
  // w tych słowach
  // ['a', 'e', 'i', 'o', 'u']
  // wordLengths(["apple", "banana", "orange"]) => [2, 3, 3]

  function countVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (vowels.includes(letter.toLowerCase())) {
        vowelCount++;
      }
    }

    return vowelCount;
  }

  function wordLengths(words) {
    const vowelCounts = [];

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const count = countVowels(word);
      vowelCounts.push(count);
    }

    return vowelCounts;
  }
  console.log(wordLengths(['apple', 'banana', 'orange']));

  // -------------
  const wordLengths2 = (array) => {
    const wordLengths2Array = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const word of array) {
      let VowelCounter = 0;
      for (const letter of word) {
        if (vowels.includes(letter)) {
          VowelCounter++;
        }
      }
      wordLengths2Array.push(VowelCounter);
    }
    return wordLengths2Array;
  };

  console.log(wordLengths2(['apple', 'banana', 'orange']));

  // ------------------
  function wordLengths3(words) {
    return words.map(
      (word) =>
        word.split('').filter((char) => 'aeiouAEIOU'.includes(char)).length
    );
  }

  console.log(wordLengths3(['apple', 'banana', 'orange']));

  // -----------------
  //   Napisz funkcję, która pobiera dwa napisy i sprawdza, czy są one anagramami
  // isAnagram("iceman", "cinema") => true
  // isAnagram("iceman", "cinemma") => false

  function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }

    // Tworzymy obiekty, które przechowują liczbę wystąpień liter w obu napisach.
    const charCount1 = {};
    const charCount2 = {};

    // Obliczamy liczbę wystąpień liter w pierwszym napisie.
    for (const char of str1) {
      charCount1[char] = (charCount1[char] || 0) + 1;
    }

    // Obliczamy liczbę wystąpień liter w drugim napisie.
    for (const char of str2) {
      charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Porównujemy oba obiekty, aby sprawdzić, czy są anagramami.
    for (const char in charCount1) {
      if (charCount1[char] !== charCount2[char]) {
        return false;
      }
    }

    return true;
  }

  console.log(isAnagram('iceman', 'cinema')); // Wypisze true
  console.log(isAnagram('iceman', 'cinemma')); // Wypisze false

  // -----------------

  function isAnagram2(str1, str2) {
    // Usuwamy spacje ze stringów i zamieniamy je na tablice liter.
    const letters1 = str1.split('');
    const letters2 = str2.split('');

    // Sprawdzamy, czy obie tablice liter mają tę samą długość.
    if (letters1.length !== letters2.length) {
      return false;
    }

    // Sortujemy obie tablice liter.
    letters1.sort();
    letters2.sort();

    // Porównujemy obie tablice, aby sprawdzić, czy są anagramami.
    for (let i = 0; i < letters1.length; i++) {
      if (letters1[i] !== letters2[i]) {
        return false;
      }
    }

    return true;
  }

  console.log(isAnagram2('iceman', 'cinema'));
  console.log(isAnagram2('iceman', 'cinemma'));

  // --------------------

  const anagramParser = (str) => str.toLowerCase().split('').sort().join('');
  const isAnagram4 = (str1, str2) =>
    anagramParser(str1) === anagramParser(str2);

  console.log(isAnagram4('iceman', 'cinema'));
  console.log(isAnagram4('iceman', 'cinemma'));

  // -----------------------------

  const isAnagram3 = (word1, word2) => {
    const arr1 = Array.from(word1).sort();
    const arr2 = Array.from(word2).sort();

    while (arr1.length > 0) {
      if (arr1.pop() !== arr2.pop()) {
        return false;
      }
    }
    return true;
  };
  console.log(isAnagram3('iceman', 'cinema'));
  console.log(isAnagram3('iceman', 'cinemma'));

  return <div>String methods</div>;
};
