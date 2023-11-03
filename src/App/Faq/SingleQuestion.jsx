export function SingleQuestion({ answer, question }) {
  return (
    <div className="faq-item">
      <div className="faq-item-header">
        <img src="/Ikony/chevron.svg" alt="" />
        <h2 className="faq-item-title">{question}</h2>
      </div>
      <p className="faq-item-text">{answer}</p>
    </div>
  );
}
