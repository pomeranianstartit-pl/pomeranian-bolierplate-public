import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';
import { useState } from 'react';

export function HeaderMenu() {
  return (
    <div class="images-container">
      <SettingIcon />
      {/* todo <RoundImage /> */}
      <div class="circular_image">
        <img src="http://placekitten.com/500/500" />
      </div>
      <div className="images-container-name">
        <h4>Karol Prusek</h4>
        <h5>Kursant</h5>
      </div>
      <MenuArrow className="menu-arrow" />
    </div>
  );
}

// export const HeaderMenu = (props) => {
//   const { buttonMenu, paragraphMenu, spanMenu } = props;

//   const [isArrowClicked, setArrowCliced] = useState(false);

//   function clickArrowClicked() {
//     setArrowCliced(!isArrowClicked);
//   }

//   return (
//     <div className="images-container">
//       <SettingIcon />
//       {/* todo <RoundImage /> */}
//       <div class="circular_image">
//         <img src="http://placekitten.com/500/500" />
//       </div>
//       <div className="images-container-name">
//         <h4>Karol Prusek</h4>
//         <h5>Kursant</h5>
//       </div>
//       <button onClick={clickArrowInHeaderMenu} className="header-button-arrow">
//         <MenuArrow className="menu-arrow" />
//       </button>
//       {isArrowClicked && (
//         <div className="header-hidingdiv">
//           <button className="header-button-log-in">Zaloguj się</button>
//           <p className="header-question">
//             Nie masz konta?
//             <span className="header-button-register">Zarejstuj się</span>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };
