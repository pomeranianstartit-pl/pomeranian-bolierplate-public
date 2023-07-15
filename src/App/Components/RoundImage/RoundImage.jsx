import './styles.css';
export const RoundImage = ({ size }) => {
  return (
    <div>
      <div
        className="round-image"
        style={{ borderRadius: '100%', height: size, width: size }}
      />
      <div>{size}</div>
    </div>
  );
};
