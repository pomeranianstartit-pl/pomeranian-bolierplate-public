import './styles.css';

export function Exercise() {
  let string1 = 'Amadeusz Szewczyk';
  const string2 = '1234'

  return (
    <div className="playing-with-variables">
      <section>
        <h2>Operacje na stringach</h2>
        <p>Ulubiony bohater z serialu "Gra o tron" to {string1}</p>      
        <p>Witaj {string1}! Jesteś {string2} uzytkownikiem na tej stronie!</p>
      </section>
    </div>
  );
}
