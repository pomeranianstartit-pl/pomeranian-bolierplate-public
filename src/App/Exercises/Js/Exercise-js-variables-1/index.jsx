import './styles.css';

export function Exercise() {
  let string1 = 'Amadeusz Szewczyk';

  const string3 = 'Ulubiony bohater z serialu "Gra o tron" to ' + string1;

  const string2 = `Ulubiony bohater z serialu "Gra o tron" to: ${string1}`;

  const string4 = '1234'

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
        {/* Uzupełnij zdanie korzystając ze zmiennych oraz operacji na stringach */}
        
        
        
        <p>Witaj {string1}! Jesteś {string4} uzytkownikiem odwiedzającym tę stronę!</p>
      </section>
    </div>
  );
}
