import './styles.css';

export function Exercise() {
  return (
    <>
      <div>
        <h2 className="color-name">Jestem pomalowany przez color name</h2>

        <h2 className="color-hex">Jestem pomalowany przez color hex</h2>

        <h2 className="shorten-hex">Jestem pomalowany przez shorten hex</h2>

        <h2 className="rgb">Jestem pomalowany przez rgb</h2>

        <h2 className="rgba">Jestem pomalowany przez rgba</h2>

        <h2 className="hsl">Jestem pomalowany przez hsl</h2>
      </div>
      <div className="opacity">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div className="two-squares">
        <div className="square-1"></div>

        <div className="square-2"></div>
      </div>
    </>
  );
}
