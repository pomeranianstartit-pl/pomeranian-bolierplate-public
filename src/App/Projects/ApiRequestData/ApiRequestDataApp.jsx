import { useEffect, useState } from 'react';

export const ApiRequestDataApp = ({ API_URL, endOfUrl }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Something went wrong :(');
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

      {/* {endOfUrl == '/posts' &&
        data.map((dataItem) => {
          return (
            <tr>
              <td>{JSON.stringify(dataItem.userId)}</td>
              <td>{JSON.stringify(dataItem.id)}</td>
              <td>{JSON.stringify(dataItem.title)}</td>
              <td>{JSON.stringify(dataItem.body)}</td>
            </tr>
          );
        })}
      {endOfUrl == '/comments' &&
        data.map((dataItem) => {
          return (
            <tr>
              <td>{JSON.stringify(dataItem.postId)}</td>
              <td>{JSON.stringify(dataItem.id)}</td>
              <td>{JSON.stringify(dataItem.name)}</td>
              <td>{JSON.stringify(dataItem.email)}</td>
              <td>{JSON.stringify(dataItem.body)}</td>
            </tr>
          );
        })}
      {endOfUrl == '/users' &&
        data.map((dataItem) => {
          return (
            <tr>
              <td>{JSON.stringify(dataItem.id)}</td>
              <td>{JSON.stringify(dataItem.name)}</td>
              <td>{JSON.stringify(dataItem.username)}</td>
              <td>{JSON.stringify(dataItem.email)}</td>
              <td>{JSON.stringify(dataItem.address)}</td>
              <td>{JSON.stringify(dataItem.phone)}</td>
              <td>{JSON.stringify(dataItem.website)}</td>
              <td>{JSON.stringify(dataItem.company)}</td>
            </tr>
          );
        })} */}
    </table>
  );
};
