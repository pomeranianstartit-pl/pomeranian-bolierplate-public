import './Playground.css';
import { ReactComponent as Mole } from '../../../../Images/mole.svg';

export const Playground = ({}) => {
  return (
    <div className="playground">
      <div className="field"></div>
      <div className="field svg">
        <Mole />
      </div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
      <div className="field"></div>
    </div>
  );
};
