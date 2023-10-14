import React from 'react';

import './styles.css';

const HeaderIcons = ({ icons }) => {
  return (
    <div className="header-icons">
      {icons.map((icon) => (
        <img src={icon.icon} alt={icon.key} />
      ))}
    </div>
  );
};

export default HeaderIcons;