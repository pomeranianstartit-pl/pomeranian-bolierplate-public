import { TechNote } from './TechNote/index';

import { dataData } from './data';

import './styles.css';

export function Tech() {
  function renderNote(note) {
    return <TechNote title={note.title} image={note.image} />;
  }
  return (
    <div className="tech">
      <div><h2 className="programstechstack">{'<'}TechStack</h2></div>
      <div className='alltechstack'> {dataData.map(renderNote)} </div>
    </div>
  );
}
