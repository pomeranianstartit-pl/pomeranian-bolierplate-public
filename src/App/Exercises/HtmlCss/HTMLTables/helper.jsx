import './styles.css';
import Star from '../../../Images/rating_star.svg'


export function StarsRatio(number) {
  return <MyIcon ImgSrc={Star} name={'ratio-star'} />;
}


export function MyIcon({ ImgSrc, number, id }) {
  return (
    <span className="ratio-star">
      <img src={ImgSrc} alt="star" />
    </span>
  );
}