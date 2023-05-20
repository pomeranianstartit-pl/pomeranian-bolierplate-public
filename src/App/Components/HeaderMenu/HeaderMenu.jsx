import './styles.css';
import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';

export function HeaderMenu() {
  return (
    <div className="images-container">
      {' '}
      <SettingIcon />{' '}
      <div className="circular_image">
        {' '}
        <img src="http://placekitten.com/500/500" />{' '}
      </div>{' '}
      <div className='name-surname-container'>
        <h4>Jakub Kruk</h4>
        <h5>kurasnt</h5>
      </div>
      <MenuArrow className="menu-arrow" />{' '}
    </div>
  );
}
