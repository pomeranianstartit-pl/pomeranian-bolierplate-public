import './style.css';

export function CssAnimations() {
  return (
    // <div className="animation">
    <div>
      <p>
        Animacje w CSS można stworzyć za pomocą kilku właściwości. Główną
        właściwością są 'animation' oraz '@keyframes'. W '@keyframes' podajemy
        nazwę a następnie w {} podajemy co ile % ma się zmieniać animacja od
        0-100%. W 'animation-name' podajemy tą samą nazwę którą wykorzystaliśmy
        w '@keyframes', oraz ustawiamy czas trwania animacji w
        'animation-duration'. Aby animacja była zapętlona to ustawiamy za pomocą
        właściwości 'animation-iteration-count: infinite'.{' '}
      </p>
      <div className="question-wrapper">
        <h2 className="color-primary">Masz pytania ?</h2>
        <h2>Nasz specjalista chętnie Ci pomoże.</h2>
        <address>
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
