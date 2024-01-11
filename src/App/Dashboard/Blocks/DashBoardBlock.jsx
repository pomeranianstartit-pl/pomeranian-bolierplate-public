import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

const DashboardBlock = ({ title, description, icon, link }) => {
  return (
    <Link to={link} className="link_block_description">
      <div className="dashboard-block">
        <h2 className="block-title">{title}</h2>
        {icon}
        <div className="block-description">{description}</div>
        zobacz więcej
      </div>
    </Link>
  );
};

export default DashboardBlock;
