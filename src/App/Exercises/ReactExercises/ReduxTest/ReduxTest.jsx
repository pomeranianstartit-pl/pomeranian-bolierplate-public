import React from 'react';
import './style.css';

import { useSelector } from 'react-redux';

export function ReduxTest() {
  const testValue = useSelector((state) => {
    console.log({ state });
    return state?.storeTest?.value ?? 'not working';
  }); // We can show how to debug values of state without blowing application

  return <div>Store status: {testValue}</div>;
}
