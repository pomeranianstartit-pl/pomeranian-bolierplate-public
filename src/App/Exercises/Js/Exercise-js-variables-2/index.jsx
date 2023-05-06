import './styles.css';

export function Exercise() {
  const num1 = 2;
  const num2 = 3;
  const num3 = 5;

  const mathResult1 = num1 * num3;
  const mathResult2 = num2 / num1;
  const mathResult3 = num2 ** num1;
  const mathResult4 = Math.sqrt(num2).toFixed(2);
  const mathResult5 = num2 % num1;

  return (
    <div className="playing-with-variables">
      <section>
        <h2>Operacje matematyczne</h2>
        <pre>
          <code>{`${num1} * ${num3}`} = {mathResult1}</code>
        </pre>
        {/* Uzupełnij wykorzystując zmienne*/}
        <pre>
          <code>{`${num2} : ${num1}`} = {mathResult2}</code>
        </pre>
        <pre>
          {/* kwadrat liczby */}
          <code>{num2}&#178; = {mathResult3}</code>
        </pre>
        <pre>
          {/* pierwiastek z liczby */}
          <code>&#8730;{num2} = {mathResult4}</code>
        </pre>
        <pre>
          {/* modulo */}
          <code>{num2}%{num1} = {mathResult5}</code>
        </pre>
      </section>
    </div>
  );
}
