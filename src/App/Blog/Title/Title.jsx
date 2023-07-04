import './styles.css';

export const Title = (props) => {
  return (
    <div>
      <h1 className="blog-post-title">{props.text}</h1>
    </div>
  );
};
