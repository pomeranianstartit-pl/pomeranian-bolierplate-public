import './style.css';

export function TextFundaments() {
  return (
    <div className="blok11_z1">
      <div className="font-size">Wielkość czcionki</div>
      <div className="font-weight">Grubość czcionki</div>
      <div className="font-style">Italic</div>
      <div className="text-decoration">Podkreślenie</div>
      <div className="text-transform">Transformacja slowo2</div>
      <div className="text-shadow">Tekst z cieniem</div>
      <div className="box-shadow">Div z cieniem</div>
      <div className="special-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
        voluptatibus reprehenderit doloremque hic perferendis, quas iste
        consectetur architecto ad, est possimus sit fugiat. Magni nisi esse
        repellendus fuga excepturi a.
      </div>

      <div className="">
        Tekst do porwnania
        <span className="sup">sup</span>
        <span className="sub">sub</span>
        <sup>sup</sup>
        <sub>sub</sub>
      </div>

      <ol className="list-ol" start="4" reversed>
        <li>tekst 1</li>
        <li>tekst 2</li>
        <li>tekst 3</li>
      </ol>

      <ul className="list-ul">
        <li>ul 1</li>
        <li>ul 2</li>
        <li>
          ul 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium, minus. Aspernatur officia quaerat, ut perspiciatis odio
          suscipit, repudiandae ratione cumque repellendus nulla nam illum sit
          atque sunt voluptatem! Blanditiis, quas.
        </li>
      </ul>
    </div>
  );
}
