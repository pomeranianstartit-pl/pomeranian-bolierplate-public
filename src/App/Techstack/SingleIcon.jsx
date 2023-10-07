export function SingleIcon({ source, text }) {
  return (
    <div className="singleIcon">
      <img src={source} alt="icon" />
      <div>{text}</div>
    </div>
  );
}
