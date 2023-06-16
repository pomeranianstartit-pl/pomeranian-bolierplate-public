import './styles.css';
import { useState } from 'react';
export function GoogleFonts() {
  const[font,setFont] = useState('font-lato');
  const[theme,setTheme] = useState('light-theme');
  
  function handleFontChange(newFont){
    setFont(newFont);
  };
  
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };
  return (
  <div>
  <p className={`${font} ${theme} wrapper`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat faucibus sem, at ultrices magna ultrices id. Fusce vestibulum massa vitae metus sollicitudin scelerisque. Phasellus porta, lectus sed lobortis facilisis, tortor diam sollicitudin elit, vitae vulputate risus leo eget massa. Ut nec lorem pretium, malesuada tellus ut, ullamcorper augue. Nam dui lectus, mollis ac suscipit non, euismod sit amet ligula. Aenean eros nisi, iaculis in feugiat vel, iaculis ut urna. Aliquam nec imperdiet enim, id gravida odio. In et metus interdum, malesuada quam lobortis, tristique nibh. In hac habitasse platea dictumst. </p>
  <button onClick={() =>handleFontChange('font-poppins')}>Change font to: Poppins</button>
  <button onClick={() =>handleFontChange('font-lato')}>Change font to: Lato</button><br/>
  <button onClick={() =>handleThemeChange('light-theme')}>Change font to: Light</button>
  <button onClick={() =>handleThemeChange('dark-theme')}>Change font to: Dark</button>
  </div>
  )
  ;
}
