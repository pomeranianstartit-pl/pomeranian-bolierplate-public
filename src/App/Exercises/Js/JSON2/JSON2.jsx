import React from 'react';

export function ExerciseJSON2() {
  const [nickname, setNickname] = React.useState('');

  const handleInputChange = (event) => {
    setNickname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const encodedNickname = JSON.stringify(nickname);

    // Tutaj można przesłać zakodowany nick do serwera lub zapisać go w LocalStorage

    console.log(encodedNickname);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nickname:
        <input type="text" value={nickname} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
