import './styles.css';

// export const RoundImage = (props) =>
export const RoundImage = ({ url, size = '50px' }) => {
  // const { url } = props;
  return (
    <div
      className="round-image"
      style={{
        backgroundImage: `url('${url}')`, //`url('${props.url}')`,
        width: size,
        height: size,
      }}
      // pierwsze wąsy - kawalek JS, drugie wąsy - przekazujemy obiekt
    ></div>
  );
};
