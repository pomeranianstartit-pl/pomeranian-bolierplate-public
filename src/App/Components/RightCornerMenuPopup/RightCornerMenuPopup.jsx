import './styles.css';
import { useState } from 'react';
import { MenuArrow } from '../Icons/MenuArrow';
// import ikony //


 // zaimplementowanie funkcji//
export const RightCornerMenuPopup = () => {
  const [isTrue, setIsTrue] = useState(true);
  const clickHandler = () => {
    setIsTrue(!isTrue);
  };


  return (
    
    <div>
      {/* widoczne w appheaderze  funkcja- on click */}
      <button className="arrow" onClick={clickHandler}>
      <MenuArrow />
      </button>
      
    
      
      {isTrue && (
        <div className="loginContainer">
          
      <div className='loginContainer_buttonContainer'></div>
          <button className='Login'>ZALOGUJ SIĘ</button>
          <p>
            Nie masz konta?
            <span>Zarejetruj się.</span>
          </p>
        </div>
      )}
      </div>

    
  );
};
