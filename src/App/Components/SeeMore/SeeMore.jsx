import './styles.css';

export const SeeMore = (props) => {
  return (
    <div className="see-more-block">
      <h3>{props.title}</h3>
      {props.icon}
      <p>{props.description}</p>
      <a href="">zobacz więcej &#62;</a>
    </div>
  );
};
