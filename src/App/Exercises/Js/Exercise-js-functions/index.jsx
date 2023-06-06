import './styles.css';

export function Exercise() {
  const variableorTemplateString = 'is awesome!';
  const templateString = `Template string ${variableorTemplateString}`;
  function multiply(num1, num2) {
    return num1 * num2;
  }

  function getWelcomeMessage(name, amount) {
    return `Witaj ${name}! Jesteś ${amount} uzytkownikiem odwiedzającym tę stronę!`;
  }

  return (
    <div>
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
          <code>{getWelcomeMessage('Jon', 666)}</code>
        </pre>
      </section>

      <p>Drugie wywołanie funkcji multiply: {multiply(10, 10)}</p>
      <br />
      <p>Trzecie wywołanie funkcji multiply: {multiply(111, 6)}</p>
      <br />
      <h6>{getWelcomeMessage('ZXC', 12312)}</h6> <br />
      <p>Nasz template string:</p>
     <p id='unique'> {templateString}</p>
    </div>
  );
}
