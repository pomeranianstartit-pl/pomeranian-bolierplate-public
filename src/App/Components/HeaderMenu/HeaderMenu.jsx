import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';

export function HeaderMenu() { 
  return ( 
    <div className="images-container"> 
      <SettingIcon /> 
      {/* ToDo: zamienić import avatara na komponent <RoundImage/> */}
      <div className="circular_image">
        <img src={require("../../Images/avatar.png")} alt='avatar' />
        {/* <img src='http://placekitten.com/500/500' alt="avatar" /> */}
      </div>
      <div className="name-surname-container">
        <h4>Wojciech Wysocki</h4>
        <h5>kursant</h5>
      </div>

      <MenuArrow className='menu-arrow' />
    </div> 
  );
}
