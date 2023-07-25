import './styles.css';

export function Exercise() {
  const mathResult1 = 2 * 5;
  const divideResult1 = 3 / 2;
  const powerResult = Math.pow(3,2) ;
  const pierwiastek = Math.sqrt(3) ;
  const modulo = 3 % 2;

  return (
    <div className="playing-with-variables">
      <section>
        <h2>Operacje matematyczne</h2>
        <pre>
          <code>2 * 5 = {mathResult1}</code>
        </pre>
        {/* Uzupełnij wykorzystując zmienne*/}
        <pre>
          <code>3 : 2 = {divideResult1}</code>
        </pre>
        <pre>
          {/* kwadrat liczby */}
          <code>3&#178; = {powerResult}</code>
        </pre>
        <pre>
          {/* pierwiastek z liczby */}
          <code>&#8730;3 = {pierwiastek}</code>
        </pre>
        <pre>
          {/* modulo */}
          <code>3%2 = {modulo};</code>
        </pre>
      </section>
    </div>
  );
}
