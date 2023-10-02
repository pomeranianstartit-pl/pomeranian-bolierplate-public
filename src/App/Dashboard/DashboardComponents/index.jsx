import './style.css';

export function DashComp(props) {
  return (
    <div className="component">
      <h2 className="title">{props.title}</h2>
      <div className="img">{props.img}</div>
      <div className="description">{props.description}</div>
      <div className="more">{props.more}</div>
    </div>
  );
}
