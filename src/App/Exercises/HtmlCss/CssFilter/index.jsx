import './style.css';

export function CssFilter() {
  return (
    <div className="cssFilters">
      <p>
        Właściwość filter w CSS, pozwala na wyblurowanie, zmianę koloru(czarno
        biały), zmianę na sepię itd. Najlepiej do zmiany tych zastosować filter
        generator w internecie.
      </p>
      <img
        src="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png"
        alt=""
      />
      <div className="black"></div>
    </div>
  );
}
