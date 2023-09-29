import './styles.css';

export function SelectorsAndCascade() {
  return (
    <div className="selectorsAndCascade">
      <div className="unikalna-klasa1">
        <span>span nr 0</span>
        <div className="wewnetrzy-div">wewnetrzny tekst</div>
        <span>span nr 1</span>
        <span>span nr 2</span>
        <div className="wewnetrzy-div2">wewnetrzny tekst2</div>
      </div>

      <div id="drugi-div" className="unikalna-klasa2">
        Tekst 2
      </div>
      <div className="unikalna-klasa3">Tekst 3</div>
      <input type="text" />
    </div>
  );
}
