import './style.css';

// props = {
//     src: "adres do obrazka"
// }

// props.src
// props = {
// RoundedImage ({ src }) {
// src
// }

export function RoundedImage({ src, size }) {
  // size. width
  // size height
  return (
    <div
      className="RoundedImage"
      style={{
        // backgroundImage: 'url(${src})',
        backgroundImage: 'url(' + src + ')',
        width: size.width,
        height: size.height + 'px',
      }}
    ></div>
  );
}
// to powyzej formatuje zdjecie do stylowania w kolku
