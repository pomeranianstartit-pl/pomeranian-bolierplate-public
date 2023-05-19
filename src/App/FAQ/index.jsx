import './styles.css';
import svg from '../Images/faq-arrow.svg';

export const FAQ = () => {
  return (
    <div>
      <p className='header'>
       {">"} FAQ
      </p>
      <p className='subheader'>
      Tutaj znajdź odpowiedzi na najczęściej zadawane pytania
      </p>
      <div className='question-box'>
        <div className="collapsible"><img src={svg} alt="Ikona strzałki" />Jak mogę zapisać się na szkolenie?</div>
          <div className="content">
            <hr className='hr-line'></hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
      </div>

      <div className='question-box'>
        <div className="collapsible"><img src={svg} alt="Ikona strzałki" />Dokąd nocą tupta jeż?</div>
          <div className="content">
            <hr className='hr-line'></hr>
            <p>Dowiedz się jeśli chcesz</p>
          </div>
      </div>

      <div className='question-box'>
        <div className="collapsible"><img src={svg} alt="Ikona strzałki" />What is love?</div>
          <div className="content">
            <hr className='hr-line'></hr>
            <p>Baby don't hurt me, don't hurt me, no more</p>
          </div>
      </div>

    </div>
  );
};
// komentarz
