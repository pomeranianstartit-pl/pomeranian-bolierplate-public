export function TechStackIcon({ ImgSrc, name }) {
  return (
    <div className="techstack-box">
      <img src={ImgSrc} alt="" />
      <p>{name}</p>
    </div>
  );
}
