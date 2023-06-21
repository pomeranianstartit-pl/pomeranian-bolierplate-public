import { useState } from 'react';
import './style.css';
import star from './star.svg';
// export const Tables = () => {  
//   return (
//     <>      
//     <button className="btn txt-dark">button</button>      
//     <button className="btn btn-error txt-light">error</button>      
//     <button className="btn btn-success txt-light">success</button>      
//     <button className="btn btn-warning txt-light">warning</button>      
//     <button className="btn btn-info txt-light">info</button>    
//     </>

//   );
// };


// export const Tables = () => {
//   const [foster_pets, setFoster_pets] = useState([
//     {
//       id: 0,
//       name: 'Burek',
//       age: 4,
//       sex: 'pies',
//       breed: 'mieszaniec',
//       size: 'średni',
//       chip: false,
//       sterilized: true,
//     },
//     {
//       id: 1,
//       name: 'Łatka',
//       age: 7,
//       sex: 'suczka',
//       breed: 'owczarek niemiecki',
//       size: 'duży',
//       chip: true,
//       sterilized: true,
//     },
//     {
//       id: 2,
//       name: 'Reksio',
//       age: 12,
//       sex: 'pies',
//       breed: 'beagle',
//       size: 'duży',
//       chip: true,
//       sterilized: true,
//     },
//     {
//       id: 3,
//       name: 'Lessie',
//       age: 1,
//       sex: 'suczka',
//       breed: 'chihuahua',
//       size: 'mały',
//       chip: false,
//       sterilized: true,
//     },
  
//   ]
//   );

//   const [newName, setNewName] = useState('');
//   const addRandomDog = () => {
//    setFoster_pets((available_before) => [{
//     id: 16,
//     name: "NewName",
//     age: 0,
//     sex: '-',
//     breed: '-',
//     size: '-',
//     chip: false,
//     sterilized: false, 
//   },
//     ...available_before,
//    ]
//   );
// };
//   return (
//     <>
//     <button onClick={addRandomDog}>dodaj psa</button>
//     <input
//         type="text"
//         onChange={(e) => {
//           setNewName(e.target.value);
//         }}
//       />
//     <table border={1} style={{ width: '100%' }}>
//       <thead>
//         <tr>
//           {Object.keys(foster_pets[0]).map((key) => (
//             <th key={key}>{key}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {foster_pets.map((dog) => (
//           <tr key={dog.id}>
//             <td>{dog.id}</td>
//             <td>{dog.name}</td>
//             <td>{dog.age}</td>
//             <td>{dog.sex}</td>
//             <td>{dog.breed}</td>
//             <td>{dog.size}</td>
//             <td>
//               <input type="checkbox" checked={dog.chip} />
//             </td>
//             <td>
//               <input type="checkbox" checked={dog.sterilized} />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </>
//   );
// };


const Star = ({ numOfStars }) => {
  const stars = new Array(numOfStars).fill();
  return (
    <>
      {stars.map((_) => (
        <img src={star} alt="rating star" />
      ))}
    </>
  );
};

export const Tables = () => {
  const [ratings, setRatings] = useState([
    {
      location: 'Cape Verde Islands',
      player_id: '#100120',
      rating: 2,
    },
    {
      location: 'Cape Verde Islands ',
      player_id: '#100122',
      rating: 3,
    },
    {
      location: 'Cape Verde Islands',
      player_id: '#100124',
      rating: 5,
    },
    {
      location: 'United States of America',
      player_id: '#100126',
      rating: 1,
    },
    {
      location: 'United States of America',
      player_id: '#100128',
      rating: 4,
    },
  ]);

  return (
    <>
      <table cellSpacing="0" className="tables">
        <thead>
          <tr>
            {Object.keys(ratings[0]).map((th) => (
              <th key={th}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ratings.map((row) => (
            <tr key={row.player_id}>
              <td>{row.location}</td>
              <td>{row.player_id}</td>
              <td style={{ display: 'flex', justifyContent: 'space-' }}>
                <Star numOfStars={row.rating} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};