import './styles.css';

export function Exercise() {
  const list = [{
    name: 'Wojtek',
    surname: 'Abc',
    age: 48,
  }, 
  {
    name: 'Kasia',
    surname: 'Cbd',
    age: 28,
  }];
  function displayList(list) {
    list.map((listElement) => {
    const test = 'test'
    return <div>
    Moje imię to {listElement.name}, nazwisko {listElement.surname}. Mam {listElement.age} lat.
      </div>
    })
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
          <code>4 * 7 = {multiply(4, 7)}</code>
        </pre>
        <pre>
          <code>{getWelcomeMessage('Jon', 129384)}</code>
        </pre>
      </section>
    </div>
  );
}
