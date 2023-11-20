import { ArrayMethods } from '../ArrayMethods';
import './styles.css';

/*
1. continue - pomija iteracje, ale pętla wykonuje się dalej
2. break - przerywa pętlę
3. find - zwraca na pierwsza wartość, która spełnia warunek
4. sort, toSorted - sortuje tablice (sort mutuje oryginalna tablice, a toSorted nie mutuje)
5. join - zwraca string złączony na podstawie parametru, kazdy element w tablic
6. reduce - akumuluje wynik i zwraca go jezeli cala petla sie wykona
*/

const NUMBERS =[1,3,66,98,155,2]
const STRINGS = ['Apple', 'Banana', 'Orange'];

export function ExerciseJsArrayBasics(){
  console.log("-----");
// Continue
  //   for (let i = 5; i > 0; i--) {
  //     if (i > 3) {
  //       continue;
  //     }
  //     console.log(i);
  //   }

  // Break
  // for (let i = 0; i <= 5; i++) {
  //   if (i === 3) {
  //     break;
  //   }
  //   console.log(i);
  // } 

  //   for (let i = 0; i < NUMBERS.length; i++) {
  //     const num = NUMBERS[i];
  //     if (num % 2 === 0) {
  //       console.log('Jestem parzystą liczbą:', num);
  //       continue;
  //     }
  //     console.log('Jestem nieparzystą liczbą:', num);
  //   }

  // const firstEven = NUMBERS.find((num) => num % 2 === 0);
  // console.log(firstEven);

 //   const sortedArray = [...NUMBERS].sort((a, b) => a - b);
  //   console.log(sortedArray);
  //   console.log(NUMBERS);

  // const stringFromArray = STRINGS.join('-');
  // console.log(stringFromArray);

  // const sum = NUMBERS.reduce((accumulator, currentValue) => {
  //   return accumulator + currentValue;
  // }, 0);
  // console.log(sum);

  // const sum1 = NUMBERS.reduce((accumulator, currentValue) => {
  //   if (currentValue % 2 === 0) {
  //     accumulator.push(currentValue);
  //   }
  //   return accumulator;
  // }, []);


  return(
    <div className='container-array-objects-basics'>
      <p>Działanie na tablicach:</p>
<ArrayMethods/>
    </div>
  )
}