import './styles.css';

export const RoundImage = ({ size }) => {
  // const {size} = props;
  return (
    <div
      className="round-image"
      style={{ borderRadius: '100%', height: size, width: size }}
    />
  );
};
