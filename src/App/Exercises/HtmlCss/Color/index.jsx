import './styles.css';

export function Exercise() {
  return (
    <>
      <h2 className="color-name"> Jestem pomalowany przez nazwany kolor</h2>
      <h2 className="short-hex">
        Jestem pomalowany przez krótki zapis szesnastkowy
      </h2>
      <h2 className="full-hex">
        Jestem pomalowany przez krótki zapis full-hex
      </h2>
      <h2 className="rgb">Jestem pomalowany przez krótki zapis rgb</h2>
      <h2 className="rgba">Jestem pomalowany przez krótki zapis rgba</h2>
      <h2 className="hsl">Jestem pomalowany przez krótki zapis hsl</h2>
    </>
  );
}
