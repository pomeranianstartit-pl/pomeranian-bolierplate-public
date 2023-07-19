import './styles.css';


export const ArrayRendering = () => {

  const carsArray = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes']

  function mojaFunkcja(element) {

    return <li>{element}</li>
  }
  // zmienna.map(mojaFunkcja)

  // console.log(array.length);

  // const array1 = [1, 2, 3, 4]
  // const map1 = array1.map(function (e) {
  //   return e  3
  // })
  // console.log(map1);
  // console.log(zmienna);

  const carsArray2 = carsArray.map(mojaFunkcja)
  console.log(carsArray2);
  return (
    <div>
      <h2>Renderowanie z tablicy po map</h2>
      <ul>
        {carsArray2}
      </ul>
    </div>
  );
};
