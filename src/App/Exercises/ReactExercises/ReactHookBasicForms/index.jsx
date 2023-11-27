import { useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string('Wpisz imię jako tekst!').required('Imię jest wymagane!'),
  surname: yup.string().required(),
  gender: yup.string().oneOf(['female', 'other', 'male']).required(),
  password: yup.string().required(),
  agreements: yup.boolean().required().la,
  pets: yup.string().required(),
});

export const ReactHookBasicFroms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Imię </label>
        <input
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <input {...register('surname')} />

      <div>
        <label>Płeć</label>
        <div>
          <input
            id="male"
            type="radio"
            name="gender"
            value="male"
            {...register('gender')}
          />
          <label htmlFor="male">Mężczyzna</label>
        </div>

        <div>
          <input
            id="female"
            type="radio"
            name="gender"
            value="female"
            {...register('gender')}
          />
          <label htmlFor="female">Kobieta</label>
        </div>

        <div>
          <input
            id="other"
            type="radio"
            name="gender"
            value="other"
            {...register('gender')}
          />
          <label htmlFor="other">Inna</label>
        </div>
      </div>
      <input type="submit" value="send request" />
    </form>
  );
};
