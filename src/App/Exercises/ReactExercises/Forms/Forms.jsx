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

    watch,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  const value = 'wybierz';
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>&lt; FORMULARZ ZAMÓWIENIA</h3>
      <h3>ZAMÓWIENIE PRODUKTU</h3>
      <fieldset>
        <legend>Wybierz produkt *</legend>

        <select {...register('course')}>
          <option value="" disable selected hidden>
            Wybierz kurs
          </option>
          <option value="kurs front-end">kurs front-end</option>
          <option value="kurs back-end">kurs back-end</option>
          <option value="kurs C++">kurs C++</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Wybierz formę płatności*</legend>
        <label htmlFor="field-blik">
          <input
            {...register('payment')}
            type="radio"
            name="payForm"
            value="blik"
            id="field-blik"
          />
          Blik
        </label>
        <br />
        <label htmlFor="field-paypal">
          <input
            {...register('payment')}
            type="radio"
            name="payForm"
            value="paypal"
            id="field-paypal"
          />
          PayPal
        </label>
        <br />
        <label htmlFor="field-przelew">
          <input
            {...register('payment')}
            type="radio"
            name="payForm"
            value="przelew"
            id="field-przelew"
          />
          przelew tradycyjny
        </label>
      </fieldset>
      <br />

      <p>Opcje dodatkowe do zamówienia</p>

      <label>
        <input type="checkbox" {...register('checkbox')} />
        <span>ustawienie środowiska</span>
      </label>
      <br />
      <label>
        <input type="checkbox" {...register('checkbox')} />
        <span>intro do GitHub</span>
      </label>
      <br />
      <label>
        <input type="checkbox" {...register('checkbox')} />
        <span>materiały dodatkowe</span>
      </label>

      <br />

      <h3>DANE DO REALIZACJI ZAMÓWIENIA</h3>
      <p>Twój pseudonim*</p>
      <input placeholder={'Twój pseudonim'} {...register('pseudo')} />

      <p>Adres do wysyłki*</p>
      <input
        placeholder={'adres, na który mamy wysłać zamówienie'}
        {...register('address')}
      />

      <p>Adres e-mail*</p>
      <input placeholder={'jan.kowalski@gmail.com'} {...register('email')} />
      <p>Numer kontaktowy*</p>
      <input placeholder={'+48 888 888 888'} {...register('phoneNumber')} />

      <p>Dodatkowe usługi do zamówienia</p>
      <input
        placeholder={'Jeśli masz jakieś uwagi, wpisz je tutaj...'}
        {...register('remarks')}
      />
      <h3>ZAKŁADANIE KONTA</h3>

      <fieldset>
        <legend>Chcę założyć konto razem z zamówieniem</legend>

        <label>
          <input type="checkbox" {...register('checkboxNewCount')} />
          <span>zakładam konto</span>
        </label>
        <br />
        <p>Moje hasło</p>
        <input placeholder={'56ggW457hh#$'} {...register('password')} />
        <br />

        <p>Powtórz hasło</p>
        <input placeholder={'56ggW457hh#$'} {...register('passwordRepeat')} />
      </fieldset>

      <fieldset>
        <legend>ZGODY I NEWSLETTER</legend>
        <p>Realizując zamówienie, akceptujesz regulamin naszego sklepu</p>
        <label>
          <input type="checkbox" {...register('checkboxNewCount')} />
          <span>akceptuje regulamin*</span>
        </label>
        <br />
        <br />
        <p>Dołącz do naszego newslettera z promocjami dla naszych klientów</p>
        <label>
          <input type="checkbox" {...register('checkboxNewCount')} />
          <span>zapisuję się na listę mailingową</span>
        </label>
      </fieldset>
      <br />
      <br />
      <br />

      <br />
      <br />

      <input {...register('example')} />

      <p>{errors.example?.message}</p>

      <input {...register('age')} />

      {/* errors will return when field validation fails  */}

      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
};
