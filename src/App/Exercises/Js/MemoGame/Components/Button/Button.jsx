import './styles.css';

export const Button = ({ value, variant = 'primary', onClick }) => {
  if (
    !(
      variant === 'primary' ||
      variant === 'secondary' ||
      variant === 'tertiary'
    )
  )
    console.warn('błędny parametr variant', variant);
  return (
    <button className={`memo-button memo-button--${variant}`} onClick={onClick}>
      {value}
    </button>
  );
};
