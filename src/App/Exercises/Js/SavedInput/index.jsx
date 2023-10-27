import React, { useState, useEffect } from 'react';
import './styles.css';

export const SavedInput = () => {
  // const [nickname, setNickname] = useState('');
  // const [nicknameList, setNicknameList] = useState(() => {
  //   const storagedNicknames = localStorage.getItem('nickname');
  // });
  // useEffect(() => {
  //   localStorage.setItem('nickname', JSON.stringify(nicknameList));
  // }, [nicknameList]);
  // const handleNicknameChange = (event) => {
  //   setNickname(event.target.value);
  // };
  // const handleUpdateNicknameList = () => {
  //   setNicknameList([nickname]);
  // };
  // return (
  //   <div>
  //     <div>
  //       <h4>NICK</h4>
  //       <input
  //         type="text"
  //         value={nickname}
  //         onChange={handleNicknameChange}
  //       ></input>
  //       <button onClick={handleUpdateNicknameList}>DODAJ</button>
  //       <div>{nicknameList}</div>
  //       <button>Remove nickname</button>
  //     </div>
  //   </div>
  // );

  const [nickname, setNickname] = useState('');
  const [nicknamesList, setNicknamesList] = useState(() => {
    const storedNicknames = localStorage.getItem('nicknames');
    return storedNicknames ? JSON.parse(storedNicknames) : [];
  });

  useEffect(() => {
    localStorage.setItem('nicknames', JSON.stringify(nicknamesList));
  }, [nicknamesList]);

  const handleInputChange = (e) => {
    setNickname(e.target.value);
  };
  const handleResetNicknamesList = () => {
    setNicknamesList([]);
    localStorage.removeItem('nicknames');
  };

  const handleAddNickname = () => {
    setNicknamesList([...nicknamesList, nickname]);
    setNickname('');
  };

  return (
    <div className="savedInput-wrapper">
      <h1>NICK</h1>
      <input type="text" value={nickname} onChange={handleInputChange} />
      <button onClick={handleAddNickname}>DODAJ</button>
      <div>
        <ul>
          {nicknamesList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={handleResetNicknamesList}>X</button>
      </div>
    </div>
  );
};
