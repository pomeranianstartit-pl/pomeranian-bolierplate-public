import { Link } from 'react-router-dom';
import './styles.css';

export function Exercise() {
  const zmienna = 'is awesome!';
  function multiply(num1, num2) {
    return num1 * num2 + 12;
  }

  function getWelcomeMessage(name, amount) {
    return `Witaj ${name} Snow! Jesteś ${amount} uzytkownikiem odwiedzającym tę stronę!`;
  }

  return (
    <div>
      <h2 className="todo-container__title">
        <Link to="/exercises/js">⯇ JS Function</Link>
      </h2>
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
          <p>wywołanie nowej funkcji: 10 * 10 = {multiply(10, 10)}</p>
        </pre>
        <pre>
          <code>{getWelcomeMessage('Jon', 129384)}</code>
        </pre>
      </section>
      <h1>{getWelcomeMessage('Dominik', 129384)}</h1>
      <p>wywołanie nowej funkcji: 11 * 11 = {multiply(11, 11)}</p>

      <p id="unique_id">nasz string {zmienna}</p>
    </div>
  );
}
