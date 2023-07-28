import './styles.css';

export function Exercise() {
  //3-1

  function wspolneElementy(tablica1, tablica2) {
    const wspolne = tablica1.filter((element) => tablica2.includes(element));
    return wspolne;
  }
  const tablica1 = [1, 2, 3, 4, 5];
  const tablica2 = [3, 5, 7, 9];

  const wynik = wspolneElementy(tablica1, tablica2);
  console.log(wynik);

  //3-2
  function srednia(tablica) {
    if (tablica.length === 0) {
      return 0;
    }

    const suma = tablica.reduce((acc, curr) => acc + curr, 0);
    const srednia = suma / tablica.length;
    return srednia;
  }
  const tablicaLiczb = [1, 2, 3, 4, 5, 6];
  const wynikSredniej = srednia(tablicaLiczb);
  console.log(wynikSredniej);
  //3-3
  function averageFromArray(x, y) {
    // Tworzenie pustej dwuwymiarowej tablicy
    const twoDimensionalArray = [];

    // Wypełnianie tablicy zerami
    for (let i = 0; i < x; i++) {
      twoDimensionalArray.push(Array(y).fill(0));
    }

    return twoDimensionalArray;
  }
  console.log(averageFromArray(1, 1));
  console.log(averageFromArray(1, 2));

  //3-3a inne wyjscie z neta:
  const averageFromArray1 = (x, y) =>
    Array.from({ length: x }, () => Array(y).fill(0));

  console.log(averageFromArray1(1, 1));
  console.log(averageFromArray1(1, 2));

  //3-4
  function reverseArray(array) {
    return array.reverse();
  }

  const TablicaA = [1, 2, 3, 4, 5];
  const odwroconaTablicaA = reverseArray(TablicaA);
  console.log(odwroconaTablicaA);

  //3-5
  function pobierzImiona(osoby) {
    const imiona = osoby.map((osoba) => osoba.imie);
    return imiona;
  }
  const osoby = [
    { imie: 'John', wiek: 25 },
    { imie: 'Emily', wiek: 30 },
    { imie: 'Peter', wiek: 22 },
  ];

  const imionaOsob = pobierzImiona(osoby);
  console.log(imionaOsob);

  //CW 5
  //5-1
  function toCamelCase(String) {
    const words = String.split(' ');
    let camelCase = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
      camelCase +=
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return camelCase;
  }

  const String = 'to jest przykładowy string';
  const result = toCamelCase(String);
  console.log(result);

  //5-2
  function commonLetters(str1, str2) {
    const set1 = new Set(str1.toLowerCase());
    const commonLettersArray = Array.from(set1).filter((char) =>
      str2.toLowerCase().includes(char)
    );
    return commonLettersArray;
  }

  const str1 = 'Hello';
  const str2 = 'World';
  const result2 = commonLetters(str1, str2);
  console.log(result2);

  // szymona
  function commonLetters(str1, str2) {
    const letters1 = new Set(str1);
    const letters2 = new Set(str2);

    return Array.from(letters1).filter((letter) => letters2.has(letter));
  }

  console.log(commonLetters('hello', 'world'));
  //5-3

  function countVowels(wordsArray) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const vowelCounts = [];

    for (const word of wordsArray) {
      const wordLower = word.toLowerCase();
      let count = 0;

      for (const char of wordLower) {
        if (vowels.has(char)) {
          count++;
        }
      }

      vowelCounts.push(count);
    }

    return vowelCounts;
  }

  const wordsArray = ['apple', 'banana', 'orange'];
  const result3 = countVowels(wordsArray);
  console.log(result3);

  //////szymona
  function countVowels(word) {
    const vowels = new Set(['a', 'u', 'i', 'o', 'e', 'y']);
    return Array.from(word.toLowerCase()).filter((letter) => vowels.has(letter))
      .length;
  }

  function wordLengths(words) {
    return words.map((word) => countVowels(word));
  }

  console.log(wordLengths(['apple', 'banana']));

  //5-4
  function areAnagrams(str1, str2) {
    const normalizeString = (str) => {
      let result = '';
      for (const char of str) {
        if (char >= 'a' && char <= 'z') {
          result += char;
        }
      }
      return result.toLowerCase();
    };

    const sortedStr1 = normalizeString(str1).split('').sort().join('');
    const sortedStr2 = normalizeString(str2).split('').sort().join('');

    return sortedStr1 === sortedStr2;
  }

  const str4 = 'iceman';
  const str5 = 'cinema';
  const str6 = 'cinemma';
  const result4 = areAnagrams(str4, str5);
  const result5 = areAnagrams(str4, str6);
  console.log(result4);
  console.log(result5);

  //
  function isAnagram_simple(word1, word2) {
    if (word1.length !== word2.length) {
      return false;
    }

    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');

    return sortedWord1 === sortedWord2;
  }
  // szymona
  function isAnagram(str1, str2) {
    const sortedStr1 = Array.from(str1.toLowerCase()).sort().join();
    const sortedStr2 = Array.from(str2.toLowerCase()).sort().join();

    return sortedStr1 === sortedStr2;
  }

  console.log(isAnagram('iceman', 'nameci'));
}
