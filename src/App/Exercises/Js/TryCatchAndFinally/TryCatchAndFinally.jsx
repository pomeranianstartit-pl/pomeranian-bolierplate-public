import React, { useEffect } from "react";
import { useState } from 'react';
import { debounce, throttle } from 'lodash';

/* API is needed to deliver an id based on provided user name length
HTML will need an input for that
*/

 
const api = (userName) => 
new Promise((resolve, reject) => {
  // Let's assume we have heavy load under this URL
  const mockedResponseFromServer = userName.length;
 
  setTimeout(() => {
    resolve({
      data:{ id: mockedResponseFromServer },
      status: 200,
      message: 'OK',
    });
  }, 2000);
});


   export const TryCatchAndFinally = () => {

      const debouncedApi = React.useRef(debounce(api, 1000)).current;
      const [userName, setUserName] = useState ('');
      useEffect(() => {
         const getUserId = async (userName) => {
            if (!userName) {
               return;
            } 
            try {
               const {data} = await debouncedApi(userName)
               console.log('dla tego użytkownika id to: ' + data.id);
            } catch (err){
               console.error(err);
            }
         };

         getUserId(userName)
      }, [userName])

      useEffect(() => {
         return () => debouncedApi.cancel
      }, [debouncedApi]);

      const handleAddName = (userName) => {
         setUserName(userName)
      };

      const  throttleHandleAddName = throttle(handleAddName, 300);

      return (
         <div>
            <input 
            value={userName} 
            type="text"
            onBeforeInput= {(event) => {
               throttleHandleAddName (event.target.value); 
            }}
            />              
         </div>
      );
   };
   