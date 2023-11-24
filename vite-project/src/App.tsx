import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AsyncTypeScriptCall } from './Components/TypeScript/AsyncTypeScriptCall'


export type ExampleObjectType = {
  name:string;
  surname:string;
  age:number;
}
//interfejs mozemy uzywac rowniez w klasach JS(OOP)
export interface ExampleObjectInterface {
  name:string;
  surname:string;
  isJavaScript:boolean;
}

interface PersonsInterface {
  name:string;
  age:number;
}
function App() {
  const [count, setCount] = useState(0)
//Typy
const stringType: string ='TEST';
const numberType:number=33;
const booleanType:boolean=true;
const undefinedType:undefined=undefined

let unknownType:unknown;

unknownType =5;
unknownType=true;

//TS z obiektami

//Podejscie pierwsza (typy podawane z palca)
const exampleObject:{name:string,surname:string,age:number} ={
  name:'maciej',
  surname:'dojlido',
  age:65
}


//Podejscie drugie (slowo kluczowe Type z wykorzystaniem w obiekcie )
const exampleObject2:ExampleObjectType ={
  name:'blabla',
  surname:'tests',
  age:123
}
//Podejscie drugie (slowo kluczowe Interface z wykorzystaniem w obiekcie )
const exampleObject3:ExampleObjectInterface ={
  name:'blabla',
  surname:'tests',
  isJavaScript:true
}

const {name,}=exampleObject
// TS z tablicami
const arrayOfNumbers:number[]=[1,2,3,4];
const arrayOfStrings:string[]=['1','2','3','4']
//Typy w TS(zarezerwowane dla tej biblioteki)

//const thatSucks: any=2; //dowolny
//tablica obiektów
const people = [

  { name: "Alice", age: 25 },

  { name: "Bob", age: 30 },

  { name: "Charlie", age: 22 },

];
//tablica imion osob doroslych
const adultPeopleAge =people.filter((person)=>person.age>=18).map((adult)=>adult.name)

function add(param1:number,param2:number):number{
  return param1+param2
}

add(numberType,numberType)

const remove = (param1:number,param2:number):number=>
   param1-param2
remove(numberType,numberType)

function countCharacters(parametr:string):number {
  return parametr.length
}

function isEven(num: number){
  //sprawdź czy liczba jest parzysta przy pomocy "modulo"
  console.log(num % 2 ===0)
  return num%2===0
}

//Operacje logiczne na typacch oraz opcjonalność
//znak zapytania jest odpowiedzialny za opcjonalnosc parametru (moze byc ale nie musi)
// | (pajda) to operator lub
function test(str?: string):string | undefined{
  return str;
}
test();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
      {adultPeopleAge.map((ageParam,index)=>(
    <li key={index}>{ageParam}</li>
  ))}</ul>
  <br/>
  <br/>
  <AsyncTypeScriptCall/>
    </>
  )
  
}

export default App
