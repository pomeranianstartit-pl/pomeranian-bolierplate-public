import './SelectorsAndCascade.css';

export function SelectorsAndCascade() {
  return (
    <div className="selectorsAndCascade">
      {/* div>div.unikalna-klasa$*3>{Tekst $} ctrl + space */}
      <div className="SelectorsAndCascade">
        <div className="unikalna-klasa1">
          <span>Tekst 1</span>
        </div>
        <span>Tekst 1</span>
        <span>Tekst 1</span>
        <div className="wewnetrzny-div">Wewnetrzny Tekst</div>
        <div id="drugi div" className="unikalna-klasa2">
          Tekst 2
        </div>
        <div className="unikalna-klasa3">Tekst 3</div>
        <input type="text" />
      </div>
    </div>
  );
}
