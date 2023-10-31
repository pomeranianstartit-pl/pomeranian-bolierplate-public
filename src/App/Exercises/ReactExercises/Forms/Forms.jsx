import React from 'react';

import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object({
  // product: yup.required('To pole jest wymagane!'),
  paymentForm: yup.mixed().required('To pole jest wymagane!'),
  additionalSettings: yup.mixed().required('To pole jest wymagane!'),
  nameAndSurname: yup.string().required('To pole jest wymagane!'),
  nick: yup.string().required('To pole jest wymagane!').max(20),
  mail: yup.string().required('To pole jest wymagane!'),
  phoneNo: yup
    .string('Numer telefonu musi być liczbą')
    .required('To pole jest wymagane!')
    .matches(/^\d{9}$/, 'Numer telefonu musi składać się z 9 liczb'),
  mailingList: yup.boolean(),
  acceptReg: yup.boolean().oneOf([true], 'Zgoda jest wymagana!'),
  additionalNotes: yup.string(),
  newAccount: yup.boolean(),
  password: yup.string().when('newAccount', {
    is: (value) => {
      // console.log(value);
      return value;
    },
    then: () =>
      yup
        .string()
        .min(6, 'hasło musi zawierać 6 znaków')
        .matches(/[a-z]/, 'hasło musi zawierać małe litery')
        .matches(/[A-Z]/, 'hasło musi zawierać duże litery')
        .matches(/\d/, 'hasło musi zawierać cyfry'),
  }),
  confirmPassword: yup.string().when('newAccount', {
    is: (value) => {
      // console.log(value);
      return value;
    },
    then: () =>
      yup
        .string()
        .required('Pole jest wymagane!')
        .oneOf([yup.ref('password')]),
  }),
});

// const boxChecked = () =>{
//    if (boxChecked) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// }

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
  console.log(errors);

  return (
    <>
      <div className="form-exercise">
        <h4>ZAMÓWIENIE PRODUKTU</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="form-label">Wybierz produkt:</label>
          <br />
          <select id="product" {...register('product')}>
            <option value="">Select...</option>
            <option value="front-end-course">kurs front-end</option>
          </select>
          <br />
          <fieldset>
            <legend htmlFor="payment-form" {...register('paymentForm')}>
              Wybierz formę płatności*
            </legend>
            <br />
            <input type="radio" value="blik" />
            <label htmlFor="blik">blik</label> <br />
            <input type="radio" value="paypal" />
            <label htmlFor="paypal">paypal</label>
            <br />
            <input type="radio" value="traditional-transfer" />
            <label htmlFor="traditional-transfer">przelew tradycyjny</label>
            <br />
            <p>{errors.paymentForm?.message}</p>
          </fieldset>
          <fieldset>
            <legend
              htmlFor="additional-settings"
              {...register('additionalSettings')}
            >
              Opcje dodatkowe do zamówienia
            </legend>
            <div>
              <input type="checkbox" value="environment-setting" />
              <label htmlFor="environment-setting">ustawienie środowiska</label>
            </div>
            <div>
              <input type="checkbox" value="git-intro" />
              <label htmlFor="git-intro">intro do GitHub</label>
            </div>
            <div>
              <input type="checkbox" value="addictional-materials" />
              <label htmlFor="additional-materials">materiały dodatkowe</label>
            </div>
            <p>{errors.additionalSettings?.message}</p>
          </fieldset>
          <fieldset>
            <legend htmlFor="data-for-order-fulfillment">
              Dane do realizcji zamówienia
            </legend>
            <br />
            <label htmlFor="name-and-surname">Imie i nazwisko*</label>
            <br />
            <input {...register('nameAndSurname')} />
            <p>{errors.nameAndSurname?.message}</p>
            <label htmlFor="nick">Twój pseudonim*</label>
            <br />
            <input {...register('nick')} />
            <p>{errors.nick?.message}</p>
            <label htmlFor="mail">Adres e-mail*</label>
            <br />
            <input {...register('mail')} />
            <p>{errors.mail?.message}</p>
            <label htmlFor="phoneNo">Numer kontaktowy</label>
            <br />
            <input {...register('phoneNo')} />
            <p>{errors.phoneNo?.message}</p>
            <label htmlFor="additional-notes">
              Dodatkowe uwagi do zamówienia
            </label>{' '}
            <br />
            <input {...register('addictionalNotes')} /> <br />
          </fieldset>

          <fieldset>
            <legend htmlFor="new-account">ZAKŁADANIE KONTA</legend>
            <div>
              <label htmlFor="register">
                Chce założyć konto razem z zamówieniem
              </label>
              <input type="checkbox" {...register('newAccount')} />
            </div>{' '}
            <label htmlFor="password">Hasło</label> <br />
            <input
              type="text"
              placeholder="password"
              {...register('password')}
            />
            <p>{errors.password?.message}</p>
            <br />
            <label htmlFor="confirmPassword">Powtórz hasło:</label> <br />
            <input
              type="text"
              placeholder="confirmPassword"
              {...register('confirmPassword')}
            />
            <p>{errors.confirmPassword?.message}</p>
            <br />
          </fieldset>

          <fieldset>
            <legend htmlFor="name">ZGODY I NEWSLETTER</legend>
            <br />
            <b>Realizując zamówienie, akceptujesz regulamin naszego sklepu</b>
            <div>
              <input
                {...register('acceptReg')}
                type="checkbox"
                value="acceptReg"
              />
              <label htmlFor="accept-regulation">akceptuje regulamin*</label>{' '}
              <p>{errors.acceptReg?.message}</p>
              <br />
            </div>
            <b>
              Dołącz do naszego newslettera z promocjami dla naszych klientów
            </b>
            <div>
              <input
                {...register('mailingList')}
                type="checkbox"
                value="mailingList"
              />
              <label htmlFor="mailingList">
                zapisuję się na listę mailingową
              </label>
            </div>
          </fieldset>
          <button
            className="red-button"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            SKŁADAM ZAMÓWIENIE
          </button>
        </form>
      </div>
    </>
  );
};
