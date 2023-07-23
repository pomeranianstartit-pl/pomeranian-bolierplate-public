import './styles.css';

export function Exercise() {
  // PODSTAWOWE OPERATORY MATEMATYCZNE
  const fixedValue = 3.141525;

  // ZŁOŻONE OPERATORY PRZYPISANIA
  let x1 = 5;
  x1 += 5;

  let x2 = 7;
  x2 -= 3;

  // OPERATORY LOGICZNE
  const a = 5;
  const b = '5';
  const c = 7;

  const logic1 = a < c;
  const logic2 = a <= b;
  const logic3 = a === b;
  const logic4 = a == b;

  // KONWERSJA TYPÓW
  const variable = 42;

  return (
    <>
      <h2>Liczby i działania</h2>
      <div className="variables">
        <code>fixedValue=3.141525</code>
        <br />
        <br />
        <code>x1 = 5</code>
        <br />
        <code>x2 = 7</code>
        <br />
        <br />
        <code>a=5</code>
        <br />
        <code>b='5'</code>
        <br />
        <code>c=7</code>
        <br />
        <br />
        <code>variable=42</code>
      </div>
      <h3>Podstawowe operatory matematyczne</h3>
      <ul>
        <li>
          <b>Dodawanie</b> <br />
          <div>
            <code>5 + 3</code>
            &emsp;&rarr;&emsp;
            {5 + 3}
          </div>
          <div>
            <code>'John' + ' ' + 'Wick'</code>
            &emsp;&rarr;&emsp;
            {'John' + ' ' + 'Wick'}
          </div>
        </li>
        <li>
          <b>Odejmowanie</b> <br />
          <div>
            <code>5 - 3</code>
            &emsp;&rarr;&emsp;
            {5 - 3}
          </div>
        </li>
        <li>
          <b>Mnożenie</b> <br />
          <div>
            <code>5 * 3</code>
            &emsp;&rarr;&emsp;
            {5 * 3}
          </div>
        </li>
        <li>
          <b>Dzielenie</b> <br />
          <div>
            <code>5 / 3</code>
            &emsp;&rarr;&emsp;
            {5 / 3}
          </div>
        </li>
        <li>
          <b>Reszta z dzielenia</b> <br />
          <div>
            <code>5 % 3</code>
            &emsp;&rarr;&emsp;
            {5 % 3}
          </div>
        </li>
        <li>
          <b>Potęgowanie</b> <br />
          <div>
            <code>5 ** 3</code>
            &emsp;&rarr;&emsp;
            {5 ** 3}
          </div>
        </li>
        <li>
          <b>Zaokrąglanie do wyznaczonego miejsca po przecinku</b> <br />
          <div>
            <code>fixedValue.toFixed(2)</code>
            &emsp;&rarr;&emsp;
            {fixedValue.toFixed(2)}
          </div>
        </li>
        <li>
          <b>Zaokrąglanie zgodnie z zasadami matematyki</b> <br />
          <div>
            <code>Math.round(2.61)</code>
            &emsp;&rarr;&emsp;
            {Math.round(2.61)}
          </div>
        </li>
        <li>
          <b>Sufit</b> <br />
          <div>
            <code>Math.ceil(2.61)</code>
            &emsp;&rarr;&emsp;
            {Math.ceil(2.61)}
          </div>
        </li>
        <li>
          <b>Podłoga</b> <br />
          <div>
            <code>Math.floor(2.61)</code>
            &emsp;&rarr;&emsp;
            {Math.floor(2.61)}
          </div>
        </li>
        <li>
          <b>Pierwiastkowanie kwadratowe</b> <br />
          <div>
            <code>Math.sqrt(16)</code>
            &emsp;&rarr;&emsp;
            {Math.sqrt(16)}
          </div>
        </li>
        <li>
          <b>Wartość bezwzględna</b> <br />
          <div>
            <code>Math.abs(-17)</code>
            &emsp;&rarr;&emsp;
            {Math.abs(-17)}
          </div>
        </li>
      </ul>

      <h3>Złożone operatory przypisania</h3>
      <ul>
        <li>
          <b>Dodaj i przypisz</b> <br />
          <div>
            <code>x1 += 3</code>
            &emsp;&rarr;&emsp;
            {x1}
          </div>
        </li>
        <li>
          <b>Odejmij i przypisz</b> <br />
          <div>
            <code>x2 -= 3</code>
            &emsp;&rarr;&emsp;
            {x2}
          </div>
        </li>
      </ul>

      <h3>Operatory logiczne</h3>
      <ul>
        <li>
          <code>a &lt; c</code>
          &emsp;&rarr;&emsp;
          {logic1.toString()}
        </li>
        <li>
          <code>a &lt;= b</code>
          &emsp;&rarr;&emsp;
          {logic2.toString()}
        </li>
        <li>
          <code>a === b</code>
          &emsp;&rarr;&emsp;
          {logic3.toString()}
        </li>
        <li>
          <code>a == b</code>
          &emsp;&rarr;&emsp;
          {logic4.toString()}
        </li>
      </ul>

      <h3>Konwersja typów</h3>
      <ul>
        <li>
          <code>variable.toString()</code>
          &emsp;&rarr;&emsp;
          {variable.toString()}
        </li>
        <li>
          <code>parseInt(0.9999)</code>
          &emsp;&rarr;&emsp;
          {parseInt(0.9999)}
        </li>
      </ul>

      <h3>Funkcje agregujące</h3>
      <ul>
        <li>
          <code>Math.min(12, 15, 5, 6)</code>
          &emsp;&rarr;&emsp;
          {Math.min(12, 15, 5, 6)}
        </li>
        <li>
          <code>Math.max(12, 15, 5, 6)</code>
          &emsp;&rarr;&emsp;
          {Math.max(12, 15, 5, 6)}
        </li>
      </ul>
    </>
  );
}
