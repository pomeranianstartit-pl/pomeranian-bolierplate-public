import './styles.css';

export const RoundImage = ({ url }) => {
  return (
    <div
      className="round-image"
      style={{ backgroundImage: `url('${url}')` }}
    ></div>
  );
};
