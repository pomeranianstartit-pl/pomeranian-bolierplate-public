import './SelectorsAndCascade.css';

export function SelectorsAndCascade() {
  return (
    <div>
      <h2>Selektory i Kaskadowość </h2>
      <p>Różne zapisy w CSS ułatwiającą pracę</p>
      <ol>
        <li>
          Zapis 'klasa tag'- Właściwości zostaną zastosowane dla dowolnego tagu,
          którego rodzic ma taką klasę. Selector Specifity(0,1,1)
        </li>
        <li>
          {' '}
          Zapis 'klasa &gt; tag'- Właściwości zostaną zastosowane dla
          najbliższego tagu, którego rodzic ma taką klasę.Selector
          Specifity(0,1,1)
        </li>
        <li>
          Zapis 'tag ~ tag'- Właściwości zostaną zastosowane dla tagu, który
          jest poprzedzonym danym tagiem, ale nie musi być to tag po
          tagu.Selector Specifity(0,0,2)
        </li>
        <li>
          {' '}
          Zapis 'tag + tag'- Właściwości zostaną zastosowane dla najbliższego
          tagu, który jest poprzedzonym danym tagiem.Selector Specifity(0,0,2)
        </li>
        <li></li>
      </ol>
      <div className="SelectorsAndCascade">
        <div className="unikalna-klasa1">
          <span>Tekst 1</span>
          <div> </div>
          <span>Tekst 1</span>
          <span>Tekst 1</span>

          <div className="wewnetrzny-div">Wewnetrzny tekst</div>
          <div className="wewnetrzny-div2">Wewnetrzny tekst</div>
          <div className="wewnetrzny-div3">Wewnetrzny tekst</div>
        </div>
        <div id="drugi-div" className="unikalna-klasa2">
          Tekst 2
        </div>
        <div className="unikalna-klasa3">Tekst 3</div>
        <input type="text" />
      </div>
    </div>
  );
}
