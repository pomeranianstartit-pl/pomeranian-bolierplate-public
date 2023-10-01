import './styles.css';

export function RoundedImage({ src, size }) {
  return (
    <div
      className="roundedImage"
      // dwa nawiasy klamrowe bo
      // 1 => przekazujemy cos innego niz string, wtedy dla np zmiennej jest potrzebny wasik
      // 2 => chcemy przekazac obiekt, a obiekt definiujemy poprzez nawiasy klamrowe (wasy)
      style={{
        backgroundImage: `url(${src})`,
        width: size.width,
        height: size.height + 'px',
      }}
    ></div>
  );
}
