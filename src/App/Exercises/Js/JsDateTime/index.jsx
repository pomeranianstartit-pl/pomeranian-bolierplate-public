import React from 'react';

export const JsDateTime = () => {
  const currentDate = new Date();
  console.log(currentDate.toISOString(), 'currentDate');
  return <div>Js date time</div>;
};
