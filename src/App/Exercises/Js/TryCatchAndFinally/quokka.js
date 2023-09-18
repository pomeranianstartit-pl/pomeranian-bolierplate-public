// const logIncident = (incident, stack) => {
//     const err = new Error ("Sorry, there was an error on our side," + incident);
//     err.stack = stack

//     throw err
//     googleAPI("analytics", err)
//   }

const api = (output) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(output);
    }, 2000);

    reject(
      logIncident(
        'Unathorized',
        `
      React app could resolve path ./src/components/component.jsx
    `
      )
    );
  });

const mockedResponseFromServer = [
  'bkkkkkkkkkkkkkkaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  'bkkkkkkkkkkkkkkaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  'bkkkkkkkkkkkkkkaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  'bkkkkkkkkkkkkkkaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  'bkkkkkkkkkkkkkkaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  'bkkkkkkkkkkkkkkaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
];
//   {
//     users:
//       [
//         { name: "Lukas" },
//         { name: "Adam" },
//       ]
//   }

const getUsers = async () => {
  try {
    const data = await api(mockedResponseFromServer);
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  } finally {
    console.log('Finished loading data.');
  }
};

const getAllUSers = async () => {
  console.log(await getUsers());
};

getAllUSers();

const Input = () => {
  const [value, setValue] = useState('initial');

  // memoize the callback with useCallback
  // we need it since it's a dependency in useMemo below
  const sendRequest = useCallback((value: string) => {
    console.log('Changed value:', value);
  }, []);

  // memoize the debounce call with useMemo
  const debouncedSendRequest = useMemo(() => {
    return debounce(sendRequest, 1000);
  }, [sendRequest]);

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
    debouncedSendRequest(value);
  };

  return <input onChange={onChange} value={value} />;
};

const obj = {}; // Prototyp: Object.prototype
const arr = []; // Prototyp: Array.prototype
const func = function () {}; // Prototyp: Function.prototype
const num = 42; // Prymityw - nie ma prototypu
const str = 'Hello'; // Prymityw - nie ma prototypu
