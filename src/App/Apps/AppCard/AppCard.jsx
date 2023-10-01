import './style.css';

import React from 'react';

const AppCard = ({ data }) => {
  const { sectionTitle, description, icon, link } = data;
  return (
    <div className="app-card">
      <a href={link}>
        <h3>{sectionTitle}</h3>
        <div className="app-icon">{icon}</div>
        <p>{description}</p>
        <p>Uruchom &gt;</p>
      </a>
    </div>
  );
};

export default AppCard;
