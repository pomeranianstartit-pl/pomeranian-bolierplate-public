import './styles.css';
export const Button = ({ value, variant = 'primary', onClick }) => {
  const val_dec = (val) => {
    if (isNaN(val)) {
      return;
    }
    if (val < 5) {
      console.log(val, val < 5);
      return 'Elementy';
    } else {
      return 'Elementów';
    }
  };
  if (
    !(
      variant === 'primary' ||
      variant === 'secondary' ||
      variant === 'tertiary' ||
      variant === 'info'
    )
  )
    console.warn('błędny parametr variant', variant);
  return (
    <button className={`memo-Button memo-Button--${variant}`} onClick={onClick}>
      {value} {val_dec(value)}
    </button>
  );
};
