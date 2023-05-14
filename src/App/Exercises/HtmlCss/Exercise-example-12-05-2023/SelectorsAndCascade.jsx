import React from 'react'
import './styles.css';

const Slider =() => {
return (
  <div>
    <div>
      <div>
        <div>
          <section>
            <div>
              <p className="my-custom-arrow arrowbutton">coś tu powinno być napisane 
            </p> 
          </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);
};

export const SelectorsAndCascade = () => {

  return (
    <div className='selectors'> 
    <h3> The Lorem Ipsum experience </h3>
      <p class='lorem'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </p>
      <p className='my-custom-arrow arrow-button'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p> 
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </p>
      <div> 
        <a href="#">Puste</a>
        <a href="http://google.com">Google.com</a>
        <a href="#">Puste</a>
        <a href="/about">Przejdź do sekcji o nas</a>
      </div>
      <div data-position="2"> wpis </div>
      <div data-position="4"> wpis </div>
      <div data-position="6"data-nickname="nickname"> wpis </div>
      <div>wpis</div>
      <div data-position="8"> wpis </div>
      
      <div className="hoverable"> WIELKA PROMOCJA! </div>
    </div>
  )
}
