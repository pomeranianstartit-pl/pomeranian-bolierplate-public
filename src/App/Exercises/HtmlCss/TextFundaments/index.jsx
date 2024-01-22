import './style.css';
export function TextFundaments() {
  return (
    <div className="blok11_z1">
      <h1>Przykładowe właściwości używane w CSS.</h1>
      <p>
        1. Wielkość czcionki można zmieniać za pomocą właściwości'font-size' w
        CSS.Jednostki głównie używane do zmiany wielkości czccionkito px, rem,
        em i %. Przykład, użyta wielkość czcionki to 40px:
      </p>
      <div className="font-size">Wielkość czcionki</div>
      <p>
        2. Grubość czcionki można zmieniać za pomocą właściwości 'font-weight' w
        CSS. Grubość czcionki podaje się bez jednostki zazwyczaj od 100-900 (co
        100) Przykład, użyta grubość to 900:
      </p>
      <div className="font-weight">Grubość czcionki</div>
      <p>
        3. Kursywę można ustawić za pomocą właściwości 'font-style:italic' w
        CSS. Przykład:
      </p>
      <div className="font-style">italic</div>
      <p>
        4. Podkreślenie można ustawić za pomocą właściwości 'text-decoration:
        underline' w CSS. Domyślnie podkreślenie jest prostą linią, można
        zastosować również wykropkowaną lub falkę. Przykład:
      </p>
      <div className="text-decoration">Podkreslenie</div>
      <p>
        5. Właściwość 'text-transform', pozwala na zmianę tekstu na same wielkie
        lub małe literki. Również pozwala na zastosowanie właściwości aby każdy
        wyraz zaczynał się od wielkiej litery. Przykład:
      </p>
      <div className="text-transform">Transformacja </div>
      <p>
        6. Właściwość 'text-shadow' pozwala na określenie efektu cienia dla
        tekstu.W tej właściwości podaje się 3 parametry oraz kolor.Pierwsza
        wartość to przesunięcie w osi X, drugie to przesunięcie w osi y, trzecia
        wartość to rozmycie. Można do tego użyć generatora w internecie.
        Przykład:
      </p>
      <div className="text-shadow">Tekst Shadow</div>
      7. Właściwość 'box-shadow' bardzo podobna właściwość jak 'text-shadow',
      tylko dotyczy nie tekstu ale całego elementu.(np. div-a). Ta właściwość ma
      4 parametry oraz kolor. Pierwsza wartość to przesunięcie w osi X, drugie
      to przesunięcie w osi y,trzecia wartość to rozmycie oraz promień
      rozprzestrzeniania się. Przykład:
      <div className="box-shadow">Div z Cieniem</div>
      <br />
      8. W poniższym tekście zastosowano kilka właściwości CSS.
      <br />
      <br />
      a)'margin-top'-właściwość, która ustawia margines danego elementu od góry.
      Można ustawić marginesy dolny,prawy i lewy albo ustawić wszystkie 4
      marginesy za pomocą samego słowa 'margin'.Jednostki głównie używane to px,
      rem, em i %.
      <br />
      <br />
      b)'max-width'- właściwość, która ustawia maksymalną szerokość
      elementu.Jednostki głównie używane do szerokości elementu to px, rem, em i
      %. <br />
      <br />
      c)'font-size'- właściwość omówiona w podpunkcie 1.
      <br />
      <br />
      d)'line-height'- właściwość ustawiająca odstępy pomiędzy
      wierszami(interlinia). Odstępy nie mają jednostki, domyślna wartość to 1.{' '}
      <br />
      <br />
      e)'letter-spacing'- właściwość ustawiająca odstępy pomiędzy literami w
      wyrazie. Jednostki głównie używane to px,rem,em i %.
      <br />
      <br />
      f)'word-spacing'- właściwość ustawiająca odstępy pomiędzy wyrazami w
      wersie.Jednostki głównie używane to px,rem,em i %.
      <br />
      <br />
      g)'text-align'-właściwość ustawiająca wyrównania tekstu. Można również
      ustawić justowanie tekstu, użyte w poniższym przykładzie.
      <div className="special-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus
        enim dolorum commodi pariatur labore corrupti voluptatem molestiae nam
        id. Qui obcaecati dignissimos nobis illum hic accusamus repudiandae ea
        laudantium?
      </div>
      <div className="">
        <p>
          9.Właściwości odpowiadające w CSS za indeks dolny oraz górny to
          'vertical-align'. Dla indeksu górnego używa się 'vertical-align:super'
          dla indeksu dolnego używa się 'vertical-align:sub'. W html są tagi
          'sup' oraz 'sub'. W przykładzie poniżej różnicy pomiędzy CSS a HTML,
          pierwszy przykład to CSS drugi to HTML.
        </p>
        Tekst do porównania
        <span className="sup">sup</span>
        <span className="sub">sub</span>
        <sup>sup</sup>
        <sub>sub</sub>
      </div>
      <br />
      10.W HTML są stosowane dwie listy ordered list(uporządkowana lista) oraz
      unordered list(nieuporządkowana lista). W CSS też możemy zmieniać.
      właściwości tych list. Np można zmienić styl 'numeru' pozycji elementu.
      <ol className="list-ol" start="1">
        <li>tekst 1</li>
        <li>tekst 2</li>
        <li>tekst 3</li>
      </ol>
      <ul className="list-ul">
        <li>ul 1</li>
        <li>ul 2</li>
        <li>ul 3</li>
      </ul>
    </div>
  );
}
