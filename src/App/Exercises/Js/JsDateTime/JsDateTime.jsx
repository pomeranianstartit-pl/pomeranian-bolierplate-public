import './styles.css';

export const JsDateTime = () => {
  function expensiveFunction() {
    const emptyTable = [];

    for (let i = 0; i < 1e7; i++) {
      emptyTable.push(i);
    }
  }

  function measurePerformance1() {
    const start = performance.now();

    expensiveFunction();

    console.log(`P1: elapsed ${Math.round(performance.now() - start)} ms`);
  }

  function measurePerformance2() {
    const start = Date.now();

    expensiveFunction();

    console.log(`P2: elapsed ${Math.round(Date.now() - start)} ms`);
  }

  return (
    <article>
      <h1>Data i czas</h1>
      <section>
        <h2>
          Obiekt <code>Date</code>
        </h2>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date">
          Dokumentacja
        </a>
        <br />
        <p>Istotne zagadnienia</p>
        <ul>
          <li>
            Format daty (use google to find <code>date formats</code> )
          </li>
          <li>
            Omówiony przykład{' '}
            <a href="https://pl.wikipedia.org/wiki/ISO_8601">iso8601 </a>
            czyli <code>YYYY-MM-DDTHH:mm:ss.sssZ</code>
          </li>
          <li>
            Czym jest{' '}
            <a href="https://pl.wikipedia.org/wiki/Strefa_czasowa">timezone</a>
          </li>
        </ul>
        <img
          width={500}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/World_Time_Zones_Map.png/750px-World_Time_Zones_Map.png"
          alt="wikipedia time zones"
        />
      </section>
      <section>
        <h2>Formaty daty</h2>
        <ul>
          <li>
            co oznacza 0 w timestamp <code>Date.now() = </code>
            {Date.now()}
            <i>
              ( returns the number of milliseconds elapsed since the epoch,
              which is defined as the midnight at the beginning of January 1,
              1970, UTC )
            </i>
          </li>
          <li>
            <code>
              Date.parse('01 Jan 1970 00:00:00 UTC') ={' '}
              {Date.parse('01 Jan 1970 00:00:00 UTC')}
            </code>
          </li>
          <li>Dlaczego timezone jest istotne Date.UTC(1970)</li>
          <li>
            {Date.UTC(1970, 6)} {new Date(1970, 6).toString()}
          </li>
          <li onClick={measurePerformance1}>
            Performacnce using <code>performance.now()</code>
          </li>
          <li onClick={measurePerformance2}>
            Performacnce using <code>Date.now()</code>
          </li>
        </ul>
      </section>
    </article>
  );
};
