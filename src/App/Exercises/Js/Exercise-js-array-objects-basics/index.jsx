import './styles.css';

export function ExerciseJsArrayBasicsAndObjects () {


  //arrays of objects
 const peopleData = [
    {id:11, name: "Maciej", age:65},
    {id: 13, name: "Jasmine", age:25},
    {id:14, name: "Lilian", age:3}
  ];


 const peopleNames = peopleData.map((person) => person.name);
  console.log(peopleNames); // ["Maciej",  "Jasmine","Lilian"] --> flat array 


  return (
    <div className='container--array-objects-basics'>
      <p>Działania na tablicach: 2023-10-09</p>
        <ul>
          {
            // React require uniq id for listed items (iteration thrue array of objects)
            peopleData.map((personData, index) => <li key={personData.id}>Imie: {personData.name}, Wiek: {personData.age}</li> )  
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
    </div>
  );
}