import React from 'react';
import './BasicForms.css';

// Forms
import { useForm } from 'react-hook-form';

// Validation
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// Drugi sposób importu z yup - konkretne elemety, a nie wszystko
// import { object, string, required } from "yup"
// Wówczas zastosowanie wygląda tak:
// const schema = object({
// address: string().required(),
// })

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schemaValidationValues = {
  passwordMinValue: 8,
};

const schemaValidation = {
  required: 'To pole jest wymagane',
  email: 'Musisz podać poprawny adres e-mail',
  boolean: 'To pole musi być zaznaczone lub nie',
  booleanRequired: 'To pole musi być zaznaczone',
  phone: 'Musisz podać poprawny numer telefonu',
  password: {
    required: 'Hasło jest wymagane',
    confirmRequired: 'Potwierdź hasło',
    samePassword: 'Hasło musi być takie samo',
    minValue: schemaValidationValues.passwordMinValue,
    min: `Hasło musi zawierać więcej niż ${schemaValidationValues.minValue} znaków`,
    getCharacterValidationError: (str) => {
      return `Twoje hasło musi zawierać przynajmniej 1 ${str}`;
    },
  },
};

const schema = yup.object({
  address: yup.string().required(schemaValidation.required),
  description: yup.string(),
  email: yup
    .string()
    .email(schemaValidation.email)
    .required(schemaValidation.required),
  isAdditionalDataChecked: yup.boolean(schemaValidation.boolean),
  isCreateAccountChecked: yup.boolean(schemaValidation.boolean),
  isEnvChecked: yup.boolean(schemaValidation.boolean),
  isGithubChecked: yup.boolean(schemaValidation.boolean),
  isNewsletterChecked: yup.boolean(schemaValidation.boolean),
  isTermsChecked: yup
    .boolean(schemaValidation.boolean)
    .oneOf([true], schemaValidation.booleanRequired),
  name: yup.string().required(schemaValidation.required),
  nickname: yup.string().required(schemaValidation.required),
  // password i confirmPassword są wklejone z neta
  password: yup
    .string()
    .required(schemaValidation.password.required)
    // check minimum characters
    .min(schemaValidation.password.minValue, schemaValidation.password.min)
    // different error messages for different requirements
    .matches(
      /[0-9]/,
      schemaValidation.password.getCharacterValidationError('liczbę')
    )
    .matches(
      /[a-z]/,
      schemaValidation.password.getCharacterValidationError('małą literę')
    )
    .matches(
      /[A-Z]/,
      schemaValidation.password.getCharacterValidationError('dużą literę')
    ),
  confirmPassword: yup
    .string()
    .required(schemaValidation.password.confirmRequired)
    // use oneOf to match one of the values inside the array.
    // use "ref" to get the value of passwrod.
    .oneOf([yup.ref('password')], schemaValidation.password.samePassword),
  paymentMethod: yup.string().required(),
  phone: yup.string().matches(phoneRegExp, schemaValidation.phone),
  productType: yup.string().required(),
});

