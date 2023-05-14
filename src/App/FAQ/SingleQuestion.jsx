export const SingleQuestion = (props) => {
    const question = props.question
    const answear = props.answear
  return (
    <div className="box">
      <h1 className="header">{question}</h1>

      <a className="input">
        {answear}
      </a>
    </div>
  );
};
