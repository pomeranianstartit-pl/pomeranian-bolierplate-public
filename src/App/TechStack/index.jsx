import { TechNote } from './TechNote/index';

import { dataData } from './data';

import './styles.css';

export function Tech() {
  function renderNote(note) {
    return <TechNote title={note.title} image={note.image} />;
  }
  return (
    <div className="tech">
      <h2 className="programstechstack">{'<'}TechStack</h2>
      {dataData.map(renderNote)}
    </div>
  );
}
