import React, { useState, useEffect } from 'react';

export const SavedInput = () => {
  const [nickname, setNickname] = useState();
  const [nicknameList, setNicknameList] = useState(() => {
    const storagedNicknames = localStorage.getItem('nickname');
  });

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleUpdateNicknameList = () => {
    setNicknameList(nickname);
  };

  useEffect(() => {
    localStorage.setItem('nickname', nickname);
  }, [nicknameList]);

  return (
    <div>
      <div>
        <h4>NICK</h4>
        <input
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
        ></input>
        <button onClick={handleUpdateNicknameList}>DODAJ</button>
        <div>{nicknameList}</div>
      </div>
    </div>
  );
};
