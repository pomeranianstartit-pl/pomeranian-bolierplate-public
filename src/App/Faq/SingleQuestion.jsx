export function SingleQuestion({ answer, question }) {
  return (
    <div className="Faq-content">
      <div className="Faq-imagetitle">
        <img src="/Vector.svg" alt="" />
        {question}
      </div>
      <hr className="Faq-line"></hr>
      <div>{answer}</div>
    </div>
  );
}
