import './styles.css';
import star from '/root/projects/pomeranian-bolierplate-public/src/App/Images/star.svg';

export const StarLogo = ({ src, size }) => {
  return (
    <div
      className="star"
      style={{
        backgroundImage: `url(${src})`,

        backgroundImage: 'url(' + src + ')',

        width: size,

        height: size,
      }}
    ></div>
  );
};
