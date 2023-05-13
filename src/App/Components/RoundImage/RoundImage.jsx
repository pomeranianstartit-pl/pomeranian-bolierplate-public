import './styles.css';

export const RoundImage = (props) => {
  const { title, src, width, heigh, color } = props;

  return <div style={{
    width: width,
    heigh: heigh,
    backgroundColor: color
  }}>{title}<img src={src} alt={title} /></div>;
};
