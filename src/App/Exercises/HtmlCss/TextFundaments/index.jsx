import './styles.css';

export function TextFundaments() {
  return (
    <div className="blok11-z1">
      <div className="font-size">Wielkosc czcionki</div>
      <div className="font-weight">Grubosc czcionki</div>
      <div className="font-style">Styl czcionki</div>
      <div className="font-decor">Podkreslenia</div>
      <div className="text-transform">Transformacje</div>
      <div className="text-shadow">Tekst z cieniem</div>
      <p>cos</p>
      <div className="box-shadow">Div z cieniem</div>
      <div className="special-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nesciunt
        at itaque modi possimus quis, reiciendis ipsum sint odit ut placeat
        aliquam? Sequi, dolorum officia necessitatibus voluptatem consequuntur
        ratione! Repudiandae!
      </div>

      <div className="">
        Tekst do porwnania
        <span className="sup">sup</span>
        <span className="sub">sub</span>
        <sup>sup</sup>
        <sub>sub</sub>
      </div>

      <ol className="ol-list" reversed>
        <li>tekst 1</li>
        <li>tekst 2</li>
        <li>tekst 3</li>
      </ol>

      <ul className="ul-list">
        <li>ul 1</li>
        <li>ul 2</li>
        <li>
          ul 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          modi sed, quas neque dolorem sapiente consequatur sit eius obcaecati
          quos cum dolor temporibus commodi. Nam ipsum laborum optio nihil
          distinctio.
        </li>
      </ul>
    </div>
  );
}
