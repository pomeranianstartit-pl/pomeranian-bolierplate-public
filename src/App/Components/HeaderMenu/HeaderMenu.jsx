import './styles.css';
import {Logo} from '../Logo/Logo';
import {SettingIcon} from '../Icons/SettingIcon';
import {ReactComponent as ArrowDown} from '../../Images/arrowdown.svg';
import {MenuArrow} from '../Icons/MenuArrow'
export function HeaderMenu (){
  return (
    
    <div class="images-container">
      <div class="name">
      <h4>Juan Pablo Wassermüller </h4>
      <h5>Mściciel</h5>
      </div>
      <SettingIcon />
      <ArrowDown/>
      {/* todo: <Roundimage/> */}
      <div className="circular_image">
        <img src="http://placekitten.com/500/500" />
      </div>
      <MenuArrow className="menu_arrow" />
    </div>

  // 
  //   <div>
  //     <Logo/>
  //     <div className="header-title">Tytuł nagłówka</div>
  //     <div></div>
  //   </div>
  // </header>
  )

}
