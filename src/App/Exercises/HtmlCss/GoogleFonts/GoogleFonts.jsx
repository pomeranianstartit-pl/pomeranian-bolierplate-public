import './style.css';

export const GoogleFonts = () => {
  return (
    <div className="business-card">
      <section>
        <h2 id="header1">Masz pytania?</h2>
        <h2 id="header2">Nasz specjalista chętnie Ci pomoe</h2>
      </section>
      <section>
        <p id="paragraph1">Eleonora Frąckiewiczówna</p>
        <p id="paragraph2">Specjalista ds. finansowania</p>
      </section>
      <section>
        <a
          id="mail"
          href="linkto:https://allegro.pl/oferta/spinki-do-mankietow-jaroslaw-kaczynski-prezes-pis-12482621227"
        >
          efrackiewiczowna@rtc.pl
        </a>
        <a id="phoneNumber" href="tel:500677345">
          500 677 345
        </a>
      </section>
    </div>
  );
};

export const Lists = () => {
  return (
    <div className="lists">
      <ol start="2">
        <h2>My Pets</h2>
        <li style>Rengar</li>
        <li>Kha'Zix</li>
        <li>Nunu</li>
        <li>Teemo</li>
        <li>Darius</li>
      </ol>
    </div>
  );
};
