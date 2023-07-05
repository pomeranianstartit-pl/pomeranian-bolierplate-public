import './styles.css';

export function Exercise() {
  let string1 = 'Jon Snow';

  const string3 = 'Ulubiony bohater z serialu "Gra o tron" to ' + string1;

  const string2 = `Ulubiony bohater z serialu "Gra o tron" to: ${string1}`;

  const name = 'Krzysiek';

  const num = 12345;

  return (
    <div className="playing-with-variables">
      <section>
        <h2>Operacje na stringach</h2>
        <p>{string3}</p>
        <p>
          Ulubiony bohater z serialu "Gra o tron" to
          <span className="variable-string-placeholder">{string1}</span>
        </p>
        <p>{string2}</p>
        <p>{string3}</p>
        {/* Uzupełnij zdanie korzystając ze zmiennych oraz operacji na stringach */}
        <p>
          Witaj {name}! Jesteś {num} uzytkownikiem odwiedzającym tę stronę!
        </p>
      </section>
    </div>
  );
}
