import './styles.css';

export function TextFundaments() {
  return (
    <div className="blok11_z1">
      <div className="font-size">Wielkość czcionki</div>
      <div className="font-weight">Grubość czcionki</div>
      <div className="font-style">Italic</div>
      <div className="font-decoration">Podkreślenie</div>
      <div className="font-transform">Transformacja</div>
      <div className="font-shadow">Tekst z cieniem</div>
      <div className="box-shadow">Div z cieniem</div>
      <div className="special-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        perspiciatis? Suscipit commodi libero est dolorem exercitationem
        temporibus assumenda voluptate quia quidem aliquam! Molestiae sapiente
        magnam recusandae, commodi delectus neque hic.
      </div>
      <div className="">
        Tekst do porównania
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
        <li>ul 3</li>
      </ul>
    </div>
  );
}
