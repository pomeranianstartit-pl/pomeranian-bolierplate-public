import { useEffect, useState } from 'react';

export const ApiRequestDataApp = ({ API_URL, endOfUrl }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Something went wrong');
        const dataFromServer = await response.json();

        setData(dataFromServer);
      } catch (err) {
        console.log(err.message);
      }
    };

    getPosts();
  }, [API_URL]);

  return (
    <table>
      <tbody>
        {data.map((item) => (
          <tr>
            {Object.values(item).map((value) => {
              return <td>{JSON.stringify(value)}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
