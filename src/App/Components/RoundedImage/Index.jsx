import './styles.css';

export function RoundedImage({ src, size }) {
  return (
    <div
      className="roundedImage"
      style={{
        //backgroundImage: `URL(${src})`,
        backgroundImage: 'url(' + src + ')',
        width: size.width,
        height: size.height + 'px',
      }}
    ></div>
  );
}
