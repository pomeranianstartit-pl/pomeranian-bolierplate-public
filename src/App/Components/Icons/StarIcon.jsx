import starSVG from '../../Images/starSVG.svg';

export function StarIcon({ size = '20px' }) {
  return (
    <img src={starSVG} alt="star" style={{ height: size, width: size }}></img>
  );
}
