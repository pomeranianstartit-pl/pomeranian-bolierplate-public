export function Author(props) {
  return (
    <h2 className={props.className + ' blog-signature blog-signature-padding'}>
      {props.author}
    </h2>
  );
}
