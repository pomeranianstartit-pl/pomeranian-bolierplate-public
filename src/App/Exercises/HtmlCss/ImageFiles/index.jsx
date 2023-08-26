import './styles.css';
import star from '../../../Images/star.svg';

export function Exercise() {
  return (
    <div>
      <img
        alt="kotek"
        src="https://premium4animals.pl/upload/premium4/blog//Kot-bengalski-brazowy.jpg"
      />
      <br></br>
      <img alt="gwiazdka" src={star} />
    </div>
  );
}
