import { Link } from 'react-router-dom';
import './styles.css';

export function Exercise() {
  let string1 = 'Jon Snow';

  const string3 = 'Ulubiony bohater z serialu "Gra o tron" to ' + string1;

  const string2 = `Ulubiony bohater z serialu "Gra o tron" to: ${string1}`;

  const imie = 'Dominik Reszczyński';
  let numer = 123344;

  return (
    <div className="playing-with-variables">
      <h2 className="todo-container__title">
        <Link to="/exercises/js">⯇ JS Strings</Link>
      </h2>
      <section>
        <h2>Operacje na stringach</h2>
        <p>Ulubiony bohater z serialu "Gra o tron" to {string1}</p>
        <p>
          Ulubiony bohater z serialu "Gra o tron" to
          <span className="variable-string-placeholder">{string1}</span>
        </p>
        <p>{string2}</p>
        <p>{string3}</p>
        {/* Uzupełnij zdanie korzystając ze zmiennych oraz operacji na stringach */}
        <p>
          {' '}
          Witaj {imie}! Jesteś {numer} uzytkownikiem odwiedzającym tę stronę!{' '}
        </p>
      </section>
    </div>
  );
}
