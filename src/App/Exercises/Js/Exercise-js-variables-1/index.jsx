import './styles.css';

export function Exercise() {
  let string1 = 'Jon Snow';

  const string3 = 'Ulubiony bohater z serialu "Gra o tron" to ' + string1;

  const string2 = `Ulubiony bohater z serialu "Gra o tron" to: ${string1}`;

  const user = 'Magdalena';

  const number = 'pierwszym';

  return (
    <div className="playing-with-variables">
      <section>
        <h2>Operacje na stringach</h2>
        <p>Ulubiony bohater z serialu "Gra o tron" to {string1}</p>
        <p>
          Ulubiony bohater z serialu "Gra o tron" to
          <span className="variable-string-placeholder">{string1}</span>
        </p>
        <p>{string2}</p>
        <p>{string3}</p>
        {/* Uzupełnij zanie korzystając ze zmiennych oraz operacji na stringach */}
        <p>Witaj {user}! Jesteś {number} uzytkownikiem odwiedzającym tę stronę!</p>
      </section>
    </div>
  );
}
