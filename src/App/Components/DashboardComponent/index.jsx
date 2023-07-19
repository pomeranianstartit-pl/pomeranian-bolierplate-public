import './styles.css';

export const DashboardComponent = (prop) => {
  return (
    <div className="DC-whole">
      <p className="DC-header">{prop.header}</p>
      <p className="DC-image">{prop.image}</p>
      <p className="DC-description">{prop.description}</p>
      <button className="DC-button">zobacz więcej </button>
    </div>
  );
};
