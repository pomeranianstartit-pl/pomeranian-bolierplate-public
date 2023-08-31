import './styles.css';

export function Exercise() {
  const mathResult1 = 2 * 5;
  const mathResult2 = 3 / 2;
  const mathResult3 = Math.pow(3, 2);
  const mathResult4 = Math.sqrt(3);
  const mathResult5 = 2 % 5;

  return (
    <div className="playing-with-variables">
      <section>
        <h2>Operacje matematyczne</h2>
        <pre>
          <code>2 * 5 = {mathResult1}</code>
        </pre>
        {/* Uzupełnij wykorzystując zmienne*/}
        <pre>
          <code>3 : 2 = {mathResult2}</code>
        </pre>
        <pre>
          {/* kwadrat liczby */}
          <code>
            3<sup>2</sup> = {mathResult3}
          </code>
        </pre>
        <pre>
          {/* pierwiastek z liczby */}
          <code>{mathResult4}</code>
        </pre>
        <pre>
          {/* modulo */}
          <code>{mathResult5}</code>
        </pre>
      </section>
    </div>
  );
}
