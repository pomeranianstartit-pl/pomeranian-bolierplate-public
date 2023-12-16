import './styles.css';

export function MyIcon({ ImgSrc, name }) {
  return (
    <div className="techstack-box">
      <img src={ImgSrc} alt="" />
      <div>{name}</div>
    </div>
  );
}
