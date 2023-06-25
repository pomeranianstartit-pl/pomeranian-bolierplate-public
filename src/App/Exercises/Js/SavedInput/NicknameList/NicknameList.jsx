import './NicknameList.css';

export const NicknameList = ({ nicknameData }) => {
  return (
    <div className='list-container'>
    <ul>
      {/* Mapowanie danych nicknameData i generowanie elementów listy */}
      {nicknameData.map((nicknameDataElement) => (
        <li className='nickname-list' key={nicknameDataElement.id}>{nicknameDataElement.nickname}</li>
      ))}
    </ul>
    </div>
  );
      };