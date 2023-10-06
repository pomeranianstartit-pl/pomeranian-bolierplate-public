import './style.css';

export function TechCard(props) {
  return (
    <div className="techcard">
      <div className="image">{props.img}</div>
      <div className="techname">{props.title}</div>
    </div>
  );
}
