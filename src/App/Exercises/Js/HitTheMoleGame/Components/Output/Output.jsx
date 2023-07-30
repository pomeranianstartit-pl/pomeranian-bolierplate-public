import './styles.css';
export const Output = ({ value = 'empty' }) => {
    return <span className="mole-output"> {value} </span>;
};
