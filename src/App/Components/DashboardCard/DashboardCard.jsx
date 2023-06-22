import './styles.css';

import React from 'react';

export const DashboardCard = ({ sectionTitle, icon, description, link }) => {
  return (
    <div className="dashboard-card">
      <h3>{sectionTitle}</h3>
      <div className="icon-wrapper">{icon}</div>
      <p>{description}</p>
      <a href={link}>zobacz więcej &gt;</a>
    </div>
  );
};

export default DashboardCard;
