import { useState } from 'react';
import './styles.css';

export function Exercise() {
  const [animation, setAnimation] = useState('buisness-card');
  function handleAnimation(newAnimation) {
    setAnimation(newAnimation);
  }
  return (
    <p>
      <div className={animation}>
        <section>
          <h2>Masz pytania?</h2>
          <h2>Nasz specjalista chętnie Ci pomoże.</h2>
        </section>
        <section>
          <p>Eleonora Frąckiewiczówna</p>
          <p>Specjalista ds. finansowania</p>
        </section>
        <a href="mailto:efrackiewoczowna@rtc.pl">efrackiewoczowna@rtc.pl</a>
        <a href="tel:500677543">500 677 543</a>
        <button onClick={() => handleAnimation('business-card-animation')}>
          Click here
        </button>
      </div>
    </p>
  );
}
