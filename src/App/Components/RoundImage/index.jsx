import './styles.css';

export function RoundImage({ url, size = '150px' }) {
  return (
    <div
      className="round-image"
      style={{
        backgroundImage: `url('${url}')`,
        width: size,
        height: size,
      }}
    ></div>
  );
}
