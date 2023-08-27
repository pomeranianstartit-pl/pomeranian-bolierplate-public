import './styles.css';

// export const RoundImage = ({url}) =>
export const RoundImage = (props) => {
  const { url } = props;
  return (
    <div
      className="round-image"
      style={{ backgroundImage: `url('${props.url}')` }}
    ></div>
  );
};
