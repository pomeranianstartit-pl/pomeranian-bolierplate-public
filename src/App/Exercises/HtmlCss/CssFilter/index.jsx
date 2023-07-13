import './styles.css';

export function CssFilter() {
  return (
    <div>
      <div className="background-url-main">
        <div className="original-div">
          <img width="200" src="/sea.jpg" alt="sea picture" />
        </div>
        <div className="filter-div">
          <img width="200" src="/sea.jpg" alt="sea picture" />
        </div>
      </div>
    </div>
  );
}
