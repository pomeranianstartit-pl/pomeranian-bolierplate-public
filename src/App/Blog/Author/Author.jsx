import './styles.css';

export const Author = (props) => {
  return (
    <div>
      <h4 className="blog-author-signature">{props.author}</h4>
      <h6 className="blog-author-signature">{props.authorposition}</h6>
    </div>
  );
};
