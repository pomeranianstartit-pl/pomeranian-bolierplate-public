import './styles.css';

export const Button = ({ value, variant, onClick }) => {
  if (
    !(
      variant === 'primary' ||
      variant === 'secondary' ||
      variant === 'tertiary'
    )
  )
    console.warn('błędny parametr variant', variant);
  return (
    <button className={`memo-Button memo-Button--${variant}`} onClick={onClick}>
      {value}
    </button>
  );
};
