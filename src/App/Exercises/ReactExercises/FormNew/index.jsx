import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './style.css';

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
    address: yup.string().required('Pole address jest wymagane!'),
    num: yup
      .number()
      .typeError('To nie wygląda na numer telefonu')
      .positive('Numer telefonu nie może zaczynać się od minusa')
      .integer('Numer telefonu nie może zawierać kropek')
      .min(12)
      .required('Pole z numerem telefonu jest wymagane!'),
    product: yup.string().required('Pole z produktem jest wymagane!'),
    paymentMethod: yup.string().required('Forma płatności jest wymagana!'),
  })
  .required();

export const FormNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      example: 'Wpisz swoje imię i nazwisko',
      exampleRequired: 'Wojtek',
      address: 'adres na który mamy wysłać zamówienie',
      num: '+48 888 888 888',
      gender: 'other',
      mail: 'jan.kowalski@gmail.com',
      paymentMethod: '',
      agreements: false,
      product: '',
      additionaloptions: '',
      comments: 'Jeśli masz jakieś uwagi, wpisze je tutaj...',
      account: '',
      newsletter: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    console.log(errors, 'errors');
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>ZAMÓWIENIE PRODUKTU</h2>
      <label>
        <div>Wybierz produkt*</div>
        <select
          aria-invalid={errors.product ? 'true' : 'false'}
          {...register('product')}
        >
          <option value="kurs front-end">kurs front-end</option>
          <option value="kurs back-end">kurs back-end</option>
          <option value="kurs UI">kurs UI</option>
        </select>
      </label>
      {errors.product && <p role="alert">{errors.product.message}</p>}

      <label>
        <div>Wybierz formę płatności*</div>

        <div>
          <input
            type="radio"
            value="blik"
            aria-invalid={errors.paymentMethod ? 'true' : 'false'}
            {...register('paymentMethod')}
          />
          Blik
        </div>

        <div>
          <input
            type="radio"
            value="przelew"
            aria-invalid={errors.paymentMethod ? 'true' : 'false'}
            {...register('paymentMethod')}
          />
          Przelew
        </div>
        <div>
          <input
            type="radio"
            value="paypal"
            aria-invalid={errors.paymentMethod ? 'true' : 'false'}
            {...register('paymentMethod')}
          />
          Paypal
        </div>
      </label>
      {errors.paymentMethod && (
        <p role="alert">{errors.paymentMethod.message}</p>
      )}

      <label>
        <div>Opcje dodatkowe do zamówienia</div>
        <input type="checkbox" {...register('additionaloptions')} />
        Ustawienie środowiska
        <input type="checkbox" {...register('additionaloptions')} />
        intro do GitHub
        <input type="checkbox" {...register('additionaloptions')} />
        materiały dodatkowe
      </label>

      <h2>DANE DO REALIZACJI ZAMÓWIENIA</h2>
      <label>
        <div>Imię i nazwisko*</div>
        <input
          aria-invalid={errors.example ? 'true' : 'false'}
          {...register('example')}
        />
      </label>
      {errors.example && <p role="alert">{errors.exampleRequired.message}</p>}
      <label>
        <div>Twój pseudonim*</div>
        <input
          aria-invalid={errors.exampleRequired ? 'true' : 'false'}
          {...register('exampleRequired')}
        />
      </label>
      {errors.exampleRequired && (
        <p role="alert">{errors.exampleRequired.message}</p>
      )}
      <label>
        <div>Adres do wysyłki*</div>
        <input
          aria-invalid={errors.address ? 'true' : 'false'}
          {...register('address')}
        />
      </label>
      {errors.address && <p role="alert">{errors.address.message}</p>}
      <label>
        <div>Adres e-mail*</div>
        <input
          aria-invalid={errors.mail ? 'true' : 'false'}
          {...register('mail')}
        />
      </label>
      {errors.mail && <p role="alert">{errors.mail.message}</p>}
      <label>
        <div>Numer kontaktowy*</div>
        <input
          aria-invalid={errors.num ? 'true' : 'false'}
          {...register('num')}
        />
      </label>
      {errors.num && <p role="alert">{errors.num.message}</p>}

      <label>
        <div>Dodatkowe uwagi do zamówienia</div>
        <textarea
          aria-invalid={errors.comments ? 'true' : 'false'}
          {...register('comments ')}
        />
      </label>

      <h2>ZAKŁADANIE KONTA</h2>
      <div>Chcę założyć konto razem z zamówieniem</div>
      <label>
        <input type="checkbox" {...register('account')} />
        Zakładam konto
      </label>
      <label>
        <div>Moje hasło</div>
        <input type="password" />
      </label>
      <label>
        <div>Powtórz hasło</div>
        <input type="password" />
      </label>

      <h2>ZGODY I NEWSLETTER</h2>
      <div>Realizując zamówienie, akceptujesz regulamin naszego sklepu</div>
      <label>
        <input type="checkbox" {...register('agreements')} />
        Zgoda na przetwarzanie danych
      </label>
      {errors.agreements && <p role="alert">{errors.agreements.message}</p>}

      <div>Dołącz do naszego newslettera z promocjami dla naszych klientów</div>
      <label>
        <input type="checkbox" {...register('newsletter')} />
        Zapisuję się na listę mailingową
      </label>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
};
