import './styles.css';

export const FaqQuestions = (props) => {
  const {
    question,
    answer,
    width,
    margin,
    boxSizing,
    padding,
    backgroundColor,
    borderLeft,
    borderRadius,
    filter,
  } = props;

  return (
    <div
      style={{
        width: width,
        margin: margin,
        boxSizing: boxSizing,
        padding: padding,
        backgroundColor: backgroundColor,
        borderLeft: borderLeft,
        borderRadius: borderRadius,
        filter: filter,
      }}
    >
      <h2 className="question">{question}</h2>
      <hr className="line" />
      <p className="answer">{answer}</p>
    </div>
  );
};
