import './styles.css';

export function SelectorsAndCascade() {
  return (
    <div>
      <div className="cwiczenie-1">
        <h2>Ćwiczenie 1</h2>

        <p>Paragraf 1 - ma być czerwony</p>

        <p className="blue">Paragraf 2 - ma być niebieski</p>

        <p id="p-3">Paragraf 3 - ma być zielony</p>

        <p style={{ color: 'magenta' }}>Paragraf 4</p>
      </div>

      <div className="cwiczenie-2">
        <h2>Ćwiczenie 2</h2>

        <p>Paragraf 1 - czerwony</p>

        <p>Paragraf 2 - niebieski</p>

        <p>Paragraf 3 - zielony</p>

        <p>Paragraf 4 - szary</p>
      </div>

      <div className="cwiczenie-3">
        <h2 className="c-3">Ćwiczenie 3</h2>

        <p>Paragraf 1</p>

        <p>Paragraf 2</p>

        <p>Paragraf 3</p>

        <p>Paragraf 4</p>
      </div>

      <div className="cwiczenie-4">
        <h2>Ćwiczenie 4</h2>

        <ul>
          <li>Pierwszy element</li>

          <li>Drugi element</li>

          <li>Trzeci...</li>
        </ul>
      </div>

      <div className="cwiczenie-5">
        <h2 className="c-5">Ćwiczenie 5</h2>

        <p>Paragraf 1</p>

        <p>Paragraf 2</p>

        <p>Paragraf 3</p>

        <p>Paragraf 4</p>
      </div>

      <div className="cwiczenie-6">
        <h2 className="c-5">Ćwiczenie 6</h2>

        <p>Paragraf 1</p>

        <p>Paragraf 2</p>

        <p>Paragraf 3</p>

        <p>Paragraf 4</p>

        <div>
          <p>div p 1</p>

          <p>div p 2</p>

          <div>
            <p>div div p 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
