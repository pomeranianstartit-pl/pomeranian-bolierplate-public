import './styles.css';

export function Exercise() {
  return <div>
    <div className="cwiczenie-1">
      <h2>Cwiczenie 1</h2>
      <p>Paragraf 1</p>
      <p className="blue">Paragraf 2</p>
      <p id="p-3">Paragraf 3</p>
      <p style={{ color: "red" }}>Paragraf 4</p>
    </div>

    <div className="cwiczenie-2">
      <h2>Cwiczenie 2</h2>
      <p>Paragraf 1</p>
      <p>Paragraf 2</p>
      <p>Paragraf 3</p>
      <p>Paragraf 4</p>
    </div>

    <div className="cwiczenie-3">
      <h2>Cwiczenie 3</h2>
      <p>Paragraf 1</p>
      <p>Paragraf 2</p>
      <p>Paragraf 3</p>
      <p>Paragraf 4</p>
    </div>
  </div>


}