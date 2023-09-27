import { FaqNote } from './components/FaqNote';

import { mockData } from './data';

import './styles.css';

export function Faq() {
  function renderNote(note) {
    return <FaqNote title={note.title} desciption={note.description} />;
  }
  return (
    <div className="faq">
      <h1>Faq</h1>
      {mockData.map(renderNote)}
    </div>
  );
}
