import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './styles.css';

const schema = yup
  .object({
    example: yup.string().required('Pole example jest wymagane!'),
    exampleRequired: yup
      .string()
      .required('Pole exampleRequired jest wymagane!'),
    mail: yup
      .string()
      .email('Pole nie jest emailem')
      .required('Pole mail jest wymagane!'),
    agreements: yup.boolean().oneOf([true], 'Pole agreements jest wymagane!'),
  })
  .required();

export const Exercise = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      example: 'Szymon',
      exampleRequired: 'Test value',
      gender: 'other',
      mail: '',
      paymentMethod: '',
      agreements: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    console.log(errors, 'errors');
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('example')} />

      <input
        aria-invalid={errors.exampleRequired ? 'true' : 'false'}
        {...register('exampleRequired')}
      />
      {errors.exampleRequired && (
        <p role="alert">{errors.exampleRequired.message}</p>
      )}

      <select {...register('gender')}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

      <div>
        <div>
          <input type="radio" value="blik" {...register('paymentMethod')} />
          Blik
        </div>

        <div>
          <input type="radio" value="przelew" {...register('paymentMethod')} />
          Przelew
        </div>
        <div>
          <input type="radio" value="paypal" {...register('paymentMethod')} />
          Paypal
        </div>
      </div>

      <div>
        <input type="checkbox" {...register('agreements')} />
        Zgoda na przetwarzanie danych
      </div>
      {errors.agreements && <p role="alert">{errors.agreements.message}</p>}

      <input
        aria-invalid={errors.mail ? 'true' : 'false'}
        {...register('mail')}
      />
      {errors.mail && <p role="alert">{errors.mail.message}</p>}

      <input type="submit" />
    </form>
  );
};