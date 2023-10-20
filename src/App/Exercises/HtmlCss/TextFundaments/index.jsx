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
      <div className="">
        Tekst do porwnania
        <span className="sup">sup</span>
        <span className="sub">sub</span>
        <sup>sup</sup>
        <sub>sub</sub>
      </div>
    </div>
  );
}
