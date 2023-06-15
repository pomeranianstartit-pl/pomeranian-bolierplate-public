import './styles.css';

export const Author = (props) => {
  return (
    <div>
      <p class="blog-post-author">{props.name}</p>
    </div>
  );
};
