import './style.css';

export function TextFundaments() {
  return (
    <div className="block11-z1">
      <div className="font-size">Wielkość czcionki </div>
      <div className="font-weigh">Grubość czcionki </div>
      <div className="font-style">Italic </div>
      <div className="font-decoration">Podkreślenie </div>
      <div className="font-transform">Transformacja </div>
      <div className="font-shadow">Tekst z cieniem </div>
      <div className="box-shadow">Div z cieniem </div>
      <div className="special-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quas
        nobis placeat porro sit eos ipsa, autem, nihil repellendus,
        necessitatibus laboriosam? Ut molestias vitae, autem enim magnam harum
        iste ipsam?
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
          ul 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          magnam fugit ullam quis ducimus odit iure iste, libero nisi nam.
        </li>
      </ul>
    </div>
  );
}
