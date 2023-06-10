import './Button.css';
// export const NazwaFunkcji = ({props, props}) => { return (co zwracamy) <>struktura Html z propsami</>}

export const Button = ({ onClick, children, isDisabled, isActive }) => {
  const activeClass = isActive ? 'button-active': ''
  // funkcja activeClass = jeśli jest aktywny to klasa jest aktywna lub '' - na kliknięcie nadajemy mu odpowiednią klasę zeby przypsiac mu CSS


  return (
    // className = `(template string - pozwala na wrzucenie js) string_class_name ${zmienna funkci}' - $ pozwala na zmienna

    <button className={`button ${activeClass}`} 
    onClick={onClick}
    disabled={isDisabled}>
    {children}
     
    </button>
  );
};


// właściwości buttonu - ma być aktywny na kliknięcie ma wywołać funkcję onClick = {xyz} - w tym przypadku funkcję onClick


// propsy:

// onClick (atrybut html buttona) = {props -> onClick} - funkcja odpowiedzialna za kliknięcie
// disabled (atrybut html buttona) = {props -> isDisabled} - funkcja odpoweidzialna za aktywność
// children czyli zawartość - wszystko co sie zawrze
