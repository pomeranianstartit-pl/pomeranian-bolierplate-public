import './style.css';
export function TextFundaments() {
  return (
    <div className="blok11_z1">
      <div className="font-size">Wielkość czcionki</div>
      <div className="font-weight">Grubość czcionki</div>
      <div className="font-style">italic</div>
      <div className="text-decoration">Podkreslenie</div>
      <div className="text-transform">Transformacja</div>
      <div className="text-shadow">Tekst Shadow</div>
      <div className="box-shadow">Div z Cieniem</div>
      <div className="special-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis doloribus
        enim dolorum commodi pariatur labore corrupti voluptatem molestiae nam
        id. Qui obcaecati dignissimos nobis illum hic accusamus repudiandae ea
        laudantium?
      </div>
      <div className="">
        Tekst do porwnania
        <span className="sup">sup</span>
        <span className="sub">sub</span>
        <sup>sup</sup>
        <sub>sub</sub>
      </div>

      <ol className="list-ol" start="4">
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
