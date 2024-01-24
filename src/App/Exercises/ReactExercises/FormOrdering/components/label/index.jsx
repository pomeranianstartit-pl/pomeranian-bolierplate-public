import '../../styles.css';
export const Label = ({ children, value, className }) => {
  return (
    <>
      <div className="FormOrdering_label_div">
        <label htmlFor={value}>
          <p className="FormOrdering_label_p">{children}</p>
        </label>
      </div>
    </>
  );
};
