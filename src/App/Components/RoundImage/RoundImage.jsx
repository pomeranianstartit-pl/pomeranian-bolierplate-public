import './styles.css';

export const RoundImage = (props) => {
  const { title, src, width, height, color } = props;
console.log(props)
  return <div style={{
    width: width,
    height: height,
    backgroundColor: color,
    backgroundImage: `url(${src})`,
  }} >{title} <img src={src} alt={title} /></div>;
};