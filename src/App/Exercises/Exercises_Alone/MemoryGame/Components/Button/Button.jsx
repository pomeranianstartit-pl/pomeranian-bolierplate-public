export const Button = ({
  classNames = '',
  isDisabled = false,
  isActive = false,
  onClick = () => {},
  children,
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
