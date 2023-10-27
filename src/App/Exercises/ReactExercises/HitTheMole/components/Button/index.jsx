import './styles.css';

export const Button = ({
  classNames = '',
  isDisabled = false,
  isActive = false,
  children,
  onClick = () => {},
}) => {
  const activeClassName = isActive ? 'button--active' : '';
  const disabledClassName = isDisabled ? 'button--disabled' : '';
  const className = `mole-button ${classNames} ${activeClassName} ${disabledClassName}`;

  return (
    <button disabled={isDisabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
};
