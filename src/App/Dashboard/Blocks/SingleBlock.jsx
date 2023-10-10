import './styles.css';
export function SingleBlock({ title, description, icon, link }) {
  return (
    <section className="single-block">
      <div className="title">{title}</div>
      <div className="picture">{icon}</div>
      <div className="description">{description}</div>
      <a href={link} className="more">
        Zobacz więcej {'>'}
      </a>
    </section>
  );
}
