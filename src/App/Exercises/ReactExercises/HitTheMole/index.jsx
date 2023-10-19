import { useState } from 'react';

 

export const HitTheMole = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);

 

  return (

    <div>

      <h2>

        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w

        którym się pojawił.{' '}

      </h2>

 

      {isGameStarted ? (

        <div>

          <div></div>

        </div>

      ) : (

        <div>

          {/* CZAS gry */}

          <div>

            <div className="title">Czas gry</div>

            <div className="content">

              <button>1 minuta</button>

            </div>

          </div>

 

          {/* LICZBA KRETÓW */}

          <div>

            <div className="title">Liczba kretów</div>

            <div className="content">

              <button>1 kret</button>

            </div>

          </div>

 

          {/* PRZYCISKI STERUJĄCE */}

          <div>

            <div className="title">Przyciski sterujące</div>

            <div className="content">

              <button>Start</button>

            </div>

          </div>

        </div>

      )}

    </div>

  );

};

 