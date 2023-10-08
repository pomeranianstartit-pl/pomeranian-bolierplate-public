// import React from 'react';
// import { useState } from 'react';

// import './styles/header.css';

// import PomeranianLogo from '../Images/start-it-logo.svg';
// import SettingLogo from '../Images/setting.svg';
// import snowWolf from '../Images/snow-wolf.png';
// import { RoundedImage } from '../Components/RoundedImage/RoundedImage';
// import { Arrow } from '../Components/Icons/Arrow';

// export function AppHeader() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   //deklaracja funkcji przy użycviu function declaration
//   function toggleMenu() {
//     setIsMenuOpen(!isMenuOpen);
//   }
//   return (
//     <header>
//       <div className="header_container">
//         <img src={PomeranianLogo} alt="Logo" />

//         <div className="header_menu">
//           <img src={SettingLogo} alt="setting Logo" />
//           <RoundedImage src={snowWolf} size={{ width: 49, height: 49 }} />

//           <div className="header_name">
//             <span>Artur</span>
//             <span className="header_name_position">Kursant</span>
//           </div>

//           <Arrow onClick={toggleMenu} />
//         </div>

//         {isMenuOpen && (
//           <div>
//             <div className="appear_square">
//               <button className="button_appheader">Zaloguj się</button>
//               <p>
//                 Nie masz konta.{' '}
//                 <span className="header_color_red">Zarejestruj się</span>
//               </p>
//             </div>
//             <Arrow onClick={toggleMenu} className="header_arrow_click" />
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

import React from 'react';
import { useState } from 'react';

import './styles/header.css';

import PomeranianLogo from '../Images/start-it-logo.svg';
import SettingLogo from '../Images/setting.svg';
import snowWolf from '../Images/snow-wolf.png';
import { RoundedImage } from '../Components/RoundedImage/RoundedImage';
import { Arrow } from '../Components/Icons/Arrow';

export function AppHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //deklaracja funkcji przy użycviu function declaration
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header>
      <div className="header_container">
        <img src={PomeranianLogo} alt="Logo" />
        {!isMenuOpen && (
          <div className="header_menu">
            <img src={SettingLogo} alt="setting Logo" />
            <RoundedImage src={snowWolf} size={{ width: 49, height: 49 }} />

            <div className="header_name">
              <span>Artur</span>
              <span className="header_name_position">Kursant</span>
            </div>

            <Arrow onClick={toggleMenu} className="header_arrow_click" />
          </div>
        )}
        {isMenuOpen && (
          <div className="header_menu">
            <div className="appear_square">
              <button className="button_appheader">Zaloguj się</button>
              <p>
                Nie masz konta.{' '}
                <span className="header_color_red">Zarejestruj się</span>
              </p>
            </div>
            <Arrow
              onClick={toggleMenu}
              className="header_arrow_click header_arrow_position"
            />
          </div>
        )}
      </div>
    </header>
  );
}
