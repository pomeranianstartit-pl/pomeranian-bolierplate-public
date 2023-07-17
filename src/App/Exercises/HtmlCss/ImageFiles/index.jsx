import './styles.css';
import beetle from './beetle.jpg';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export function Exercise() {
  return (
    <>
    <img src={beetle} alt="Beetle image" />
      <RoundImage src={beetle} />
    </>
  );
}
