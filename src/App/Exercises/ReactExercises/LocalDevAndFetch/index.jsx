import { useState } from 'react';
export const LocalDevAndFetch = () => {
  const [table, setTable] = useState(null);

  const handleTable = async () => {
    try {
      const response = await fetch('http://localhost:3333/api/todo');
      const json = await response.json();
      // console.log(json);
      setTable(json);
    } catch (error) {
      console.error(error);
    } finally {
      // whatever I want to put here
    }
  };

  return (
    <div className="table-wrapper">
      <h1 className="header">Table with data</h1>
      <button className="btn" onClick={handleTable}>
        Show me a table
      </button>
      <p className="table" src={table} alt="" />
    </div>
  );
};
