import './styles.css';

export function Exercise() {
  const value1 = 5;
  const value2 = 3;

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function getWelcomeMessage(name, amount) {
    return `Witaj ${name}! Jesteś ${amount} uzytkownikiem odwiedzającym tę stronę!`;
  }

  const cars = ['Audi', 'VW', 'Seat', 'Skoda'];

  const multiplyResult = multiply(value1, value2);

  return (
    <div>
      <b>Wynik mnozenia: {multiplyResult}</b>

      <hr />

      <h4>Auta:</h4>

      <ol>
        {cars.map((car) => {
          return <li>{car}</li>;
        })}
      </ol>

      <hr />

      <p>Definiowanie funkcji</p>
      <pre>
        <code>
          {`
            function multiply(num1, num2) {
                return num1 * num2;
            }
            
            const result = multiply(9, 9)  // wynik 81
            `}
        </code>
      </pre>

      <section>
        <h2>Wykorzystywanie funkcji - przykłady</h2>
        <pre>
          <code>9 * 9 = {multiply(9, 9)}</code>
        </pre>
        <pre>
          <code>{getWelcomeMessage('Jon', 129384)}</code>
        </pre>
      </section>
    </div>
  );
}
