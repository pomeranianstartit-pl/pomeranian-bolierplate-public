import './styles.css';

export const Signature = (props) => {
  return (
    <>
      <div className="blog-author-signature">{props.author}</div>
      <div className="blog-author-position">{props.position}</div>
    </>
  );
};
