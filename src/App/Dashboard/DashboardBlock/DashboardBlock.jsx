import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const DashboardBlock = ({ title, description, icon, link }) => {
  return (
    <div className="dashboard-block">
      <h2 className="block-title">{title}</h2>
      {icon}
      <div className="block-description">{description}</div>
      <Link to={link}>zobacz więcej ... </Link>
    </div>
  );
};

export default DashboardBlock;
