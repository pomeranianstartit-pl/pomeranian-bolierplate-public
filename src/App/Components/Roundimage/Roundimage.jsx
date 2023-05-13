import './styles.css';

export const Roundimage = (props) => {
const { title, src, width, height, color } = props;

  return <div style={{
    width: width,
    height: height,
    background: color,
    backgroundImage: `ur(${src})`,
  }}>
{title} <img src={src} alt={title}/>
  </div>
}
