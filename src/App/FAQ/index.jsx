import { FAQNote } from './components/FAQNote';

import { mockData } from './data';

import './styles.css';

export function FAQ() {
  function renderNote(note) {
    return <FAQNote title={note.title} desciption={note.description} />;
  }
  return (
    <div className="faq">
      <h1>{'< FAQ'}</h1>
      {mockData.map(renderNote)}
    </div>
  );
}