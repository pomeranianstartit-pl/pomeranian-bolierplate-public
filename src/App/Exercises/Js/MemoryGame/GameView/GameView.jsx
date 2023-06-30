import './GameView.css'; 
import {Menu} from '../Menu/Menu';
import {Button} from '../Button/Button';

// import { Playground } from '../Playground/Playground';
export const GameView
= ({setGameStarted, time, setAmount, amount }) => {

  // useEffect (()=>{

  //   const setTime = setTimeout(()=>{  memoTime >=0 && setMemoTime (memoTime + 1);
  //   }, 1000);
  //   return ()=> clearTimeout(setTime)
  
  //   })

  return <>
   <Menu label="Czas gry" >
      <Button isDisabled={true}>{time}</Button>
      </Menu>
      <Menu label="Liczba ruchów" >
      <Button isDisabled={true}>{amount}</Button>
      </Menu>
      <Menu label="Przyciski sterujące">
        <Button onClick={() => {
          setGameStarted(false);
          setAmount(0);
        }}>Pass</Button>
      </Menu>
      {/* <Playground/> */}

  
  
  
  </>;

  
};
