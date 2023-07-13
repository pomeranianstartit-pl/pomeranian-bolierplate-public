import './styles.css';

export function Colors() {
  return (
    <div>
      <h2 className="color-name">Jestem pomalowany przez kolor</h2>

      <h2 className="color-hex">Jestem pomalowany przez hex</h2>
      <h2 className="color-rgb">Jestem pomalowany przez rgb</h2>
      <h2 className="color-rgba">Jestem pomalowany przez rgba</h2>
      <h2 className="color-hsl">Jestem pomalowany przez hsl</h2>

      <div className="opacity">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quaerat
        tempora deleniti aspernatur odit! Expedita praesentium enim adipisci
        quod odio distinctio molestiae eligendi maxime? Eum veritatis aspernatur
        aperiam veniam! Iure?
      </div>
      <div className="two-squares">
        <div className="square-1"></div>

        <div className="square-2"></div>
      </div>
    </div>
  );
}
