import './styles.css';

export function Exercise() {
  const list = [
    {
      name: 'Wojtek',
      surname: 'Abc',
      age: '48',
    },
    {
      name: 'Marta',
      surname: 'Nowak',
      age: '28',
    },
  ];

  function displayList(list) {
    return list.map((listElement) => {
      return (
        <div>
          Moje imię to {listElement.name}, nazwisko to {listElement.surname}.
          Mam {listElement.age} lat
        </div>
      );
    });
  }

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
          <br />
          <code>9 * 8 = {multiply(9, 8)}</code>
          <br />
          <code>9 * 7 = {multiply(9, 7)}</code>
        </pre>
        <pre>
          <code>{getWelcomeMessage('Jon', 129384)}</code>
        </pre>
        <section>
          <h2>Lista ludzi w tablicy</h2>
          {displayList(list)}
        </section>
      </section>
    </div>
  );
}
