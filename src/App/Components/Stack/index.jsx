import './styles.css';

export const Stack = ({ iconSrc, description }) => {
  return (
    <div className="stack">
      <img src={iconSrc} alt="" />
      <p>{description}</p>
    </div>
  );
};
