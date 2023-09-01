import './styles.css';
import { RoundImage } from '../RoundImage';
import { SettingIcon } from '../SettingIcon';
import { ArrowIcon } from '../Arrow';

export const Menu = () => {
  return (
    <div className="header-menu">
      <SettingIcon />
      <RoundImage url="https://media.licdn.com/dms/image/C4D03AQFNuBGti63RUA/profile-displayphoto-shrink_800_800/0/1639596139513?e=1698883200&v=beta&t=xh2fQ6EOvxLKN2b4jaiGcGfGL7PJ9BcYft1_t30e4YI" />
      <p className="osoba">
        <span>
          <b>Aleksandra</b>
        </span>
        <span>kursant</span>
      </p>
      <ArrowIcon />
    </div>
  );
};
