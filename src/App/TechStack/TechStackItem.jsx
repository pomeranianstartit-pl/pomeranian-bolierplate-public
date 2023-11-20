export const TechStackItem = ({ title, icon }) => {
  return (
    <div className="techstack-item">
      <img src={icon} alt={title} />
      <div className="techstack-item-title">{title}</div>
    </div>
  );
};
