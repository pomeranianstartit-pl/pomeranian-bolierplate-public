import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from 'yup';
export const Input = ({ type = 'text', name, value, text }) => {
  const {
    register,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  return (
    <div>
      <input type={type} name={name} value={value} {...register(name)} />
      <label htmlFor={name}>{text}</label>
      {errors && errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};
