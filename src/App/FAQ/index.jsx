import './styles.css';
import { useState } from 'react';
import { ReactComponent as Arrowdown } from '../Images/arrowdown.svg';
import { ReactComponent as Arrowright } from '../Images/arrowright.svg';

import { SingleQuestion } from './singlequestion';

export const FAQ = () => {
  const [isTrue, setIsTrue] = useState(false);

  const clickHandler = () => {
    setIsTrue(!isTrue);
  };

  return (
    <div className="faq">
      <h1>
        <li>FAQ</li>
      </h1>
      <h3>Tutaj znajdziesz odpowiedzi na najczęściej zadawane pytania:</h3>
      <div>
        <p>
          <h4>
            <li className="linia" onClick={clickHandler}>
              {isTrue && (
                <button>
                  <Arrowdown />
                </button>
              )}
              {!isTrue && (
                <button>
                  <Arrowright />
                </button>
              )}
              Jak mogę zapisać się na szkolenie?
            </li>
          </h4>
          <p className="paragraf">
            {isTrue && (
              <span>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </span>
            )}
          </p>
        </p>
      </div>

      <SingleQuestion />
      {/* PUSTE -NIC NIE ZWRACA */}

      <SingleQuestion
        question={'Jak mogę zapisać się na szkolenie?'}
        answer={'Lorem ipsum=.....'}
      />

      <SingleQuestion
        question={'Czy dzis będzie padał deszcz?'}
        answer={'Może tak, możę nie'}
      />

      <SingleQuestion question={'3 PYTANIE'} answer={'3 ODPOWIEDŹ'} />

      <SingleQuestion question={'WIELKI FINAŁ'} answer={'A ŻEBYŚ WIEDZIAŁ'} />

      <SingleQuestion
        question={'Jak mogę zapisać się na szkolenie? '}
        answer={
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). '
        }
      />
    </div>
  );
};
