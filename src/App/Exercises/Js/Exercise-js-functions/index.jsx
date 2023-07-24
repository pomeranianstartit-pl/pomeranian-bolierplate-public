import './styles.css';

export function Exercise() {
  function multiply(num1, num2) {
    return num1 * num2;
  }

  function getWelcomeMessage(Asia, Bedra) {
    return `Witaj ${Asia}! Jesteś ${Bedra} uzytkownikiem odwiedzającym tę stronę!`;
  }

  return (
    <div>
      <p>Definiowanie funkcji</p>
      <pre></pre>

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
