import './styles.css';

export const RoundImage = (props) => {
  const { title, src, width, height, color, margin } = props;

  return (
    <div
      style={{
        width: width,
        height: height,
        backgroundColor: color,
        margin: margin,
      }}
    >
      {' '}
      {title} <img src={src} alt={title} />
    </div>
  );
};
