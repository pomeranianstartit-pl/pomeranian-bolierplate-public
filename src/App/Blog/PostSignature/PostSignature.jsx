import './styles.css';

export const PostSignature = (props) => {
  return (
    <div className="blog-post-signature">
      {props.name}
      <br />
      {props.role}
    </div>
  );
};
