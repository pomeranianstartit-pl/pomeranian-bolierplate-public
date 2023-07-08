import './styles.css';

export function Exercise() {
  let string1 = 'Eddie the Eagle';

  const string3 = 'Ulubiony bohater z serialu "Gra o tron" to ' + string1;

  const string2 = `Ulubiony bohater z serialu "Gra o tron" to ${string1}`;


  let name = 'Stefano';
  const string4 = `Witaj ${name}`

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
        <p>{string4}! Jesteś ____ uzytkownikiem odwiedzającym tę stronę!</p>
      </section>
    </div>
  );
}
