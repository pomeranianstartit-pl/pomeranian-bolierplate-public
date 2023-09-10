import './styles.css';

export const Blok22Warmup = () => {
  const wagi = [
    { letter: 'A', score: 5 },
    { letter: 'E', score: 15 },
    { letter: 'I', score: 6 },
    { letter: 'O', score: 2 },
    { letter: 'U', score: 0 },
  ];

  //  //Concat function example: skleja personalData2 z accountValue
  //  const cocatResult = personalData2.concat(accountValue);
  // const multiSumSumMore = (multi, val1, val2, ...args) => {
  //   const sumArgs = args.reduce((prev, curr) => prev + curr, 0);
  //   return multi * (val1 + val2 + sumArgs);
  // };

  // const concatArr = (...args) => {
  //   let newArray =[];
  //   for (!Array.isAray(arg)) {
  //     console.log('zły parametr');
  //     return;
  //   } else{ newArray =newArray.concat(arg)}
  //   }

  //   return newArray;
  // };
  // concatArr([1, 2, 3], [4, 5], [8]);

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
      <section>
        <h2>Add do zadania 1</h2>
        <div></div>

        <h2>Add do zadania 2</h2>
        <div></div>
      </section>
    </article>
  );
};
