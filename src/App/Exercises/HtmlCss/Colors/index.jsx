import './styles.css';
export const Exercise = () => {
  return (
    <>
      <h2 className="color-name"> Jestem pomalowany przez nazwany kolor</h2>
      <h2 className="short-hex">
        Jestem pomalowany przez krótki zapis szesnastkowy
      </h2>
      <h2 className="full-hex">Jestem pomalowany przez zapis szesnastkowy</h2>
      <h2 className="rgb">Jestem pomalowany przez zapis rgb</h2>
      <h2 className="rgba">Jestem pomalowany przez zapis rgba</h2>
      <h2 className="hsl">Jestem pomalowany przez zapis hsl</h2>
    </>
  );
};
