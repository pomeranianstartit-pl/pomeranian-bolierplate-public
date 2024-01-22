import './styles.css';

export const Button = ({
  classNames = '',
  isDisabled = false,
  isActive = false,
  onClick = () => {},
  type = 'button',
  children,
}) => {
  const activeClassName = isActive ? 'button--active' : '';
  const disabledClassName = isDisabled ? 'button--disabled' : '';
  const className = `ToDoServer-button button--single ${classNames} ${activeClassName} ${disabledClassName}`;

  return (
    <div className="button--single">
      <button
        disabled={isDisabled}
        className={className}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
