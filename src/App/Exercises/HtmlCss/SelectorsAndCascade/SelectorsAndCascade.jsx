import React from 'react';

import './style.css';

export function SelectorsAndCascade() {
  return (
    <div>
      <div className="mydiv-1">Jestem bardzo unikalnym elementem</div>
      <div id="mydiv-2">Jestem bardzo unikalnym elementem</div>
      <div className="mydiv-3">Jestem bardzo unikalnym elementem</div>
      <div className="mydiv-4">
        Jestem bardzo unikalnym elementem
        <span className="span1">Mam na imie Adrian </span>
        <span className="span1">Adrian</span>
      </div>
      <div className="mydiv-5">
        Jestem bardzo unikalnym elementem
        <p>asdasd</p>
        <p>sndfnsdfjkns</p>
      </div>
    </div>
  );
}
