import './styles.css';

export const JsObjectsBasics = () => {
  function exampleObjectDefinition() {
    const obj = {
      property: 'value1',
      2: 'value2',
      'property 3': 'value 3',
      tablica: ['222', 23],
      fun() {
        return 1;
      },
    };
    return { obj };
  }
  function exampleAccessingObjects() {
    const obiekt = {
      one: 1,
      two: 'Two',
      three: [1, 2, 3],
      'property 4': 'Hello World!',
      'property delete': 'Good bye',
    };
    const { two, ...restOf } = obiekt;
    delete obiekt['property delete'];
    return {
      dotAccess: obiekt.one,
      bracketAccess: obiekt['property 4'],
      spreadOperato: { ...obiekt },
      restOf,
    };
  }
  function exampleAccessingObjectsPart2() {
    const obj1 = { one: 1, two: 'White' };
    const obj2 = { one: 3, milion: 'Rainbow' };
    const objectAssigned = Object.assign(obj1, obj2);
    return {
      obj1,
      obj2,
      objectAssigned,
      objectEntries: Object.entries(obj2),
      objectValues: Object.values(obj2),
      objectKeys: Object.keys(obj2),
    };
  }
  function exampleAccessingObjectsFreeze() {
    const obj1 = { one: 1, two: 'White' };
    const obj2 = { one: 3, milion: 'Rainbow' };
    const test = { test: 'Test' };
    Object.freeze(obj1);
    Object.assign(test, obj1);
    Object.seal(obj2);
    // Object.assign(obj2, test);
    obj2.one = 102;
    return {
      isObjectFrozen: Object.isFrozen(obj1),
      isObjectFrozen2: Object.isFrozen(obj2),
      obj2,
    };
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
