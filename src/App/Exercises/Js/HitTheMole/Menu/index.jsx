export const Menu = ({ label, children }) => {
  return (
    <>
      <p>{label}</p>
      {children}
    </>
  );
};
