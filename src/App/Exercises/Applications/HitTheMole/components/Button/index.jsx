import './styles.css';

export const Button = ({
  classNames = '',
  isDisabled = false,
  isActive = false,
  onClick = () => {},
  children,
}) => {
  const activeClassName = isActive ? 'button--active' : '';
  const disabledClassName = isDisabled ? 'button--disabled' : '';
  const className = `mole-button button--single ${classNames} ${activeClassName} ${disabledClassName}`;

  return (
    <div className="button--single">
      <button disabled={isDisabled} className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
