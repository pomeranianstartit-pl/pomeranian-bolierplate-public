import arrowSVG from '../../Images/toggle-arrow.svg';

export function ArrowIcon({ size = '26px' }) {
  return (
    <img src={arrowSVG} alt="arrow" style={{ height: size, width: size }}></img>
  );
}
