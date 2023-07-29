import './styles.css';

export const JsArrayMethodsExercise = () => {
  function excercise1() {
    function sameNumbers(tablica1, tablica2) {
      const wynik = [];
      for (let index = 0; index < tablica1.length; index++) {
        for (let i = 0; i < tablica2.length; i++) {
          if (tablica1[index] === tablica2[i]) {
            wynik.push(tablica2[i]);
          }
        }
      }
      return wynik;
    }

    const result = sameNumbers([1, 2, 3, 4, 5], [3, 5, 7, 9]);

    console.log('Excercise 1 result: ', result);
  }

  function excercise2() {
    function averageFromArray(tablica) {
      return tablica.reduce((acc, curr) => (acc += curr), 0) / tablica.length;
    }

    const result = averageFromArray([1, 2, 3, 4, 5, 6]);

    console.log('Excercise 2 result: ', result);
  }

  function excercise3() {
    function twoDimensionalArray(x, y) {
      const tablicaX = [];
      const tablicaY = [];
      for (let i = 0; i < x; i++) {
        for (let n = 0; n < y; n++) {
          tablicaY[n] = 0;
        }
        tablicaX[i] = tablicaY;
      }
      return tablicaX;
    }

    const result = twoDimensionalArray(5, 8);

    console.log('Excercise 3 result: ', result);
  }

  function excercise4() {
    function reverseFun(tablica) {
      return tablica.reverse();
    }

    const result = reverseFun([1, 2, 3, 4, 5]);

    console.log('Excercise 4 result: ', result);
  }

  function excercise5() {
    function getNames(tablicaObiektow) {
      return tablicaObiektow.map((e) => {
        return e.name;
      });
    }

    const result = getNames([
      { name: 'John', surname: 'Snow' },

      { name: 'Emily', surname: 'Blunt' },

      { name: 'Peter', surname: 'Parker' },
    ]);

    console.log('Excercise 5 result: ', result);
  }

  return (
    <article>
      <h1>Tablice (arrays) ćwiczenia</h1>

      <section>
        <h4>
          1) napisz funkcję, która przyjmuje dwie tablice i zwraca nową tablicę,
          która zawiera tylko elementy, które występują w obu tablicach
        </h4>

        <code>sameNumbers([1, 2, 3, 4, 5], [3, 5, 7, 9]) wynik [3, 5]</code>

        <br />

        <button onClick={excercise1}>Uruchom 1</button>
      </section>

      <section>
        <h4>2) napisz funkcję, która liczy średnią z liczb w tablicy</h4>

        <code>averageFromArray([1, 2, 3, 4, 5, 6]) wynik 3.5</code>

        <br />

        <button onClick={excercise2}>Uruchom 2</button>
      </section>

      <section>
        <h4>
          3) napisz funkcję, która przyjmuje 2 parametry i tworzy 2 wymiarową
          tablice wypełnioną 0 gdzie x i y to wymiary 2 wymiarowej tablicy
        </h4>

        <code>twoDimensionalArray(1,3) wynik [[0, 0, 0]]</code>

        <br />

        <button onClick={excercise3}>Uruchom 3</button>
      </section>

      <section>
        <h4>
          4) napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę
          zawierającą te same liczby, ale w odwróconej kolejności
        </h4>

        <code>reverseFun([1, 2, 3, 4, 5]) wynik [5, 4, 3, 2, 1]</code>

        <br />

        <button onClick={excercise4}>Uruchom 4</button>
      </section>

      <section>
        <h4>
          5) napisz funkcję, która przyjmuje tablicę obiektów, gdzie każdy
          obiekt reprezentuje osobę z imieniem i wiekiem, i zwraca tablicę z
          samymi imionami osób
        </h4>

        <code>getNames(people) wynik ["John", "Emily", "Peter"]</code>

        <br />

        <button onClick={excercise5}>Uruchom 5</button>
      </section>
    </article>
  );
};
