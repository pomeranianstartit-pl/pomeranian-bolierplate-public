import './faq.css';
import { SingleQuestion } from './SingleQuestion';
export function Faq() {
  return (
    <div>
      <div className="div1">
        <h1>FAQ</h1>
        <p>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>
        <div className="divBorder">
          <div className="divSzkolenie line">
            <ul>
              <li className="li">
                <img className="icon" src="/Icons/Vector.svg" alt="" />
                Jak mogę zapisać się na szkolenie?
              </li>
            </ul>
          </div>

          <article className="article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            voluptatem ipsum nihil, cumque velit sequi ducimus cupiditate optio,
            debitis, aliquam explicabo esse. Possimus consectetur doloribus illo
            quia odio tempore culpa! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nostrum, ex molestiae, perspiciatis modi error
            voluptate inventore, voluptas itaque soluta neque placeat non
            accusantium quaerat. Recusandae, nobis aut! Quod, recusandae
            aperiam?
          </article>
        </div>
      </div>
      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatem ipsum nihil, cumque velit sequi ducimus cupiditate optio, debitis, aliquam explicabo esse. Possimus consectetur doloribus illo quia odio tempore culpa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ex molestiae, perspiciatis modi error voluptate inventore, voluptas itaque soluta neque placeat non accusantium quaerat. Recusandae, nobis aut! Quod, recusandae aperiam?"
      />
    </div>
  );
}
