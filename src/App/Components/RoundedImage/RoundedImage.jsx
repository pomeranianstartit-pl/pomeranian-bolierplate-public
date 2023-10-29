import './styles.css';

export const RoundedImage = ({ src, size }) => {
  return (
    <div
      className="roundedImage"
      style={{
        backgroundImage: 'url(' + src + ')',
        width: size.width + 'px',
        height: size.height + 'px',
      }}
    ></div>
  );
};
