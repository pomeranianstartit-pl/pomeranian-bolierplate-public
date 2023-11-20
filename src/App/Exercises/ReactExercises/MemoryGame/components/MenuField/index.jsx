export const MenuField = ({ title = '', children }) => {
  return (
    <div>
      <h5>{title}</h5>
      <div>{children}</div>
    </div>
  );
};
