import './styles.css';

export const Author = (props) => {
  return (
    <div className="blog-post-author">
      <div className="siganture name">{props.name}</div>
      <div className="siganture title">{props.title}</div>
    </div>
  );
};
