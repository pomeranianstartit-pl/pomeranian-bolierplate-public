import './styles.css';
import { useState } from 'react';
export function GoogleFonts() {
  const[font,setFont] = useState('font-lato');
  const[theme,setTheme] = useState('light-theme');
  const[shouldAnimate, setShouldAnimate] = useState('false');
  function handleFontChange(newFont){
    setFont(newFont);
  };
  
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };
  setTimeout(() => {
    setShouldAnimate(false);
  }, 2 * 1000); 
  

  return (
  <div>
    <p className={`${font} ${theme} ${shouldAnimate ? 'animation' : '' } wrapper`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat faucibus sem, at ultrices magna ultrices id. Fusce vestibulum massa vitae metus sollicitudin scelerisque. Phasellus porta, lectus sed lobortis facilisis, tortor diam sollicitudin elit, vitae vulputate risus leo eget massa. Ut nec lorem pretium, malesuada tellus ut, ullamcorper augue. Nam dui lectus, mollis ac suscipit non, euismod sit amet ligula. Aenean eros nisi, iaculis in feugiat vel, iaculis ut urna. Aliquam nec imperdiet enim, id gravida odio. In et metus interdum, malesuada quam lobortis, tristique nibh. In hac habitasse platea dictumst. </p>
    <button onClick={() =>handleFontChange('font-poppins')}>Change font to: Poppins</button>
    <button onClick={() =>handleFontChange('font-lato')}>Change font to: Lato</button><br/>
    <button onClick={() =>handleThemeChange('light-theme')}>Change font to: Light</button>
    <button onClick={() =>handleThemeChange('dark-theme')}>Change font to: Dark</button><br />
    <button onClick={() =>setShouldAnimate('true')}>Animacja</button>
    <button onClick={() =>setShouldAnimate('false')}>STOP</button>
  </div>
  )
  ;
};
export const Exercise2 = () => {
  return (
    <div className="business-card">
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
    </div>
  );
};
export const Lists = () => {
  return (
    <div className='list'>
      <h1>My Pets</h1>
      <ol start="2">
        <li>Ciri</li>
        <li>Lucka</li>
        <li>Future animal</li>
      </ol>
    </div>
  )
};
