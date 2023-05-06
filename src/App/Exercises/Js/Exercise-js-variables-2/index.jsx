import './styles.css';

export function Exercise() {
  const mathResult1 = 2 * 5;
  const mathresult2 = 3 / 2;
  const mathresult3 = 3 ** 2; 
  // można też za pomocą = Math.pow(3,2)
  const mathresult4 = Math.sqrt (3,2); 
  // można też za pomocą = Math.pow(3,0.5)
  // można też za pomocą = 3 ** 0.5
  const mathresult5 = 3 % 2;

  return (
    <div className="playing-with-variables">
      <section>
        <h2>Operacje matematyczne</h2>
        <pre>
          <code>2 * 5 = {mathResult1}</code>
        </pre>
        {/* Uzupełnij wykorzystując zmienne*/}
        <pre>
          <code>3 : 2 = {mathresult2}</code>
        </pre>
        <pre>
          {/* kwadrat liczby */}
          <code>3&#178; = {mathresult3};</code>
        </pre>
        <pre>
          {/* pierwiastek z liczby */}
          <code>&#8730;3 = {mathresult4.toFixed(2)};</code>
        </pre>
        <pre>
          {/* modulo */}
          <code>3%2 = {mathresult5};</code>
        </pre>
      </section>
    </div>
  );
}
