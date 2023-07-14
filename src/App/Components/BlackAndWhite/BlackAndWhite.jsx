import './styles.css';

export const BlackAndWhite = ({ src }) => {
  return (
    <div
      className="black-white"
      style={{
        backgroundImage: `url(${src})`,
        WebkitFilter: 'grayscale(100%)',
      }}
    ></div>
  );
};
