import './styles.css';
import { useState } from 'react';

export const GoogleFonts = () => {
  const [dynamicClass, setDynamicClass] = useState('font-lato');

  return (
    <>
      <div id="font-height">
        <p class={dynamicClass}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quidem nobis odio voluptatum quam molestiae architecto, nulla sequi.
          consectetur tempore quam pariatur adipisci molestias voluptas possimus
          similique vero sapiente maxime aut? Ut? Expedita reprehenderit modi
          nam voluptate voluptatem itaque vitae. Amet sint corrupti, error nam
          in eligendi, sed adipisci ad commodi accusantium cum deleniti,
          laudantium voluptas saepe excepturi quasi placeat ut numquam.
          Consequatur praesentium ab ex. Excepturi in saepe, voluptatum qui
          nesciunt natus perspiciatis hic facere quis quia ab, non minima
          consequuntur. Placeat natus earum aut voluptates dolores atque
          accusantium quo eaque?
        </p>
      </div>

      <div className="font-block">
        <button
          className="btn-font"
          onClick={() => {
            setDynamicClass('font-VT323');
          }}
        >
          VT323
        </button>
        <button
          className="btn-font"
          onClick={() => {
            setDynamicClass('font-lato');
          }}
        >
          Lato
        </button>
        <button
          className="btn-font"
          onClick={() => {
            setDynamicClass('font-oswald');
          }}
        >
          Oswald
        </button>
      </div>
    </>
  );
};
