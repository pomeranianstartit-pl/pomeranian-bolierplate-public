const logIncident = (incident, stack) => {  
    const err = new Error ("Sorry, there was an error on our side," + incident);  
    err.stack = stack

    throw err
    // googleAPI("analytics", err)
}

const api = (output) => new Promise((resolve, reject) => {
    setTimeout(() => {    
        resolve(output);  
    }, 2000);

    reject(logIncident("Unathorized", `    
    React app could resolve path ./src/components/component.jsx  
    `))
});

const mockedResponseFromServer = {  
    users:    [      
        { name: "Lukas" },      
        { name: "Adam" },    
    ]
}

// setTimeout(() => {
//     resolve({
//         data: mockedResponseFromServer,
//         status: 200,
//         message: "OK"
//     });
// }, ping);

// const myParams = new URLSearchParams("search?q=cat&oq=cat&aqs=chrome..69i57j0i433i512j46i131i433i512j0i433i457i512j0i402i433i512j69i60l3.1191j0j7&sourceid=chrome&ie=UTF-8")
const getUsers = async () => {  
    try {    
        const data = await api(mockedResponseFromServer)    
        return data  
    } catch (err) {    
        console.error(err)  
    } finally {    
        console.log("Finished loading data.")  
    }}
    const getAllUSers = async () => {  
        console.log(await getUsers())
    }
    
    getAllUSers()