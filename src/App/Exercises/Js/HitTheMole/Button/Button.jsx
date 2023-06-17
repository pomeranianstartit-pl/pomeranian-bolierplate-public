import './Button.css';

export const Button = ({children, isActive }) => {
  return (
    
    <button className={`button ${isActive ? 'button-active' : ''}`}>{children}</button>
  
  // <button className={`button ${active ? 'button-active : ''}}</button>
      
    

  );

};