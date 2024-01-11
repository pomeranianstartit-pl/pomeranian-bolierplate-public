import './SelectorsAndCascade.css';

export function SelectorsAndCascade() {
  return (
    <div>
      <h2>Selektory i Kaskadowość </h2>

      <ol>
        {' '}
        <h5>
          Kaskadowość w CSS określa pierwszeństwo oddziaływania na te same
          elementy strony stylów z różnych źródeł. Kolejność ważności wg listy:
        </h5>
        <li>Style zapisane inline w tagu.</li>
        <li>Właściwości CSS zapisane w tagu style umieszczone w tagu head.</li>
        <li>Import właściwości CSS zapisane w pliku css.</li>
      </ol>
      <ol>
        Oprócz kaskadowości ważne jest współczynnik Selector Specifity. Selector
        Specifity, czym większy współczynnik, tym te właściwości są ważniejsze,
        jeżeli taki sam współczynnik to zostaną zastosowane właściwości, które w
        kodzie są póżniej zapisane.
        <li>id - Selector Specifity(1,0,0)</li>
        <li>klasa - Selector Specifity(0,1,0)</li>
        <li>tag - Selector Specifity(0,0,1)</li>
      </ol>
      <p>
        Można łączyć elementy np 'klasa tag' i Selector Specifity wynosi
        (0,1,1). Można złamać kaskadowość za pomocą dopisania !important, i to
        się wykona nie zwracając uwagę na Selector Specifity, ale lepiej tego
        nie używać za dużo, lub najlepiej wgl.
      </p>
      <p>Różne zapisy w CSS ułatwiającą pracę</p>
      <ol>
        <li>
          Zapis 'klasa tag'- Właściwości zostaną zastosowane dla dowolnego tagu,
          którego rodzic ma taką klasę. Selector Specifity(0,1,1)
        </li>
        <li>
          {' '}
          Zapis 'klasa &gt; tag'- Właściwości zostaną zastosowane dla
          najbliższego tagu, którego rodzic ma taką klasę. Selector
          Specifity(0,1,1)
        </li>
        <li>
          Zapis 'tag ~ tag'- Właściwości zostaną zastosowane dla tagu, który
          jest poprzedzonym danym tagiem, ale nie musi być to tag po tagu.
          Selector Specifity(0,0,2)
        </li>
        <li>
          {' '}
          Zapis 'tag + tag'- Właściwości zostaną zastosowane dla najbliższego
          tagu, który jest poprzedzonym danym tagiem. Selector Specifity(0,0,2)
        </li>
        <li>
          Zapis [class*='nazwa_klasy'] - Właściwości zostaną zastosowane dla
          klas w których nazwie występuję 'nazwa_klasy', czyli
          ...'nazwa_klasy'....Selector Specifity(0,1,0){' '}
        </li>
        <li>
          Zapis [class^='nazwa_klasy'] - Właściwości zostaną zastosowane dla
          klas w których nazwa zaczyna się od 'nazwa_klasy', czyli
          'nazwa_klasy'.... Selector Specifity(0,1,0)
        </li>
        <li>
          Zapis [class$='nazwa_klasy'] - Właściwości zostaną zastosowane dla
          klas w których nazwa kończy się na 'nazwa_klasy', czyli
          ...'nazwa_klasy'. Selector Specifity(0,1,0)
        </li>
        <li>
          Zapis 'klasa &gt; tag:first-child' - Właściwości zostaną zastosowane
          tylko dla pierszego spełnionego warunku. Czyli dla klasy oraz tagu
          który znajduje się bezpośrednio pod tą klasą. Selector
          Specifity(0,2,1){' '}
        </li>
        <li>
          Zapis 'klasa &gt; tag &gt;tag:last-child' - Właściwości zostaną
          zastosowane tylko dla pierszego spełnionego warunku. Wyrażenie
          zadziała dla ostatniego diva. Selector Specifity(0,2,2)
        </li>
      </ol>
      <ol>
        W HTML są takie elementy jak pseudoklasy i pseudoelementy. Pseuodoklasy
        to klasa dotycząca tego, że np jak się najedzie myszką na dany element
        to jego właściwości mają się zmienić np.hover, active. Pseudoelementy
        zadziałają tylko dla jednego elementu np.first-child lub before,after.{' '}
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
