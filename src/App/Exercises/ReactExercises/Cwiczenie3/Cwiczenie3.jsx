import React from 'react';

import './style.css';

export function Cwiczenie3() {
  const [showText, setShowText] = React.useState(true);

  function hideText() {
    setShowText(false);
  }

  function displayText() {
    setShowText(true);
  }

  let text;
  if (showText) {
    text = 'Ukryj';
  } else {
    text = 'Pokaż';
  }
  return (
    <div className="cwiczenie3">
      <h2>See or not</h2>

      <button onClick={showText ? hideText : displayText}>{text}</button>

      {showText && <p>Teraz mnie widać</p>}
    </div>
  );
}

// 0. Figma blok 9, makieta 2
// 1. HTML z przyciskiem "Ukryj" i tekstem "Teraz mnie widać"
// 2. Po kliknięciu w przycisk "Ukryj" tekst znika

// export function Cwiczenie3() {
//   const [isTextVisible, setIsTextVisible] = React.useState(true);
//   const [buttonText, setButtonText] = React.useState('Ukryj');

//   function onButtonClick() {
//     if (isTextVisible) {
//       // if isTextVisible === true, hide text and change buttonText to "Pokaż"
//       setIsTextVisible(false);
//       setButtonText('Pokaż');
//     } else {
//       // if isTextVisible === false, show text and change buttonText to "Ukryj"
//       setIsTextVisible(true);
//       setButtonText('Ukryj');
//     }
//   }

//   return (
//     <div className="cwiczenie3">
//       <h2>See or not</h2>
//       <button onClick={onButtonClick}>{buttonText}</button>
//       {isTextVisible && <p>Teraz mnie widać</p>}
//       {/* If isTextVisible === true show paragraph */}
//     </div>
//   );
// }
