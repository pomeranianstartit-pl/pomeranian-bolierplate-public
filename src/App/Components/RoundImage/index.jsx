import './styles.css';

export const RoundImage = ({ url, size }) => {
  return (
    <div
      className="round-image"
      style={{ backgroundImage: `url('${url}')`, width: size, height: size }}
    ></div>
  );
};
