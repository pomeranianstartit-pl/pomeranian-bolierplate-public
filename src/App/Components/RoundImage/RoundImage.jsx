import './styles.css';

export const RoundImage = ({ src, size }) => {
  return (
    <div
      className="round-image"
      style={{
        backgroundImage: `url(${src})`,
        backgroundImage: 'url(' + src + ')',
        width: size,
        height: size,
      }}
    ></div>
  );
};
