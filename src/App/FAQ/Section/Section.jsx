import { SectionContent } from './SectionContent/SectionContent';
import { SectionTitle } from './SectionTitle/SectionTitle';
import React, { useState } from 'react';
import './styles.css';

export const Section = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const isArrowRotated = !isVisible;

  return (
    <div className="box">
      <div onClick={handleClick}>
        <SectionTitle title={title} rotatedArrow={isArrowRotated} />
      </div>
      {isVisible && (
        <div>
          <SectionContent content={content} />
        </div>
      )}
    </div>
  );
};
