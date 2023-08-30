import './styles.css';

export const JsObjectsBasics = () => {
  function exampleObjectDefinition() { }
  function exampleAccessingObjects() { }
  function exampleAccessingObjectsPart2() { }
  function exampleAccessingObjectsFreeze() { }

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
