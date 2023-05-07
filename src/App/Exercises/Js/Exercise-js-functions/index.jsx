import './styles.css';

export function Exercise() {
  const list = [{
    name: 'Weronika', 
    surname: 'Radtke',
    age: '25',
  },{
    name: 'Patrycja',
    surname: 'abc',
    age: '26',
  }];

  function displayList(list) {
    return list.map((listElement) => (
    <div>
      Moję imię to {listElement.name}, nazwisko {listElement.surname}. Mam {listElement.age} lat
    </div>
    )
    )
    // list.map ((listElement) => (
    // <div>
    // Moję imię to {listElement.name}, nazwisko {listElement.surname}. Mam {listElement.age} lat
    // </div> 
    // )
    // ) 
  }

// w kodzie JXS w return: {displayList(list)}

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function getWelcomeMessage(name, amount) {
    return `Witaj ${name}! Jesteś ${amount} uzytkownikiem odwiedzającym tę stronę!`;
  }
  return (
    <div>
      <p>Definiowanie funkcji </p>
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

      <section>
        <h2>Lista ludzi w tablicy:</h2>
        {displayList(list)}
      </section>
    </div>
  );
}
