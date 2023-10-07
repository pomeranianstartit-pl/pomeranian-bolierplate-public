import './style.css';

export const SingleIcon = ({ src, text }) => {
  return (
    <div className="SingleImage">
      <img src={src} alt={text} />
      <div>{text}</div>
    </div>
  );
};
