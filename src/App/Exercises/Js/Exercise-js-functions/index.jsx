import './styles.css';

export function Exercise() {
  const variableForTemplateString = 'is awesome';
  const templateString = `Template string ${variableForTemplateString}`;

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
          <code>{getWelcomeMessage('Jon', 129384)}</code>
        </pre>
      </section>

      <p><h1>Drugie wywołanie funkcji getWelcomeMessage: {getWelcomeMessage('Janek', 2023)}</h1></p>
      <br></br>
      <p><h5>Drugie wywołanie funkcji multiply: {multiply(10, 30)}</h5></p>
      <p id='unique-id'>{templateString}</p>

 
    </div>
  );
}
