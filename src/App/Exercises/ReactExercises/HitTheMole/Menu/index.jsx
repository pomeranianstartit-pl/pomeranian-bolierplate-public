import './styles.css';

export const Menu = ({ label, children }) => {
  return (
    <>
      <p>{label}</p>
      {children}
    </>
  );
};
