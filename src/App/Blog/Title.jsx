export function Title(props) {
  return (
    <h2 className={props.className + ' blog-post-title'}>{props.title}</h2>
  );
}
