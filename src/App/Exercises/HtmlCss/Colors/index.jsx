import './styles.css';

export function Exercise() {
  return (
    <div className="colors-wrapper">
      <div className="colorName">kolor przy użyciu: colorName</div>
      <div className="shortenHex">kolor przy użyciu: shortenHex</div>
      <div className="normalHex">kolor przy użyciu: normalHex</div>
      <div className="rgb">kolor przy użyciu: rgb</div>
      <div className="rgba">kolor przy użyciu: rgba</div>
      <div className="hsl">kolor przy użyciu: hsl</div>
      <div className="hsla">kolor przy użyciu: hsla</div>
    </div>
  );
}