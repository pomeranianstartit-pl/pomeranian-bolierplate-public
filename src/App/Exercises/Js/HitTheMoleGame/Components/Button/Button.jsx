import './styles.css';

export const Button = ({ value, variant = 'primary', onClick }) => {
  if (
    !(
      variant === 'primary' ||
      variant === 'secondary' ||
      variant === 'tertiary' ||
      variant === 'frozen'
    )
  )
    console.log('Błędny parametr variant', variant);
  return (
    <button onClick={onClick} className={`mole-button mole-button--${variant}`}>
      {value}
    </button>
  );
};
