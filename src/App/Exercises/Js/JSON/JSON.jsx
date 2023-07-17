import React from 'react';

export function ExerciseJSON() {
  const objectToEncode = {
    1: [],
    2: {},
    3: 1,
    4: Boolean(1),
    5: "string"
  };

  const stringifyObject = () => {
    const objectToEncodeJSON = JSON.stringify(objectToEncode);
    return objectToEncodeJSON;
  };

  const encodedObject = stringifyObject();

  return (
    <div className="container-local-storage">
      
      <pre>{encodedObject}</pre>
    
    </div>
  );
}




















