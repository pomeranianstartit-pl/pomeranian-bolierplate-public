import './styles2.css';

const foster_player = [

  {

    Location: 'Cape Verde Islands',

    PLAYER_ID: '#100120',

    Rating: 'xx',

  },

  {

    Location: 'Cape Verde Islands',

    PLAYER_ID: '#100122',

    Rating: 'xxx',

  },

  {

    Location: 'Cape Verde Islands',

    PLAYER_ID: '#100124',

    Rating: 'xxxxx',

  },

  {

    Location: 'United States of America',

    PLAYER_ID: '#100126',

    Rating: 'x',

  },

  {

    Location: 'United States of America',

    PLAYER_ID: '#100128',

    Rating: 'xxxxx',

  },

];

export function Tables2() {
  return (

<table className='rating-table2'>

<thead>

{Object.keys(foster_player[0]).map((key) => (
<th className='2' key={key}>{key}</th>

))}

</thead>

<tbody>

{foster_player.map((player) => (
<tr className='rating-tr2'> {player.id}
<td className='rating-td2'> {player.Location}</td>
<td className='rating-td2'> {player.PLAYER_ID}</td>
<td className='rating-td2'> {player.Rating}</td>

</tr>

))}
</tbody>

</table>



)
}



