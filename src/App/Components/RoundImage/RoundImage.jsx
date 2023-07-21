import './styles.css';

export const RoundImage = ({ size }) => {
  return (
    <img
      className="round-image"
      style={{ borderRadius: '100%', height: size, width: size }}
    />
  );
};
