import { MenuField } from '../MenuField';
import { Button } from '../Button';
import './styles.css';

export const GameField = ({ time, score, func }) => {
  // const [timeLeft, setTimeLeft] = useState(time);
  // const [intervalId, setIntervalId] = useState([]);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     timeLeft > 0 && setTimeLeft((prevState) => prevState - 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // });

  console.log(typeof time, 'time here');

  return (
    <div className="game--field">
      <MenuField title="Czas do końca">
        <Button isDisabled={true}>{time}</Button>
      </MenuField>
      <MenuField title="Wynik">
        <Button isDisabled={true}>{score}</Button>
      </MenuField>
      <MenuField title="Przyciski Sterujące">
        <Button onClick={func}>STOP</Button>
      </MenuField>
    </div>
  );
};
