import './styles.css';
import React from 'react';

export const SelectorsAndCascade = () => {
  return (<div>
    <div id="first-uniqe-div">jestem bardzo unikalnym elementem 1</div>
    <div className="second-uniqe-div">jestem bardzo unikalnym elementem 2</div>
    <div><p>jestem bardzo unikalnym elementem 3</p></div>
    <div><p><span>jestem bardzo unikalnym elementem 4</span></p></div>
    <div><p>jestem bardzo unikalnym elementem 5</p>
      <p>jestem bardzo unikalnym elementem 6</p></div>
    <div><p>jestem bardzo unikalnym elementem 7</p></div>
  </div>
  );
};
