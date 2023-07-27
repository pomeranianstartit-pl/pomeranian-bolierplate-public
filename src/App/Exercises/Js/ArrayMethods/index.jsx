import './styles.css';

export function Exercise() {
  //3-1

  function wspolneElementy(tablica1, tablica2) {
    const wspolne = tablica1.filter((element) => tablica2.includes(element));
    return wspolne;
  }
  const tablica1 = [1, 2, 3, 4, 5];
  const tablica2 = [3, 4, 5, 6, 7];

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
  const tablicaLiczb = [10, 20, 30, 40, 50];
  const wynikSredniej = srednia(tablicaLiczb);
  console.log(wynikSredniej);
  //3-3
  function utworzTablice2D(x, y) {
    const tablica2D = [];

    for (let i = 0; i < x; i++) {
      const wiersz = [];
      for (let j = 0; j < y; j++) {
        wiersz.push(0);
      }
      tablica2D.push(wiersz);
    }

    return tablica2D;
    console.log(tablica2D(3, 4));
    const wymiarX = 3;
    const wymiarY = 4;
    const dwuwymiarowaTablica = utworzTablice2D(wymiarX, wymiarY);
    console.log(dwuwymiarowaTablica);

    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
  }
  //3-4
  function odwrocTablice(tablica) {
    return tablica.reverse();

    const tablicaLiczb = [1, 2, 3, 4, 5];
    const odwroconaTablica = odwrocTablice(tablicaLiczb);
    console.log(odwroconaTablica); // Wyświetli: [5, 4, 3, 2, 1]
  }

  //3-5
  function pobierzImiona(osoby) {
    const imiona = osoby.map((osoba) => osoba.imie);
    return imiona;
  }
  const osoby = [
    { imie: 'Jan', wiek: 25 },
    { imie: 'Anna', wiek: 30 },
    { imie: 'Piotr', wiek: 22 },
  ];

  const imionaOsob = pobierzImiona(osoby);
  console.log(imionaOsob);

  //CW 5
  //5-1
  function toCamelCase(inputString) {
    const words = inputString.split(' ');
    let camelCase = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
      camelCase +=
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return camelCase;
  }

  // Przykład użycia:
  const inputStr = 'to jest przykładowy string';
  const result = toCamelCase(inputStr);
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
}
