import { useEffect, useState } from "react";
import './styles/style.css'

interface Planets {
  name:string;
  climate:string;
  terrain:string;
}

export const AsyncTypeScriptCall = () =>{
  const [getPlanets,setPlanets]=useState<Planets[]>([]);
  useEffect(()=>{
    async function fetchPlanets(){
      try{
      const response = await fetch('https://swapi.dev/api/planets/?page=1');
      if(!response.ok){
        console.error("Something went wrong");
        return;
      }
      const data:{results:Planets[]}=await response.json()
      setPlanets(data.results)
    }catch(err) {
      console.error(`Error! ${err}`)
    }
  }
fetchPlanets();
},[])

  return(<div className="container--fetch-star-wars-planets">
  <ul>
  {getPlanets.map((planet,index)=>(
    <li key={index}>
      <span>Climate: {planet.climate}</span>
      <span>Terrain: {planet.terrain}</span>
      <span>Name: {planet.name}</span>
    </li>))}</ul></div>)
}