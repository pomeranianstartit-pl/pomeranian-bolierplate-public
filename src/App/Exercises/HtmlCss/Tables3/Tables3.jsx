import React, { useState } from 'react';
import './styles.css';

export const Tables4 = () => {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    };
    setRows([...rows, newRow]);
  };

  const removeRow = (id) => {
    const updatedRows = rows.filter(row => row.id !== id);
    setRows(updatedRows);
  };

  const handleInputChange = (e, id) => {
    const { name, value } = e.target;
    const updatedRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>LP</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Numer telefonu</th>
            <th>E-mail</th>
            <th>Usuń</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input
                  type="text"
                  name="firstName"
                  value={row.firstName}
                  onChange={(e) => handleInputChange(e, row.id)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="lastName"
                  value={row.lastName}
                  onChange={(e) => handleInputChange(e, row.id)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="phoneNumber"
                  value={row.phoneNumber}
                  onChange={(e) => handleInputChange(e, row.id)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="email"
                  value={row.email}
                  onChange={(e) => handleInputChange(e, row.id)}
                />
              </td>
              <td>
                <button onClick={() => removeRow(row.id)}>Usuń</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>Dodaj wiersz</button>
    </div>
  );
};







