import './styles.css';

export function SingleBox({ source, title, text, link }) {
  return (
    <div className="singleBox">
      <div className="title">{title}</div>
      <img src={source} alt="icon" />
      <div className="text">{text}</div>
      <a href={link}>zobacz wiecej</a>
    </div>
  );
}
