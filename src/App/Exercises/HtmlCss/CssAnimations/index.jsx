import './styles.css';

export function CssAnimations() {
  return (
    <div>
      <div className="">css animations</div>

      {/* To jest makieta 1 */}
      <div>
        <h2 className="color-primary style-h2 heading-animation">
          Masz pytania?
        </h2>
        <h2 className="style-h2">Nasz specjalista chętnie Ci pomoże.</h2>
        <address className="style-address">
          <p>Eleonora Frąckiewiczówna</p>
          <p className="font-weight-600 color-primary margin-bottom-17">
            Specjalista ds. finansowania
          </p>
          <p>efrackiewoczowna@rtc.pl</p>
          <p className="number-animation">500 677 543</p>
        </address>
      </div>
    </div>
  );
}
