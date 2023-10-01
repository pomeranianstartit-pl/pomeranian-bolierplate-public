import './SelectorsAndCascades.css';
export function SelectorsAndCascades() {
  return (
    <div className="SelectorsAndCascades">
      <div className="unikalna-klasa1">
        <span>Tekst 1</span>
        <div></div>
        <span>Tekst 1</span>
        <span>Tekst 1</span>
        <div className="wewnetrzny-div"> Wewnętrzeny tekst</div>
        <div className="wewnetrzny-div"> Wewnętrzeny tekst</div>
        <div className="wewnetrzny-div"> Wewnętrzeny tekst</div>
      </div>

      <div id="drugi-div" className="unikalna-klasa2">
        Tekst 2
      </div>
      <div className="unikalna-klasa3">Tekst 3</div>
      <input type="text" />
    </div>
  );
}
