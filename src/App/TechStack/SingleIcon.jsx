export function SingleIcon({ source, text }) {
  return (
    <div className="techstack-icon">
      <img src={source} alt="icon" />
      <div>{text}</div>
    </div>
  );
}
