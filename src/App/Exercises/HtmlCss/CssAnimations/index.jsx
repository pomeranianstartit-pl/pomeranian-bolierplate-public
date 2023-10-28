import './styles.css';

export function CssAnimations() {
  return (
    <div>
      {/* To jest content dotyczący makiety_1 */}

      <div className="question-wrapper">
        <h2 className="color-primary header2">Masz pytania</h2>

        <h2 className="header2">Nasz specjalista chętnie Ci pomoże.</h2>

        <address className="address">
          <p>Eleonora Frąckiewiczówna</p>

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
