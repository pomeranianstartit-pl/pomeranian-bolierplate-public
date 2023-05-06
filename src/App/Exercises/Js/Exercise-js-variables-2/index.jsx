import './styles.css';

export function Exercise() {
  const mathResult1 = 2 * 5;
  const num1 = 3;
  const num2 = 2;

  return (
    <div className="playing-with-variables">
      <section>
        <h2>
          Operacje matematyczne
        </h2>
        <pre>
          <code>
            2 * 5 = {mathResult1}
          </code>
        </pre>
        {/* Uzupełnij wykorzystując zmienne*/}
        <pre>
          <code>
            3 : 2 = {num1 / num2}
          </code>
        </pre>
        <pre>
          {/* kwadrat liczby */}
          <code>
            3&#178; = {Math.pow(num1, num2)}
          </code>
        </pre>
        <pre>
          {/* pierwiastek z liczby */}
          <code>
            &#8730;3 = {Math.sqrt(num1).toFixed(2)}
          </code>
        </pre>
        <pre>
          {/* modulo */}
          <code>
            3%2 = {num1 % num2}
          </code>
        </pre>
      </section>
    </div>
  );
}
