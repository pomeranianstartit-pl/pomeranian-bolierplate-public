import './styles.css';

export const Signature = (props) => {
  return (
    <div className="signature">
      <div className="author"> {props.author}</div>
      <br />
      <div className="occupation">{props.occupation}</div>
    </div>
  );
};
