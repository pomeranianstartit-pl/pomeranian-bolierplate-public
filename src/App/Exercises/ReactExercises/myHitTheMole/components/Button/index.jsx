import './styles.css';

export const Button = ({
  isDisabled = false,
  isActive = false,
  onClick = () => {},
  children,
}) => {
  const buttonClassName = () => {
    if (isActive) {
      return 'my-mole--button active';
    }
    if (isDisabled) {
      return 'my-mole--button disabled ';
    }
    if (children === 'STOP') {
      return 'my-mole--button stop';
    }
    return 'my-mole--button non-active';
  };

  return (
    <button
      disabled={isDisabled}
      className={buttonClassName()}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
