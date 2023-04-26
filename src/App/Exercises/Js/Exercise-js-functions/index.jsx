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

  const cars = ['Audi', 'Opel', 'Vw'];

  const multiplyResult = multiply(value1, value2);

  return (
    <div>
      <b>Wynik mnożenia: {multiply(value1, value2)}</b>
      <h1>{getWelcomeMessage('Łukasz', 1)}</h1>
      <h1>{getWelcomeMessage('Ola', 2)}</h1>
      <p>Definiowanie funkcji</p>
      <hr />
      <h4>Auta:</h4>
      <ol>
        {cars.map((car) => {
          return <li>{car}</li>;
        })}
      </ol>
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
