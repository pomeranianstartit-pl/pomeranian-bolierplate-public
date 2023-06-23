import React from 'react';

import './style.css';

export function SelectorsAndCascade() {
  return (
    <div>
      <div className="mydiv-1">
        Jestem bardzo unikalnym elementem 1<p>Paragraf 1</p>
      </div>
      <div className="mydiv-2">Jestem bardzo unikalnym elementem 2</div>
      <div className="mydiv-3">Jestem bardzo unikalnym elementem 3</div>
      Jestem bardzo unikalnym elementem <span>abcd 3.1</span>
      <p>
        <span>abcd 3.2</span>
        <span>abcd 3.3</span>
      </p>
      <div className="mydiv-4">Jestem bardzo unikalnym elementem 4</div>
      <div className="sib">Jestem bardzo unikalnym elementem 5</div>
      <div className="sib">Jestem bardzo unikalnym elementem 6</div>
      <div className="sib">Jestem bardzo unikalnym elementem 7</div>
      <div>Jestem bardzo unikalnym elementem 6</div>
    </div>
  );
}
