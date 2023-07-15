import './styles.css';
function dodaj(input) {
  console.log('hello', input);
}

export const Colors = () => {
  return (
    <article>
      <h1>Kolory</h1>

      <section>
        <h2>Jak możemy definiować kolory</h2>

        <small>
          <a href="https://www.w3schools.com/colors/colors_converter.asp">
            Color converter
          </a>
        </small>

        <ul>
          <li>
            red - colorName <span className="colors-name">example</span>
          </li>

          <li>
            #f00 - shortenHex <span className="colors-hex">example</span>
          </li>

          <li>
            #ff0000 - normalHex{' '}
            <span className="colors-short-hex">example</span>
          </li>

          <li>
            rgb(255, 0, 0)- rgb <span className="colors-rgb">example</span>
          </li>

          <li>
            rgb(255, 0, 0, 1)- rgba <span className="colors-rgba">example</span>
          </li>

          <li>
            hsl(0deg 100% 50%)- hsl <span className="colors-hsl">example</span>
          </li>
        </ul>

        <div>*definicję kolorów możemy sprawdzić w DevTools</div>
      </section>

      <section>
        <h2>Dodatkowe źródło</h2>

        <p>system dwójkowy i szesnastkowy</p>

        <a href="https://pl.wikipedia.org/wiki/Dw%C3%B3jkowy_system_liczbowy">
          dwójkowy
        </a>

        <a href="https://pl.wikipedia.org/wiki/Szesnastkowy_system_liczbowy">
          szesnastkowy
        </a>
      </section>

      <section>
        <h2>Opacity</h2>

        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/opacity?retiredLocale=pl">
          MDN on opacity
        </a>

        <div className="colors-opacity">Ćwiczenie</div>
      </section>

      <section>
        <h2>rgba</h2>

        <div className="colors-rbga">example</div>
      </section>
    </article>
  );
};
