import './styles.css';

import React from 'react';

const DashboardCard = ({ sectionTitle, description, icon, link }) => {
  return (
    <div className="dashboard-card">
      <h3 className="card-title">{sectionTitle}</h3>
      <div className="icon-wrapper">{icon}</div>
      <p className="card-description">{description}</p>
      <a className="card-link" href={link}>
        zobacz więcej &gt;
      </a>
    </div>
  );
};

export default DashboardCard;