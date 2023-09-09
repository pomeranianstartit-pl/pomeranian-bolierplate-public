import './styles.css';

export const Blok22Warmup = () => {
  const wagi = [
    { letter: 'A', score: 5 },
    { letter: 'E', score: 15 },
    { letter: 'I', score: 6 },
    { letter: 'O', score: 2 },
    { letter: 'U', score: 0 },
  ];

  function concatArr(...args) {
    // Sprawdź, czy wszystkie argumenty są tablicami
    for (const arg of args) {
      if (!Array.isArray(arg)) {
        return "zły parametr";
      }
    }
  
    // Łącz wszystkie tablice i zwróć wynik
    const concatenatedArray = [].concat(...args);
    return concatenatedArray;
  }
  
  function imionaWagi(imiona, wagi) {
    // Skonstruuj nową tablicę z imionami i sumą wag
    const imionaZWagami = imiona.map((imie) => {
      const lowerCaseImie = imie.toLowerCase();
      const score = wagi[lowerCaseImie] || 0;
      return { name: imie, score };
    });
  
    // Posortuj tablicę względem sumy wag w kolejności malejącej
    imionaZWagami.sort((a, b) => b.score - a.score);
  
    return imionaZWagami;
  }
  
  // Przykłady użycia
  const wynik1 = concatArr([1, 2, 3], [4, 5], [8]);
  console.log(wynik1); // [1, 2, 3, 4, 5, 8]
  
  const wynik2 = concatArr([1, 2, 3], [4, 5], 'text');
  console.log(wynik2); // "zły parametr"
  
  const wagi1 = {
    janek: 20,
    zosia: 13,
  };
  
  const wynik3 = imionaWagi(["Janek", "Zosia"], wagi);
  console.log(wynik3); // [{name: "Janek", score: 20}, {name: "Zosia", score: 13}]

  return (
    <article>
      <h1>Rozgrzewka przed blokiem 22</h1>
      <section>
        <h2>Zadanie 1</h2>
        <p>
          napisz funkcję, która przyjmuje niezliczoną ilość argumentów - muszą
          to być tablice. Na przykład{' '}
        </p>
        <p>
          funkcja zwraca jedną tablicę z elementami wszystkich tablic podanych w
          argumencie.
        </p>
        <p>
          <code>
            concatArr([1, 2, 3], [4, 5], [8]) wynik [1, 2, 3, 4, 5, 8]
          </code>
        </p>
        <p>
          <code>concatArr([1, 2, 3], [4, 5], 'text') wynik "zły parametr"</code>
        </p>
      </section>
      <section>
        <h2>Zadanie 2</h2>
        <p>
          stwórz jako funkcję która przyjmuje 2 argumenty imiona oraz
          wagę/punktację.
        </p>
        <p>
          Zwraca posortowaną tablice imion z dodanym parametrem sumaWag
          niemutujaca oryginalnej
        </p>
        <p>
          <code>const wagi = {JSON.stringify(wagi)}</code>
        </p>
        <p>
          <code>{`imionaWagi(["Janek", "Zosia"], wagi)`}</code>
        </p>
        <p>
          wynik{' '}
          <code>{`[{name: "janek", score: 20}, {name:
"zosia", score: 13}]`}</code>
        </p>
      </section>
    </article>
  );
};
