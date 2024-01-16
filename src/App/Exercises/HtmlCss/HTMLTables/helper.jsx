import './styles.css';
import Star from '../../../Images/rating_star.svg';

export function Icon({ ImgSrc, number, id }) {
  return (
    <span className="ratio-star">
      <img src={ImgSrc} alt="star" />
    </span>
  );
}
