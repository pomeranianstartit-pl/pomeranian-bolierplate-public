import './styles.css';

export const Button = ({
  classNames = '',
  type = 'primary',
  isDisabled = false,
  isActive = false,
  onClick = () => {},
  children,
}) => {
  const activeClassName = isActive ? 'btn--active' : '';
  const disabledClassName = isDisabled ? 'btn--disabled' : '';
  const typeClassName = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    //...
  };
  const className = `btn ${classNames} ${activeClassName} ${disabledClassName} ${typeClassName[type]}`;
  return (
    <button className={className} disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  );
};
