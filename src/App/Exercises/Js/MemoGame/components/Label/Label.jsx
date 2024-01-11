import './styles.css';

export const Label = ({ children }) => {
  return (
    <span className="memo-label">
      {children}
      <div></div>
    </span>
  );
};
