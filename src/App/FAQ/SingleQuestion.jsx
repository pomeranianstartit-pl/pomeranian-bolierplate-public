export function SingleQuestion({ question, answer }) {
  return (
    <section>
      <h2>{question}</h2>
      <hr />
      <p>{answer}</p>
    </section>
  );
}
