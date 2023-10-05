import { SingleQuestion } from './SingleQuestion';
import './faq.css';

export function Faq() {
  return (
    <div className="faq-style">
      <h1>Faq</h1>
      <div className="wstep">
        Tutaj znajdź odpowiedzi na najczęściej zadawane pytania
      </div>
      <div>
        <div className="div1">
          <img className="button-text-up" src="../chevron.down.svg" alt="" />
          <div className="button-text">
            Jak mogę zapisać się na szkolenie?
            <span className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
              rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
              suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
              aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
              tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit
            </span>
            <button className="button1 button-red">button</button>
          </div>
        </div>
      </div>
      <div className="button">
        <img src="../chevron.right.svg" alt="" />
        <div className="button-text ">Jak mogę zapisać się na szkolenie?</div>
      </div>
      <div className="button">
        <img src="../chevron.right.svg" alt="" />
        <div className="button-text ">Jak mogę zapisać się na szkolenie?</div>
      </div>
      <div className="button">
        <img src="../chevron.right.svg" alt="" />
        <div className="button-text ">Jak mogę zapisać się na szkolenie?</div>
      </div>

      <SingleQuestion
        question="Jak mogę zapisać się na szkolenie?"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
    rutrum ipsum, leo et in. Mattis porttitor volutpat placerat
    suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas
    aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium
    tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor
    sit amet, consectetur adipiscing elit"
      />
    </div>
  );
}
