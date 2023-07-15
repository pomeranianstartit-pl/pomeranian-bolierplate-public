import './styles.css';

export const RoundImage = (props) => {
  const { size } = props;
  return (
    <div
      className="round-image"
      style={{ borderRadius: '100%', height: size, width: size }}
    />
  );
};
