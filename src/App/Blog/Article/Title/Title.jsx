import './styles.css';

export const Title = (props) => {
  return (
    <>
      <span className="blog-date">{props.date}</span>
      <h2 className="blog-title">{props.text}</h2>
    </>
  );
};
