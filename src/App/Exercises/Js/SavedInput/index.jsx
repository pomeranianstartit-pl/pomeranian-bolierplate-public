import './styles.css';

const nicks = [
  {
  nick: "Janek",
  id: 1,
},
{
  nick: "Zenek",
  id: 2,
},
  {
  nick: "Tomek",
  id: 3,
}]

export function SavedInput() {
  return (
    <div className='saved-input-container'>
      <div className='left-part'>
        <div className='nick-input-row'>
          <p>NICK</p>
          <input type="text" className='input-nick'/>
        </div>
        <button>DODAJ</button>
      </div>
      <div className='list'>
        {/* {nicks.map(()=>{

        })} */}
        <div className='row-on-list'>
          <p>JANEK</p>
          <button className='x-button'>X</button>
        </div>
        <div className='row-on-list'>
          <p>ZENEK</p>
          <button className='x-button' onClick={()=>{}}>X</button>
        </div>
      </div>
    
    </div>
  );
}
