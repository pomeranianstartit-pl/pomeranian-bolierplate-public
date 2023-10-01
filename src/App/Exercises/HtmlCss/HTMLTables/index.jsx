import './style.css';

export function HTMLTables() {
  const list = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];
  return (
    <div className="html-table-all">
      Ćwiczenia z tworzenia tabel
      <table className="html-table">
        <tr>
          <th>Plastic</th>
          <th>Acetone</th>
          <th>Flame test</th>
          <th>Heat</th>
          <th>
            Crease color
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.55309 0.538086L13.0456 5.63404L18.9713 7.38085L15.204 12.2771L15.3739 18.4527L9.55309 16.3828L3.73228 18.4527L3.90213 12.2771L0.13483 7.38085L6.06061 5.63404L9.55309 0.538086Z"
                fill="#FE3756"
              />
            </svg>
          </th>
        </tr>
        <tr>
          <td>1</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Softened</td>
          <td>No change</td>
          <td>No change</td>
          <td>White</td>
        </tr>
        <tr>
          <td>3</td>
          <td>No effect</td>
          <td>Red color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
        <tr>
          <td>4</td>
          <td>No effect</td>
          <td>Green color</td>
          <td>Softens</td>
          <td>None</td>
        </tr>
      </table>
      <ul>
        {list.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
}
