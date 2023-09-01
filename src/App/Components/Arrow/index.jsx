import arrowSVG from '../../Images/toggle-arrow.svg';

export function ArrowIcon({ size = '16px' }) {
  return (
    <img src={arrowSVG} alt="arrow" style={{ height: size, width: size }}></img>
  );
}
