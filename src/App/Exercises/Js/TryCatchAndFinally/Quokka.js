const logIncident = (incident, stack) => {
    const err = new Error ("Sorry, there was an error on our side," + incident);
    err.stack = stack
  
    throw err
    googleAPI("analytics", err)
  }
  
  const api = (output) => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(output);
    }, 2000);
  
    reject(logIncident("Unathorized", `
      React app could resolve path ./src/components/component.jsx
    `))
  });
  
  const mockedResponseFromServer = 
  {
    users:
      [
        { name: "Lukas" },
        { name: "Adam" },
      ]
  }
  
  const getUsers = async () => {
    try {
      const data = await api(mockedResponseFromServer)
      return data
    } catch (err) {
      console.error(err)
    } finally {
      console.log("Finished loading data.")
    }
  }
  
  const getAllUSers = async () => {
    console.log(await getUsers())
  }
  
  getAllUSers()