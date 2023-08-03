import './styles.css';

export const JsObjectsBasics = () => {
  function exampleObjectDefinition() {
    const obj = {
      property1: 'value1',
      'property text': 'jakis text',
      tablica: [0, 1, 2, 3],
      // function() {
      //   return 1
      // }
    };

    return {
      obj,
    };
  }

  function exampleAccessingObjects() {
    const obiekt = {
      one: 1,

      two: 'Two',

      three: [1, 2, 3],

      'property 4': 'Hello World!',

      'property delete': 'Good bye',
    };

    const { two, ...rest } = obiekt;
    delete obiekt['property delete'];

    return {
      dotAccess: obiekt.one,
      bracketAccess: obiekt['property 4'],
      bracketAccess2: obiekt['two'],
      spreadOperator: { ...obiekt },
      rest,
    };
  }

  function exampleAccessingObjectsPart2() {
    const obiekt1 = { one: 1, two: 'white' };
    const obiekt2 = { one: 2, million: 'black' };
    const obiektAssigned = Object.assign(obiekt1, obiekt2);

    return {
      obiekt1,
      obiekt2,
      obiektAssigned,
      obiektEnries: Object.entries(obiekt2),
      obiektValues: Object.values(obiekt2),
      obiektKeys: Object.keys(obiekt2),
    };
  }

  function exampleAccessingObjectsFreeze() {
    const obiekt1 = { one: 1, two: 'white' };
    const obiekt2 = { one: 2, million: 'black' };
    const test = { test: 'Test' }
    Object.freeze(obiekt1)
    // Object.assign(obiekt1, test)
    Object.seal(obiekt2)
    obiekt2.one = 100

    return {
      isObjectFrozen: Object.isFrozen(obiekt1),
      isObjectFrozen2: Object.isFrozen(obiekt2),
      obiekt2
    }
  }

  return (
    <article>
      <h1>Obiekty</h1>

      <section>
        <h2>Obiekt jako key:value store</h2>

        <p>Obiekty jako zbiór funkcji często wykorzystywane są w eksportach</p>

        <p>
          Zobacz zawartość <code>function exampleObjectDefinition()</code>
        </p>

        <p>
          wynik: <code>{JSON.stringify(exampleObjectDefinition())}</code>
        </p>
      </section>

      <section>
        <h2>Dostęp do obiektów</h2>

        <p>
          Zobacz zawartość <code>function exampleAccessingObjects()</code>
        </p>

        <p>
          wynik: <code>{JSON.stringify(exampleAccessingObjects())}</code>
        </p>
      </section>

      <section>
        <h2>Dostęp do obiektów c.d.</h2>

        <p>
          Zobacz zawartość <code>function exampleAccessingObjectsPart2()</code>
        </p>

        <p>
          wynik: <code>{JSON.stringify(exampleAccessingObjectsPart2())}</code>
        </p>

        <cite>
          The Object.assign() static method copies all enumerable own properties
          from one or more source objects to a target object. It returns the
          modified target object.
        </cite>
      </section>

      <section>
        <h2>Dostęp do obiektów c.d. ...</h2>

        <p>
          Zobacz zawartość <code>function exampleAccessingObjectsFreeze()</code>
        </p>

        <p>
          wynik: <code>{JSON.stringify(exampleAccessingObjectsFreeze())}</code>
        </p>
      </section>
    </article>
  );
};
