import './styles.css';

export const DashboardCard = ({ sectionTitle, icon, description, link }) => {
  return (
    <div className="window">
      <h3>{sectionTitle}</h3>
      <div className="icona">{icon}</div>

      <p>{description}</p>
      <a href={link}>Zobacz więcej &gt;</a>
    </div>
  );
};
