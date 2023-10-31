import './styles.css';

import { SettingIcon } from '../Icons/SettingIcon';

import { ReactComponent as ArrowToggle } from '../../Images/toggle-arrow.svg';

export const HeaderMenu = () => {
  return (
    <>
      <div className="header-menu">
        <SettingIcon />
        <img
          className="cvPhoto"
          src="https://media.licdn.com/dms/image/D4D03AQEsYPEZ5A9qSA/profile-displayphoto-shrink_400_400/0/1669059855225?e=1699488000&v=beta&t=3pTPrTXHYvQB03QfUUHfzUcwiD3-Bj708OFIAyzWjac"
          alt="woman"
        />
        <div>
          <b className="header-user-name">Edyta</b> <br></br>
          <span className="header-user-position">kursantka</span>
        </div>
        <ArrowToggle />
      </div>
    </>
  );
};
