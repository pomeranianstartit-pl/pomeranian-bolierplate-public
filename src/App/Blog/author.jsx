export function Author(props) {
  return (
    <address className="margin-top">
      <p className="blog-post-author-name">{props.fullName}</p>
      <p className="blog-post-author-position">{props.position}</p>
    </address>
  );
}
