import { LoopsExercise } from './Loops';
import { ObjectsBasics } from './ObjectsBasics';
import './styles.css';


export function ExerciseJsArraysObjectsBasics() {


  //arrays of objects
 const peopleData = [
  { id: 11, name: "Maciej", age: 65, adress: "Gdansk" },
  { id: 13, name: "Jasmine", age: 25, adress: "Warszawa" },
  { id: 14, name: "Lilian", age: 3, adress: "Gdansk" },
  { id: 15, name: "Adrian", age: 17, adress: "Gdansk" },
  ];


 const peopleNames = peopleData.map((person) => person.name);
  console.log(peopleNames); // ["Maciej",  "Jasmine","Lilian"] --> flat array (płaska tablica)

    //this will return array of objects only with people form gdansk
  const peopleFromGdansk = peopleData.filter((personBlaBla) => personBlaBla.adress === "Gdansk");
  console.log("peopleFromGdansk",peopleFromGdansk); // [{ id: 11, name: "Maciej", age: 65, adress: "Gdansk" }, { id: 14, name: "Lilian", age: 3, adress: "Gdansk" },  { id: 15, name: "Adrian", age: 17, adress: "Gdansk" }] --> flat array

//array of arrays, array 2D 
const array2d = [[1],[2],[3]];

const arr = [1, 2, 3];
const lastElement = arr.pop(); // Usunięcie i zwrócenie ostatniego elementu
const firstElement = arr.shift(); // Usunięcie i zwrócenie pierwszego elementu

//rozbice elementow tablicy (destrukturyzacja)
const arr2 = [1, 2, 3, 4, 5];
const [firtsElement, secondElement, ...restElements] = arr2; //spread operator 
console.log(firtsElement); // 1
console.log(secondElement); // 2
console.log(restElements); // [3, 4, 5]


//adding elements to array (in mutable, not recommended)
  const arry3 = ["volvo", "mercedes", "audi"];
  arry3.push("opel");


  //adding elements to array (in immutable way)
  const arry4 = ["rayian", "wizz", "lot"];
  const new4Array = [...arry4, "lufthansa"]; // ... spread operator 
  console.log("new4Array", new4Array); 


  //adding elements to array (in immutable way)
  const arry5 = ["1", "2", "3"];
  const copiedArray = [...arry5]; // ... spread operator 
  console.log("copiedArray", copiedArray); 


  //extract element by index 
  const arry6 = ["rayian", "wizz", "lot"].indexOf(2); // lot

//extract element by index 
const arry8 = ["rayian", "wizz", "lot"].indexOf("lot"); // index 2 or 
// arry8.indexOf("emirates"); // -1 (błąd, to nie jest funkcja bo nie istnieje)

  //check length of array elements 
  const arry7 = ["rayian", "wizz", "lot", "rayian", "wizz", "lot", "rayian", "wizz", "lot", "rayian", "wizz", "lot", "rayian", "wizz", "lot"].length; // 3
  console.log("arry7 length", arry7);

  return (
    <div className='container--array-objects-basics'>
      <p>Działania na tablicach: 2023-10-09</p>
        <ul>
          {
            // React require uniq id for listed items (iteration thrue array of objects)
            peopleData.map((personData) => <li key={personData.id}>Imie: {personData.name}, Wiek: {personData.age}</li> )  
          }
        </ul>
        <br />
        <br />
        <ul>
          {
            // React require uniq id for listed items (iteration thrue flat array )
            peopleNames.map((peopleName, index) => <li key={index}>Imie: {peopleName}</li> )  
          }
        </ul>
        
      Imie pierwszej osoby:   {
 peopleNames[0] //Maciej

        }
          <br />
      <br />
      <div className='container--people-from-gdansk'>
      {
          peopleFromGdansk.map((peopleDataFromGdansk) => (
            <div className='container--people-data' key={peopleDataFromGdansk.id}>
              <div>Imie: {peopleDataFromGdansk.name}</div>
              <div>Wiek: {peopleDataFromGdansk.age}</div>
              <div>Adres: {peopleDataFromGdansk.adress}</div>
              <div>Id: {peopleDataFromGdansk.id}</div>
            </div>
          ))
      }
    </div>
    Import od Loops component:
    <LoopsExercise/>
    <ObjectsBasics/>
    </div>
  );
}