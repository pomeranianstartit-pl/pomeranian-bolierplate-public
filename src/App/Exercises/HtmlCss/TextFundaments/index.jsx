import './styles.css';
export function TextFundaments() {
  return (
    <div className="blok11_z1">
      <div className="font-size">Wielkość czcionki</div>
      <div className="font-weight">Grubość czcionki</div>
      <div className="font-style">Italic</div>
      <div className="text-decoration">Podkreslenie</div>
      <div className="text-transform">Transformacja</div>
      <div className="text-shadow">Tekst z cieniem</div>
      <div className="box-shadow">Div z cieniem</div>
      <div className="special-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum magni,
        explicabo deserunt sequi ea dolore voluptatum quibusdam perferendis
        fugit natus repellat laboriosam alias tenetur in. Qui, cum hic.
        Possimus, fuga!
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
        <li>tekst 1</li>
        <li>tekst 2</li>
        <li>
          tekst 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          sed rerum eveniet delectus quam pariatur, vero repudiandae aspernatur
          ipsam consequuntur at voluptatem quia sapiente quae. Iste autem iure
          dolorem quod.
        </li>
      </ul>
    </div>
  );
}
