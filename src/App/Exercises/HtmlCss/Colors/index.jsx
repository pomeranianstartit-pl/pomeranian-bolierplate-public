import './styles.css';

export function Exercise() {
  return (
    <div>
      <h2 className="color-name"> jESTEM POMALOWANY przez kolor </h2>

      <h2 className="color-hex"> Jestem pomalowany rzez color hex</h2>
      <h2 className="shorten-hex"> Jestem pomalowany rzez color shorten-hex</h2>
      <h2 className="rgb"> Jestem pomalowany rzez color rgb</h2>
      <h2 className="rgba">Jestem pomalowany przez rgba</h2>
      <h2 className="hsl">Jestem pomalowany przez hsl</h2>

      <div className="opacity">
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quod. Amet
        blanditiis omnis nemo inventore autem fugiat nobis iusto, ipsum dolorum
        quos corrupti, rerum veritatis ex pariatur, dignissimos placeat alias.
      </div>
    </div>
  );
}
