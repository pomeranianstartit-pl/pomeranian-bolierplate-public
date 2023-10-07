import './styles.css';

export function TechStackImage({ src, text }) {
  return (
    <div className="techstack-box">
      <img src={src} alt={text}></img>
      <p>{text}</p>
    </div>
  );
}
