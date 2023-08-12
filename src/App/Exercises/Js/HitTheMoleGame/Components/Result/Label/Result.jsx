import './styles.css';
export const Result = ({ score, duration }) => {
    return (
        <span className="mole-result">
            {`Gratulację! Twój wynik to ${score} złapane krety w czasie ${duration}`}
        </span>
    );
};
