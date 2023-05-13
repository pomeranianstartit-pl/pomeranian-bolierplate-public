import './styles.css';

export const RoundImage = (props) => {
  const { title, src, width, height, color } = props;

  return <div style={{
    width: width,
    height: height,
    backgroundColor: color
  }} >{title} <img src={src} alt={title}/></div>;
};
