import './styles.css';
import snow_wolf from '../../../Images/snow-wolf.png';

export function FloatsAndPositioning() {
  return (
    <div className="floats-and-positioning">
      <div className="floats__positioning-relative">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
        doloribus magni nam quo, sapiente fugiat qui. Fugiat maiores mollitia
        saepe aperiam perferendis repellendus assumenda consequatur numquam
        natus, sit molestias debitis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sed maxime voluptas molestias illum nesciunt repellat
        deserunt quam quaerat eius magni. Voluptatem sit dolorum necessitatibus
        corrupti similique tempora quis ea debitis. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Quod, tempore. Illum nisi fugit magni
        distinctio sunt dolor nobis, ullam quam velit saepe adipisci
        perspiciatis assumenda corporis error consequatur iure laborum.
        <div className="floats__positioning-absolute">
          dymek z tekstem na pozycji absolutnej
        </div>
      </div>
      <div className="square-wrapper">
        <div className="square square-1">
          <div className="square square-2"></div>
          <div className="square square-3"></div>
        </div>
      </div>
      <div className="float-wrapper">
        <img
          className="float-img"
          width={100}
          height={100}
          src={snow_wolf}
          alt="Wolfu"
        />

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
}
