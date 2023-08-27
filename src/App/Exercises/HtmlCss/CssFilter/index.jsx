import { RoundImage } from '../../../Components/RoundImage';
import './styles.css';

export function Exercise() {
  return (
    <>
      <RoundImage url="https://cdn.pixabay.com/photo/2017/09/01/00/15/png-2702691_960_720.png" />
      <div className="background filtr1"></div>
      <div className="background filtr2"></div>
      <div className="background filtr3"></div>
      <div className="background filtr4"></div>
    </>
  );
}
