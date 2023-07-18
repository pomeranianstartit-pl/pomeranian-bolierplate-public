import './styles.css';

export const DashboardCard = (cos) => {
  return (
    <div className="dashboard-card-wrapper">
      <p className="dashnoard-card-title">{cos.title}</p>
      {cos.logo}
      <p className="dashboard-card-opis">{cos.opis}</p>
    </div>
  );
};

export default DashboardCard;
