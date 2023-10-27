// Make a list of recipes from this array! For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.
// import { recipes } from './data1';

// export function Excersise() {
//   const ListofRecipes = recipes.map((recipe) => (
//     <div key={recipe.id}>
//       <h2>{recipe.name}</h2>
//       <ul>
//         {recipe.ingredients.map((ingredient) => (
//           <li key={ingredient}>{ingredient}</li>
//         ))}
//       </ul>
//     </div>
//   ));

//   return (
//     <div>
//       <h1>{ListofRecipes}</h1>
//     </div>
//   );
// }
//------------------------------------------------------------------------------------
// Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.

// export const Excersise = () => {
//   const chemist = people.filter((person) => person.profession === 'chemist');
//   const everyoneElse = people.filter(
//     (person) => person.profession !== 'chemist'
//   );
//   const ListOfProfessor = ({ people, title }) => {
//     return (
//       <>
//         <h1>{title}</h1>
//         <ul>
//           {people.map((person) => (
//             <li key={person.id}>
//               <img src={getImageUrl(person)} alt={person.name} />
//               <p>
//                 <b>{person.name}:</b>
//                 {' ' + person.profession + ' '}known for {person.accomplishment}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   };

//   return (
//     <article>
//       <h1>Scientists</h1>
//       <ListOfProfessor title="Chemists" people={chemist} />

//       <ListOfProfessor title="Everyone else" people={everyoneElse} />
//     </article>
//   );
// };

//Excercise1
// import { people } from './data';

// export const Excersise = () => {
//   const chemists = people
//     .cfilter((person) => person.profession === 'chemist')
//     .map((person) => <div>{person.name}</div>);

//   return chemists;
// };
