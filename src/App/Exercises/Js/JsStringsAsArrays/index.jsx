import './styles.css';

export const JsStringsAsArrays = () => {
  function examplesStrings() {
    let sample = 'Sample';
    // sample = sample.replace('m', 'r');
    // console.log(sample);
    const przyklad = [];
    for (let index = 0; index < sample.length; index++) {
      przyklad.push(sample.charAt(index) + ':' + sample.charCodeAt(index));
    }
    const sample2 = 'Yellow';
    return {
      tekst: 'Omega',
      tablica: ['Alfa', 'Beta'],
      tekstLength: 'adkvnajnvka'.length,
      tablicaLength: [1, 2, 4, 5, 6].length,
      przykład: przyklad.join(' '),
      simple: [...sample]
        .map(function (litera) {
          return litera + '-';
        })
        .join(''),
      sliceExample: sample.slice(0, 2),
      tekstSplit: '1, 2, 3, 4'.split(', '),
      tekstConcat: sample.concat(sample2),
    };
  }
  function excercises() {
    // Napisz funkcję zmieniającą podany string na camelCase

    function toCamelCase(input) {
      return input
        .split(' ')
        .map(function (value, index) {
          if (index === 0) return value.toLowerCase();
          const [firstLetter, ...rest] = [...value];
          const wynik = firstLetter.toUpperCase() + rest.join('');
          return wynik;
        })
        .join('');
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