export function BasicForms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data, 'dane w formularzu');

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* sekcja 1 */}
        <div>
          <h2>Zamówienie produktu</h2>
          <div>
            <label htmlFor="productType">Wybierz produkt*</label>
            <select {...register('productType', { required: true })}>
              <option value="frontend">Kurs front-end</option>
              <option value="backend">Kurs back-end</option>
              <option value="ux/ui">Kurs UX/UI</option>
            </select>
            {errors.productType?.message}
          </div>

          <div>
            <label htmlFor="paymentMethod">Wybierz formę płatności*</label>
            <div>
              <input type="radio" value="blik" {...register('paymentMethod')} />
              <span>Blik</span>
              <input
                type="radio"
                value="paypal"
                {...register('paymentMethod')}
              />
              <span>paypal</span>
              <input
                type="radio"
                value="transaction"
                {...register('paymentMethod')}
              />
              <span>Przelew tradycyjny</span>
            </div>
            {errors.paymentMethod?.message}
          </div>

          <div>
            <label htmlFor="orderInformations">
              Opcje dodatkowe do zamówienia
            </label>
            <div>
              <input
                name="orderInformations"
                type="checkbox"
                {...register('isEnvChecked')}
              />
              <span>Ustawienia środowiska</span>
            </div>

            <div>
              <input
                name="orderInformations"
                type="checkbox"
                {...register('isGithubChecked')}
              />
              <span>Intro do github</span>
            </div>

            <div>
              <input
                name="orderInformations"
                type="checkbox"
                {...register('isAdditionalDataChecked')}
              />
              <span>Materiały dodatkowe</span>
            </div>
          </div>
        </div>

        {/* sekcja 2 */}

        <div>
          <h2>Dane do realizacji zamówienia</h2>
          <div>
            <label htmlFor="name">Imię i nazwisko*</label>
            <input
              id="name"
              type="name"
              placeholder="wpisz swoje imię i nazwisko"
              {...register('name')}
            />
            {errors.name?.message}
          </div>

          <div>
            <label htmlFor="nickname">Twój pseudonim*</label>
            <input
              id="nickname"
              placeholder="wpisz swój pseudonim"
              {...register('nickname')}
            />
            {errors.nickname?.message}
          </div>

          <div>
            <label htmlFor="address">Adres do wysyłki*</label>
            <input
              id="address"
              type="address"
              placeholder="adres, na który mamy wysłać zamówienie"
              {...register('address', { required: true })}
            />
            {errors.address?.message}
          </div>

          <div>
            <label htmlFor="email">Adres e-mail*</label>
            <input
              id="email"
              type="email"
              placeholder="jan.kowalski@gmail.com"
              {...register('email')}
            />
            {errors.email?.message}
          </div>

          <div>
            <label htmlFor="phone">Numer kontaktowy*</label>
            <input
              id="phone"
              type="tel"
              placeholder="888 888 888"
              {...register('phone')}
            />
            {errors.phone?.message}
          </div>

          <div>
            <label htmlFor="description">Dodatkowe uwagi do zamówienia</label>
            <textarea
              id="description"
              placeholder="Jeśli masz jakieś uwagi, wpisz je tutaj..."
              {...register('description')}
            />
            {/* {errors.description && <span></span>} */}
          </div>
        </div>

        {/* sekcja 3 */}
        <div>
          <h2>Zakładanie konta</h2>
          <div>
            {/* htmlFor -> składnia języka HTML i podstawowych formularzy */}
            <label htmlFor="createAccount">
              Chcę założyć konto razem z zamówieniem
            </label>

            <div>
              {/* name === htmlFor -> składnia języka HTML i podstawowych formularzy */}
              <input
                name="createAccount"
                type="checkbox"
                // część odpowiedzialna za rejestracje inputa do naszego zastosowania przy użyciu biblioteki react-hook-form
                {...register('isCreateAccountChecked')}
              />
              <span>zakładam konto</span>
            </div>

            {/* TODO: add func to show/hide inputs (password, confirmPassword) */}
            <label htmlFor="password">Moje hasło</label>
            <input
              id="password"
              type="password"
              placeholder="wpisz hasło"
              {...register('password')}
            />
            {errors.password?.message}
          </div>

          <div>
            <label htmlFor="confirmPassword">Powtórz hasło</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="powtórz hasło"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword?.message}
          </div>
        </div>

        {/* sekcja 4 */}
        <div>
          <h2>Zgody i newsletter</h2>
          <div>
            <label htmlFor="terms">
              Realizując zamówienie, akceptujesz regulamin naszego sklepu
            </label>
            <div>
              <input
                name="terms"
                type="checkbox"
                {...register('isTermsChecked')}
              />
              <span>akceptuję regulamin*</span>
            </div>
            {errors.isTermsChecked?.message}
          </div>

          <div>
            <label htmlFor="newsletter">
              Dołącz do naszego newslettera z promocjami dla naszych klientów
            </label>
            <div>
              <input
                name="newsletter"
                type="checkbox"
                {...register('isNewsletterChecked')}
              />
              <span>zapisuję się na listę mailingową</span>
            </div>
          </div>
        </div>

        <button type="submit">składam zamówienie</button>
      </form>
    </section>
  );
}

// Na potrzeby późniejszych CSS'ów wprowadzamy taki zapis
// {
//   errors.productType && <span>{errors.productType.message}</span>
// }
