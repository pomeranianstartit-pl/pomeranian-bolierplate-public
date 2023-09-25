import './styles.css';

export function Exercise() {
  return (
    <div className="colors-wrapper">
      <div className="colorName">Kolor przy użyciu: colorName</div>
      <div className="shortenHex">Kolor przy użyciu: shortenHex</div>
      <div className="normalHex">Kolor przy użyciu: normalHex</div>
      <div className="rgb">Kolor przy użyciu: rgb</div>
      <div className="rgba">Kolor przy użyciu: rgba</div>
      <div className="hsl">Kolor przy użyciu: hsl</div>
    </div>
  );
}
