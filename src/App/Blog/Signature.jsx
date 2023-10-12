export function Signature(props) {
  return (
    <div>
      <p className="blog-author">{props.author}</p>
      <p className="blog-position">{props.position}</p>
    </div>
  );
}
