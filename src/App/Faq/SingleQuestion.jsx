export function SingleQuestion({ question, answer }) {
  return (
    <div className="div1">
      <div className="divBorder">
        <div className="divSzkolenie line">
          <ul>
            <li className="li">
              <img className="icon" src="/Icons/Vector.svg" alt="" />
              {question}
            </li>
          </ul>
        </div>

        <article className="article">{answer}</article>
      </div>
    </div>
  );
}
