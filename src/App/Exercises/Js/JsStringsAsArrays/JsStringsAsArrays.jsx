import './styles.css';

export const JsStringsAsArrays = () => {
  function excercises() {
    // Napisz funkcję zmieniającą podany string na camelCase

    function toCamelCase(input) {
      // TODO:
    }

    // Napisz funkcję, która przyjmuje dwa napisy i zwraca tablicę z literami,

    // które występują w obu napisach.

    function commonLetters(a, b) {
      // TODO:
    }

    // Napisz funkcję, która przyjmuje tablicę słów i zwraca tablicę z liczbami

    // określającymi ilość samogłosek w tych słowach

    function wordLengths(input) {
      // const vowels = ['a', 'e', 'i', 'o', 'u'];
      // TODO:
    }

    // Napisz funkcję, która pobiera dwa napisy i sprawdza, czy są one anagramami

    function isAnagram(x, y) {
      // TODO:
    }

    return {
      toCamelCase: toCamelCase('Jakiś długi text'), // wynik: "jakiśDługiText"

      commonLetters: commonLetters('Hello', 'World'), // wynik: ["l", "o"]

      wordLengths: wordLengths(['apple', 'banana', 'orange']), // wynik: [2, 3, 3]

      isAnagramCase1: isAnagram('iceman', 'cinema'), // wynik: true

      isAnagramCase2: isAnagram('iceman', 'cinemma'), // wynik false
    };
  }
};
