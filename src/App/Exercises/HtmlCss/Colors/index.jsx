import './styles.css';

export const Colors = () => {
  return (
    <article>
      <h2>Kolory</h2>
      <section>
        <h3>Jak możemy definiować kolory</h3>
        <small>
          <a href="https://www.w3schools.com/colors/colors_converter.asp">
            Color converter
          </a>
        </small>
        <ul>
          <li>
            blueviolet - colorName <br />
            <span className="colors-name">example</span>
          </li>
          <li>
            #002be2 - shortenHex <br />
            <span className="colors-hex">example</span>
          </li>
          <li>
            #e2f - normalHex <br />
            <span className="colors-short-hex">example</span>
          </li>
          <li>
            rgb(140, 41, 92)- rgb <br />
            <span className="colors-rgb">example</span>
          </li>
          <li>
            rgb(140, 41, 92, 0.9) - rgba
            <br />
            <span className="colors-rgba">example</span>
          </li>
          <li>
            hsl(0deg 100% 50%) - hsl <br />
            <span className="colors-hsl">example</span>
          </li>
        </ul>
        <div>
          Definicję kolorów możemy sprawdzić w <i>DevTools</i>.
        </div>
      </section>
      <section>
        <h3>Dodatkowe źródło</h3>
        <p>Systemy dwójkowy i szesnastkowy</p>
        <ul>
          <li>
            <a href="https://pl.wikipedia.org/wiki/Dw%C3%B3jkowy_system_liczbowy">
              dwójkowy
            </a>
          </li>
          <li>
            <a href="https://pl.wikipedia.org/wiki/Szesnastkowy_system_liczbowy">
              szesnastkowy
            </a>
          </li>
        </ul>
      </section>
      <section>
        <h3>Opacity</h3>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/opacity?retiredLocale=pl">
          MDN on opacity
        </a>
        <div className="colors-opacity">Ćwiczenie</div>
      </section>
      <section>
        <h3>rgba</h3>
        <div className="colors-rgba-opacity">example</div>
      </section>
    </article>
  );
};
