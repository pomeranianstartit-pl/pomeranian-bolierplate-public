import React from 'react';
import { Link } from 'react-router-dom';
export function BlocksTiles({ title, icon, description, link }) {
  return (
    <div className="block-tile-box">
      <h2 className="block-tiles-title">{title}</h2>
      <div>{icon}</div>
      <p className="block-tiles-description">{description}</p>
      <Link to={link}>
        <span className="see-more-color">zobacz więcej ...</span>
      </Link>
    </div>
  );
}
