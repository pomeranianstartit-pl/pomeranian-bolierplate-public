export function Title(props) {
  console.log(props.text);

  return <h2 className="blog-post-title">{props.title}</h2>;
}
