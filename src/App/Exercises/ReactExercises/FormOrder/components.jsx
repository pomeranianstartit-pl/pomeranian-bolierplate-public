import React from 'react';
import { useForm } from 'react-hook-form';

export function Select({ options, name, ...rest }) {
  const { handleSubmit, register } = useForm({  });
  return (
    <select {...register(name)} {...rest}>
      {options.map((value) => (
        <option value={value}>{value}</option>
      ))}
    </select>
  );
}
