/* 
1. Napisz funkcje ktora przyjmuje dwie tablice i zwraca nowa tablice, ktora zawiera tylko elementy, ktore wystepuja w obu tablicach.
Przykład: getCommonElements([1, 2, 3, 4, 5], [3, 5, 7, 9]) => [3, 5]
2. Napisz funkcje `averageFromArray` która liczy średnią z liczb w tablicy nie używając pętli for i reduce. Przykład: getAverageNumber([1, 2, 3, 4, 5, 6]) => 3.5
3. Napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby, ale w
odwróconej kolejności. 
Przykład: getReversedArray([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]
4. napisz funkcję, która przyjmuje tablicę obiektów, gdzie każdy obiekt reprezentuje osobę z imieniem i wiekiem, i zwraca tablicę z samymi imionami osób.
Przykład: getNames(people) => ["John", "Emily", "Peter"]
*/
const arr1=[1,2,3,4,5,6];
const arr2=[5,2,1,4];
const PEOPLE=[
    {name: 'John',age: 30},
    {name:'Emily', age: 25},
    {name: 'Peter', age: 35}
]


export const ArrayMethods = () => {

   
    
    // console.log("newwArr",newArr)

    function getCommonElements(arr1,arr2){
        // const newArr=[...arr1,...arr2];
        const newArr= arr1.filter(element => arr2.includes(element));
        return `Rezultat to: ${newArr}`;
    }
    function averageFromArray(arr1){
        const initialValue = 0;
        const avarageArr = arr1.reduce((a,b)=>(a+b))/arr1.length
        return `Średnia to: ${avarageArr}`
    }
    function reverseArray(arr1){
        const reverseArr = [...arr1].reverse()
        return `Odwrócona tablica: ${reverseArr}`
    }
    function getNames(people){
        const arrName = people.map(x => x.name)
        return `Imię: ${arrName}`
    }
    return (
        <div>
            Ćwiczenia:
        <ol>
            
            <li>{getCommonElements(arr1,arr2)}</li>
            <li>{averageFromArray(arr1)}</li>
            <li>{reverseArray(arr1)}</li>
            <li>{getNames(PEOPLE)}</li>
        </ol>
        <div>
        
        </div>
          
        </div>
    );
};