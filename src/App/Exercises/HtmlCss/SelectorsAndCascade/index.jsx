import './SelectorsAndCascade.css';

export function SelectorsAndCascade() {
  return (
    <div className="selectorsAndCascade">
      <div className="unikalna-klasa1">
        <span>Tekst1.1</span>
        <div></div>
        <span>Tekst1.2</span>
        <span>Tekst1</span>
        <div className="wewnetrzny-div">wewnętrzny tekst</div>
      </div>
      <div id="drugi-div" className="unikalna-klasa2">
        Tekst 2
      </div>
      <div className="unikalna-klasa3">Tekst 3</div>
      <input type="text" />
    </div>
  );
}
