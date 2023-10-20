// import React from 'react';

const TechStackIcon = ({ img, name }) => {
  return (
    <div className="techstack-box">
      <img src={img} alt={name} />
      <div>{name}</div>
    </div>
  );
};

export default TechStackIcon;
