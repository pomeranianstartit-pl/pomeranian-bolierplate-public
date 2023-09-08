import settingSVG from '../../Images/setting.svg';

export function SettingIcon({ size = '26px' }) {
  return (
    <img
      src={settingSVG}
      alt="settings"
      style={{ height: size, width: size }}
    ></img>
  );
}
