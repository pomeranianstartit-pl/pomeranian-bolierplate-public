import './Faq.css';
import { SingleQuestion } from './SingleQuestion';
export function Faq() {
  return (
    <div className="Faq">
      <b>FAQ</b>
      <p>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania</p>

      <div className="faq-item">
        <div className="faq-item-header">
          <nav className="dropdown">
            <a href="#">
              <button>
                <img src="/Ikony/chevron.svg" alt="" />
              </button>
            </a>
            <h2 className="faq-item-title">
              Jak mogę zapisać się na szkolenie?
            </h2>
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat
                placerat suspendisse ante in cursus etiam ullamcorper.
                Sollicitudin egestas aliquam, adipiscing adipiscing iaculis
                habitant. Viverra pretium tincidunt nisl pellentesque ut
                adipiscing non.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit
              </p>
            </div>
          </nav>
        </div>
      </div>
      <SingleQuestion
        question="Jak moge zapisać się na szkolenie?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
      <SingleQuestion
        question="Jak moge zapisać się na szkolenie?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />

      <button className="button button-red">button</button>
    </div>
  );
}
