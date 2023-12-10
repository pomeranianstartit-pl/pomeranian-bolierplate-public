import './styles.css';

export const Button = ({
  isDisabled = false,
  isActive = false,
  onClick = () => {},
  children,
}) => {
  const ClassName = `${
    isActive ? 'my-mole--button active' : 'my-mole--button disabled'
  }`;

  return (
    <button disabled={isDisabled} className={ClassName} onClick={onClick}>
      {children}
    </button>
  );
};
