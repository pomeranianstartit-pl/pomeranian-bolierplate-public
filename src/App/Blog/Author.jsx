export function Author(props) {
  return (
    <div>
      <h2 className="blog-post-signature">{props.author}</h2>
      <p>{props.position}</p>
    </div>
  );
}
