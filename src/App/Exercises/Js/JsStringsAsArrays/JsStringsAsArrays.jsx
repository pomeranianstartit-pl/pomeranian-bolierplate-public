import './styles.css';

export const JsStringsAsArrays = () => {
  function examplesStrings() { }
  function excercises() {
    // Napisz funkcję zmieniającą podany string na camelCase

    function toCamelCase(input) {
      // TODO:
      return input.split('').map(function (value, index) {
        if (index === 0) return value.toLowerCase();
        const [firstLetter, ...rest] = [...value];
        const wynik = firstLetter.toUpperCase() + rest.join('');
        return wynik;
      });
    }

    // Napisz funkcję, która przyjmuje dwa napisy i zwraca tablicę z literami,

    // które występują w obu napisach.

    function commonLetters(a, b) {
      // TODO:
      const aArray = [...a];
      aArray.filter(function (letter) {
        if (b.includes(letter)) return true;
      });
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

  return (
    <article>
      <h1>String as an Array</h1>
      <section>
        <h2>Podobieństwa łąńcucha tekstowego (string) do tablicy (array)</h2>
        <p>
          Zobacz zawartość <code>function examplesStrings()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(examplesStrings())}</code>
        </p>
      </section>
      <section>
        <h2>Ćwiczenia</h2>
        <p>
          Zobacz zawartość <code>function excercises()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(excercises())}</code>
        </p>
      </section>
    </article>
  );
};
