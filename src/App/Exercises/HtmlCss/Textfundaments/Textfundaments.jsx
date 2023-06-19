import './styles.css';

// Ćwiczenie:
//Kopiujemy kod z pliku i zmieniamy w nim klasę na
//"faked-tags"Zmiana tagów h1-h6, p, ul, li, small
//na div Zmiana pozostałych tagów na span Dodanie stylowania
//do elementów div/span (oczywiście w odpowiednich klasach)
//aby obydwa divy original-tags oraz faked-tags wyglądały identycznie lub jak najbardziej podobnie.

export function TextFundaments() {
  return (
    <div>
      <div className="faked-tags">
        <div className="article-title">Tytuł</div>
        <div className="article-date">05.2023</div>
        <div className="subtitle">
          H<span className="lower-index">2</span>O is good for you
        </div>
        <div>
          Staying <span className="bolder-text">hydrated</span> is one of the
          best things you can do for your overall health. Staying{' '}
          <span className="bolder-text">hydrated</span> can help support
          physical performance, prevent headaches and constipation, and more.
        </div>
        <div className="subtitle">
          25<span className="upper-index">th</span> birthday
        </div>
        <div>
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday <span className="citation">quote</span> or wish that
          will surely make that special someone’s day a great day. Whether
          you’re celebrating your birthday or someone else’s, you can rely on
          our list of <span className="lean-font">happy birthday</span>{' '}
          <span className="citation">quotes</span> to help put a smile on
          someone’s face. From inspirational to funny to cute sayings, browse
          our list of
          <span className="citation">quotes</span> to find one that resonates
          with you. <span className="crossed-out-text">Nothing</span> can stop
          you!
        </div>
        <div className="subtitle">
          Why not to use <span className="underline-text">lists</span> ?
        </div>
        <div>
          <div className="list-title">
            A lot of things to do <span className="lean-font">#todo</span>
          </div>
          <div>
            <div className="list-element">Todo 1</div>
            <div className="list-element">Todo 2</div>
            <div className="list-element">Todo 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
