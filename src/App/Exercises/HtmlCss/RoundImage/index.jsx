import './styles.css';

export const RoundImage = (props) => {
  return (
    <div
      className="round-image"
      style={{
        backgroundImage: `url('${props.url}')`,
        width: props.size,
        height: props.size,
      }}
    ></div>
  );
};
