import { FAQNote } from './FAQNote/index';

import { mockData } from './data';

import './styles.css';

export function FAQ() {
  function renderNote(note) {
    return <FAQNote title={note.title} desciption={note.description} />;
  }
  return (
    <div className="faq">
      <h1>Faq</h1>
      <p>Tutaj znajdz odpowiedzi na najczesciej zadawane pytania</p>

      {mockData.map(renderNote)}
    </div>
  );
}
