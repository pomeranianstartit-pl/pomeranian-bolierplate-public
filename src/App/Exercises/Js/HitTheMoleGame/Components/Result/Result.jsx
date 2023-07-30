import './styles.css';

export const Result = ({ score, duration }) => {
  return (
    <h2 className="mole-result">{`Gratulację! Twój wynik to ${score} złapane krety w czasie ${duration} minuty!`}</h2>
  );
};
