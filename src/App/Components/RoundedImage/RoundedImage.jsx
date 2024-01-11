import './style.css';

/*
props ={
  src:"adres do obrazka",
}
RoundedImage(props)

props.src
*/
/*
props ={
  src:"adres do obrazka",
}
RoundedImage({src}) {
  src
}

*/
export function RoundedImage({ src, size }) {
  return (
    <div
      className="roundedImage"
      style={{
        // backgroundImage: `url(${src})`,
        backgroundImage: 'url(' + src + ')',
        width: size.width,
        height: size.height + 'px',
      }}
    ></div>
  );
}
