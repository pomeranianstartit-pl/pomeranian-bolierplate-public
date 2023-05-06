import './styles.css';

export function Exercise() {
  const list = [
    {
      name: 'Karol',
      surname: 'qwe',
      age: '23',
    },
    { name: 'Kasia', surname: 'asd', age: '44' },
  ];

  function displaylist(list) {
    return list.map((listelement) => (
      <div>
        moje imie to {listelement.name}, nazwisko {listelement.surname}. Mam{' '}
        {listelement.age} lat.
      </div>
    ));
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function getWelcomeMessage(name, amount) {
    return `Witaj ${name}! Jesteś ${amount} uzytkownikiem odwiedzającym tę stronę!`;
  }

  return (
    <div>
      <section>
        <h2>Lista ludzi</h2>
        {displaylist(list)}
      </section>

      <pre>
        <code>
          {/* {`
            function multiply(num1, num2) {
                return num1 * num2;
            }
            
            const result = multiply(9, 9)  // wynik 81
            `} */}
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
