import './styles.css';

const foster_pets = [

  {

    name: 'Burek',

    age: 4,

    sex: 'pies',

    breed: 'mieszaniec',

    size: 'średni',

    chip: false,

    sterilized: true,

  },

  {

    name: 'Łatka',

    age: 7,

    sex: 'suczka',

    breed: 'owczarek niemiecki',

    size: 'duży',

    chip: true,

    sterilized: true,

  },

  {

    name: 'Reksio',

    age: 12,

    sex: 'pies',

    breed: 'beagle',

    size: 'duży',

    chip: true,

    sterilized: true,

  },

  {

    name: 'Lessie',

    age: 1,

    sex: 'suczka',

    breed: 'chihuahua',

    size: 'mały',

    chip: false,

    sterilized: true,

  },

];

export function Tables() {
  return (

<table>
<thead>

{Object.keys(foster_pets[0]).map((key) => (
<th className="th1" key={key}>{key}</th>

))}

</thead>

<tbody>

{foster_pets.map((dog) => (
<tr className='tr1' key={dog.id}>
<td className='td1'> {dog.name}</td>
<td className='td1'> {dog.age}</td>
<td className='td1'> {dog.sex}</td>
<td className='td1'> {dog.breed}</td>
<td className='td1'> {dog.size}</td>
<td className='td1'>
<input type="checkbox" checked={dog.chip} />
</td>
<td className='td1'>
<input type="checkbox" checked={dog.sterilized} />
</td>

</tr>

))}
</tbody>

</table>



)
}



