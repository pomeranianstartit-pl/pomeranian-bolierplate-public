import './styles.css';

export const Title = (props) => {
  return (
    <div>
      <h2 class="blog-title">{props.text}</h2>
    </div>
  );
};
