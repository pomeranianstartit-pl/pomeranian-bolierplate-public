import React from 'react';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object({
  example: yup.string().required('Pole example jest wymagane'),

  age: yup

    .number()

    .min(18, 'Musisz mieć więcej niż 18 lat')

    .max(67, 'Nie możesz mieć wiecej niż 67 lat')

    .required('Pole age jest wymagane'),
});

export const Forms = () => {
  const {
    register,

    handleSubmit,

    // watch,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('example')} />

      <p>{errors.example?.message}</p>

      <input {...register('age')} />

      {/* errors will return when field validation fails  */}

      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
};
