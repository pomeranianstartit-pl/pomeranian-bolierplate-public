import './styles.css';

export const JsArraysBasics = () => {
  function exampleArraySyntax() {
    const tablica1 = [
      1,
      'text',
      [true, false],
      { firstName: 'Janek', lastName: 'Nowak' },
    ];
    return tablica1;
  }
  function exampleAddingValuesToArrays() {
    const wynik = [1, 2];
    wynik.push(3, 4);
    wynik.push('inny text', 5);
    const tablica2 = new Array(6).fill(10);
    const tablica3 = Array(4).fill(1);
    wynik[0] = 'jednak 1';
    wynik[9] = 'index 9';
    const tablicaDestrukturyzacja = [...wynik, 'Kanada'];
    const tablicaDestrukturyzacja2 = ['Kanada', ...wynik];
    wynik.unshift(-1, -2);

    return {
      wynik,
      tablica2,
      tablica3,
      index0: wynik[1],
      tablicaDestrukturyzacja,
      tablicaDestrukturyzacja2,
    };
  }

  function exampleReadingFromArrays() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];

    const tablica1 = tablica.pop();
    const tablica2 = tablica.at(1);
    const [trzy, cztery] = tablica;
    const [head, second, ...rest] = tablica;
    const wynik = {
      tablica1,
      tablica,
      tablica2,
      trzy,
      cztery,
      head,
      second,
      rest,
    };
    return wynik;
  }
  function exampleArrayCopy() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];

    const kopia = [...tablica];
    const tablica2 = new Array(...tablica);
    const tablica3 = tablica.pop();
    const tablica4 = structuredClone(tablica2);
    const tablica5 = tablica.slice(0, 1);
    const tablica6 = tablica.slice(-1);
    const tablica7 = tablica2.splice(-2);
    const wynik = {

      tablica,
      tablica2,
      tablica3,
      tablica4,
      tablica5,
      tablica6,
      tablica7,
    };
    return wynik;
  }

  function exampleArrayConcatenation() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const tablica1 = tablica.slice(0, 3);
    const tablica2 = tablica.slice(-3);
    const tablica3 = [...tablica1, ...tablica2];
    const tablica4 = tablica1.concat(tablica2);
    const tablicaFlat = [tablica1, tablica2].flat();
    const coSieDzieje = ' Co sie stalo';
    const wynikCoSieDzieje = [...tablica1, ...coSieDzieje];
    // const coSieDzieje2 = ' Co sie stalo2';
    // const wynikCoSieDzieje2 = [...tablica1, ...coSieDzieje]

    const wynik = {
      tablica,
      tablica1,
      tablica2,
      tablica3,
      tablica4,
      tablicaFlat,
      wynikCoSieDzieje,
    };
    return wynik;
  }
  function exampleIndexOfLength() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];

    const tablicaIndexOfUSA = tablica.indexOf('USA');
    const tablicaIndexOfPoland = tablica.indexOf('Poland');
    const tablica1 = tablica.slice(tablicaIndexOfPoland + 1);
    const tablicaDlugosc = tablica.length;

    const wynik = {
      tablicaIndexOfUSA,
      tablicaIndexOfPoland,
      tablicaDlugosc,
      tablica1,
    };
    return wynik;
  }
  function examplePerformance() {
    const times = new Array(2000).fill(0);
    console.time('array-push');
    const test = new Array(1000).fill('test');

    times.forEach(() => test.push('hello'));
    console.timeEnd('array-push');
    // console.log(test);
  }
  //trening
  // const times = new Array(1).fill('pierwsza tablica')

  // const test = new Array(4).fill('druga tablica')

  // times.forEach(() => test.push('trzecia tablica'));
  // console.log(times);
  // console.log(test);
  //trening

  // const ages = [1, 2];
  // const newAges = [5, 6, 7, 8];

  // ages.forEach(function (age) {
  //   newAges.push(age + 10);
  // });

  // console.log(newAges);

  function exampleForLoop() {
    const tablica = Array(10).fill(0);
    const wynik = [];
    for (let index = 0; index < tablica.length; index++) {
      wynik[index] = tablica.at(index) + index;
    }

    return wynik;
  }
  function exampleWhileLoop() {
    const tablica = Array(10).fill(0);
    const wynik = [];
    let index = 0;
    while (index < tablica.length) {
      wynik[index] = tablica.at(index) + index;
      index = index + 1
    }

    return wynik;
  }
  function exampleContinueBreakReturn() {
    const tablica = Array(10).fill(5);
    const wynik = [];
    for (let index = 0; index < tablica.length; index++) {
      if (index === 2) continue;
      if (index === 7) break;
      if (wynik === 6) return wynik
      wynik.push(index)
    }

    return wynik;
  }
  function exampleForOfLoop() {
    const tablica = Array(10).fill(3);
    const wynik = [1, 2, 3, 4];

    for (const elementTablicy of tablica) {
      wynik.push(elementTablicy * 2)
    }
    return { tablica, wynik };

  }
  // infinity loop
  // arrays vs objects
  function exampleLoopsIssues() {
    const tablica = Array(10).fill(2);
    const wynik = [];
    for (const elOfArray of tablica) {
      wynik.push(elOfArray * 4)
    }
    return wynik;
  }
  function exampleFind() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = tablica.find((element) => element.includes('c'));
    return wynik;
  }
  function exampleFilter() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = tablica.filter((element, index) => element.includes('n'));
    return wynik;
  }
  function exampleSort() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = tablica.sort((pierwszaWartosc, drugaWrtosc) => pierwszaWartosc.localeCompare(drugaWrtosc));
    return wynik;
  }
  function exampleJoin() {
    const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    const wynik = tablica.join();
    return wynik;
  }
  function exampleReduce() {
    // const tablica = ['Poland', 'Mexico', 'USA', 'Kanada', 'Italy'];
    // function sumLenght(previousValue, currentValue) {
    //   return previousValue = previousValue + currentValue.length;

    // }
    // const wynik = tablica.reduce(sumLenght, 0);

    const tablica = [1, 2, 3]

    function callback(pV, cV) {
      return cV = cV * pV
    }

    const wynik = tablica.reduce(callback, 10)
    return wynik;
  }

  return (
    <article>
      <h1>Tablice (Arrays)</h1>
      <section>
        <h2>jak definiujemy tablicę</h2>
        <p>
          <code>const array_name = [item1, item2, ...]; </code>
        </p>
        <ul>
          <li>
            przyjmuje się, że tablice definiujemy zwykle używając{' '}
            <code>const</code>
          </li>
          <li>item1,... może być dowolnego typy, również inną tablicą</li>
        </ul>
        <p>
          Zobacz zawartość <code>function exampleArraySyntax()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(exampleArraySyntax())}</code>
        </p>
      </section>
      <section>
        <h2>Dodawanie wartości do tablicy (array)</h2>
        <p>
          Zobacz zawartość <code>function exampleAddingValuesToArrays()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(exampleAddingValuesToArrays())}</code>
        </p>
      </section>
      <section>
        <h2>Oczytywanie wartości z tablicy (array)</h2>
        <p>
          Zobacz zawartość <code>function exampleReadingFromArrays()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(exampleReadingFromArrays())}</code>
        </p>
      </section>
      <section>
        <h2>Kopiowanie wartośći z tablicy (wszystkich lub części)</h2>
        <p>
          Zobacz zawartość <code>function exampleArrayCopy()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(exampleArrayCopy())}</code>
        </p>
      </section>
      <section>
        <h2>Łączenie tablic (arrays)</h2>
        <p>
          Zobacz zawartość <code>function exampleArrayConcatenation()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(exampleArrayConcatenation())}</code>
        </p>
      </section>
      <section>
        <h2>[].indexOf oraz [].length</h2>
        <p>
          Zobacz zawartość <code>function exampleIndexOfLength()</code>
        </p>
        <p>
          wynik: <code>{JSON.stringify(exampleIndexOfLength())}</code>
        </p>
      </section>
      <section>
        <h2>Mutowaleni(mutable) i niemutowalne (immutable) operacje</h2>
        <p>Mutowalne - gdy zmienia zawartość tabeli</p>
        <p>Niemutowalne - gdy nie zmienia zawartości tabeli</p>
        <p>Przykłady w poprzednich sekcjach</p>
      </section>
      <section>
        <h2>wydajność operacji ... vs concat, other</h2>
        <p>
          Zobacz zawartość <code>function examplePerformance()</code>
        </p>
        <p>
          wynik w konoli przeglądarki po kliknięciu{' '}
          <button type="button" onClick={examplePerformance}>
            Kliknij
          </button>
        </p>
      </section>
      <section>
        <h2>Po co używamy tablic</h2>
        <p>na przykład zamiast</p>
        <p>
          <code>const valueOne = 100</code>
        </p>
        <p>
          <code>const valueTwo = 200</code>
        </p>
        <p>
          <code>const valueThree = 321</code>
        </p>
        <p>
          <code>...</code>
        </p>
        <p>
          <code>valueOneHundred = 10000</code>
        </p>
        <p>
          Jeżeli teraz dla każdej z tych zmiennych chcemy wykonać jakąś
          operację, na przykład wypisać używając console.log(); to wymaga to
          napisanie dużej liczby linii kodu.
        </p>
        <p>Jeżeli te dane mamy zapisane w tablicy, to możemy:</p>
        <p>
          <code>const values = [ 100, 200, 321, ..., 1000 ]</code>
        </p>
        <p>
          <code>values.forEach(console.log)</code>
        </p>
      </section>
      <section>
        <h2>Iterowanie po tablicy</h2>
        <h3>for</h3>
        <p>
          Zobacz zawartość <code>function exampleForLoop()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleForLoop())}</code>
        </p>
        <h3>while</h3>
        <p>
          Zobacz zawartość <code>function exampleWhileLoop()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleWhileLoop())}</code>
        </p>
        <h3>continue, break, return</h3>
        <p>
          Zobacz zawartość <code>function exampleContinueBreakReturn()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleContinueBreakReturn())}</code>
        </p>
        <h3>for...of loop</h3>
        <p>
          Zobacz zawartość <code>function exampleForOfLoop()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleForOfLoop())}</code>
        </p>
        <h3>issues with loops</h3>
        <ul>
          <li>infinity loop</li>
          <li>arrays vs objects</li>
        </ul>
        <p>
          Zobacz zawartość <code>function exampleLoopsIssues()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleLoopsIssues())}</code>
        </p>
      </section>
      <section>
        <h2>Array.API</h2>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">
          Dokumentacja
        </a>
        <br />
        <a href="https://www.w3schools.com/js/js_arrays.asp">
          Ćwiczenia dodatkowe
        </a>
        <p>
          Wizualizacja <br />
          <img
            src="https://i.stack.imgur.com/rPjLb.jpg"
            alt="funkcje array"
            width="600"
          />
        </p>
        <h3>find</h3>
        <p>
          Zobacz zawartość <code>function exampleFind()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleFind())}</code>
        </p>
        <h3>filter</h3>
        <p>
          Zobacz zawartość <code>function exampleFilter()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleFilter())}</code>
        </p>
        <h3>sort</h3>
        <p>
          Zobacz zawartość <code>function exampleSort()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleSort())}</code>
        </p>
        <h3>join</h3>
        <p>
          Zobacz zawartość <code>function exampleJoin()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleJoin())}</code>
        </p>
        <h3>reduce</h3>
        <p>
          Zobacz zawartość <code>function exampleReduce()</code>
        </p>
        <p>
          Wynik: <code>{JSON.stringify(exampleReduce())}</code>
        </p>
      </section>
    </article>
  );
};
