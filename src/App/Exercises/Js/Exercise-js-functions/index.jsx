import './styles.css';

export function Exercise() {
  const variableForTemplateString = 'is awesome!';

  const templateString = 'Template string ${variableForTemplateString}';
 
  function multiply(num1, num2) {
    return (num1 * num2) +12;
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
            
            const result = multiply(7, 7)  // wynik 49
            `}
        </code>
      </pre>

      <section>
        <h2>Wykorzystywanie funkcji - przykłady</h2>
        <pre>
          <code>9 * 9 = {multiply(9, 9)}</code>
        </pre>
        <pre>
          <code>{getWelcomeMessage('Jon', 111111)}</code>
        </pre>
      </section>

      <p>Drugie wywołanie funkcji multiply: {multiply(10, 10)}</p>
      <h1>{getWelcomeMessage('Jon', 111111)}</h1>

      <br />
      <p>Trzecie wywołanie funkcji multiply: {multiply(11, 11)}</p>
      <br />

      <p>Nasz templates string: </p>
      <p id='unique-id'>{templateString}</p>

    </div>
  );
}
