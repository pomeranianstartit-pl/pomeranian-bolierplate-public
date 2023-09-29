import './SelectorsAndCascade.css';

export function SelectorsAndCascade() {
  return (
    <div className="selectorsAndCascade">
      <div className="unikalna-klasa1">
        <span>Tekst 1</span>
        <div></div>
        <span>Tekst 1</span>
        <span>Tekst 2</span>
        <div className="wewnetrzny-div">wewnętrzny tekst</div>
        <div className="wewnetrzny-div2">wewnętrzny tekst</div>
        <div className="wewnetrzny-div3">wewnętrzny tekst</div>
      </div>
      <div id="drugi-div" className="unikalna-klasa2">
        Tekst 2
      </div>
      <div className="unikalna-klasa3">Tekst 3</div>
      <input type="text" />
    </div>
  );
}
