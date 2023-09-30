import './style.css';

export function CssAnimations() {
  return (
    <div>
      {/* To jest content dotyczący makiety_1 */}
      <div className="question-wrapper">
        <h2 className="color-primary">Masz pytania</h2>
        <h2 className="animation">Nasz specjalista chętnie Ci pomoże.</h2>
        <address>
          <p className="animation2">Eleonora Frąckiewiczówna</p>
          <p className="font-weight-600 color-primary margin-bottom-17">
            Specjalista ds. finansowania
          </p>
          <p>efrackiewoczowna@rtc.pl</p>
          <p>500 677 543</p>
        </address>
      </div>
    </div>
  );
}
