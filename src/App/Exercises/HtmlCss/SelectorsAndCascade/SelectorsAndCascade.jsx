import './styles.css';
import React from 'react';

export function SelectorsAndCascade() {
  return (
    <div>
      <h1>Selektory i kaskadowość</h1>;
      <div className="element1">Jestem bardzo unikalnym elementem</div>
      <div className="element2">Jestem bardzo unikalnym elementem</div>
      <div className="element3">
        Jestem bardzo <span>unikalnym </span> elementem
      </div>
      <div className="element4">Jestem bardzo unikalnym elementem</div>
      <div className="element5">Jestem bardzo unikalnym elementem</div>
      <div className="element6">Jestem bardzo unikalnym elementem</div>
      <div className="element7">Jestem bardzo unikalnym elementem</div>
    </div>
  );
}
