import React from 'react';

// Forms
import { useForm } from 'react-hook-form';

// Validation
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 2 sposób importu -> musimy dodac wszystkie importy dot. walidacji,

// import { object, string, required} from "yup"

// Zastosowanie
// const schema = object({
//   address: string().required(),
// })

const phoneRegExp = /^\d{9}$/;

const schemaValidationValues = {
  // password: {...}
  passwordMinValue: 8,
};

const schemaValidation = {
  required: 'Pole jest wymagane',
  email: 'Musisz poda poprawny email!',
  boolean: 'To pole musi być zaznaczone lub nie',
  booleanRequired: 'To pole musi być zaznaczone',
  phone: 'Musisz podać poprawny numer telefonu',
  password: {
    required: 'Hasło jest wymagane',
    confirmRequired: 'Potwierdź hasło',
    samePassword: 'Hasło musi być takie same',
    minValue: schemaValidationValues.passwordMinValue,
    min: `Hasło musi zawierać więcej niż ${schemaValidationValues.passwordMinValue} znaków`,
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
      schemaValidation.password.getCharacterValidationError('małą litere')
    )
    .matches(
      /[A-Z]/,
      schemaValidation.password.getCharacterValidationError('dużą litere')
    ),
  confirmPassword: yup
    .string()
    .required(schemaValidation.password.confirmRequired)
    // use oneOf to match one of the values inside the array.
    // use "ref" to get the value of passwrod.
    .oneOf([yup.ref('password')], schemaValidation.password.samePassword),

  paymentMethod: yup.string().required(schemaValidation.required),
  phone: yup.string().matches(phoneRegExp, schemaValidation.phone),
  productType: yup.string().required(schemaValidation.required),
});

export function LibrariesForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log('!!! Dane w formularzu:', data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* sekcja 1 */}
      <div>
        <h2>Zamówienie produktu</h2>
        <div>
          <label htmlFor="productType">Wybierz produkt*</label>
          <select {...register('productType', { required: true })}>
            <option value="frontend">kurs front-end</option>
            <option value="backend">kurs backend-end</option>
            <option value="ux/ui">kurs UX/UI</option>
          </select>
          {errors.productType && <span>{errors.productType.message}</span>}
        </div>

        <div>
          <label htmlFor="paymentMethod">Wybierz formę płatności*</label>
          <div>
            <input value="blik" type="radio" {...register('paymentMethod')} />
            <span>blik</span>
            <input value="paypal" type="radio" {...register('paymentMethod')} />
            <span>paypal</span>
            <input
              value="transaction"
              type="radio"
              {...register('paymentMethod')}
            />
            <span>przelew tradycyjny</span>
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
            <span>ustawienie środowiska</span>
          </div>

          <div>
            <input
              name="orderInformations"
              type="checkbox"
              {...register('isGithubChecked')}
            />
            <span>intro do github</span>
          </div>

          <div>
            <input
              name="orderInformations"
              type="checkbox"
              {...register('isAdditionalDataChecked')}
            />
            <span>materiały dodatkowe</span>
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
          {/* {errors.name && <span>Nazwisko jest wymagane!</span>} */}
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
            {...register('address')}
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
            placeholder="888888888"
            {...register('phone')}
          />
          {errors.phone?.message}
        </div>

        <div>
          <label htmlFor="description">Dodatkowe uwagi do zamówienia</label>
          <textarea
            id="description"
            placeholder="jeśli masz jakieś uwagi, wpisz je tutaj..."
            {...register('description')}
          />
          {/* {errors.description && <span></span>} */}
        </div>
      </div>

      {/* sekcja 3 */}
      <div>
        <h2>Zakładanie konta</h2>
        <div>
          {/* htmlFor -> składania języka HTML i podstawowych formularzy */}
          <label htmlFor="createAccount">
            Chcę założyć konto razem z zamówieniem
          </label>
          {/* 
                Dzięki temu że mamy tutaj wpisane name i htmlFor w inpucie i label jako "createAccout" -> identyfikujemy
                te elementy !!! BEZPOŚREDNIO przy użyciu składni HTML'a !!!

                FUNKCJ
            */}
          <div>
            {/* name === htmlFor (z label) -> składania języka HTML i podstawowych formularzy */}

            <input
              name="createAccount"
              type="checkbox"
              // część odpowiedzialna za rejestracje inputa do naszego zastosowania przy użyciu biblioteki react-hook-form
              {...register('isCreateAccountChecked')}
            />
            <span>Zakładam konto</span>
          </div>
        </div>

        {/* TODO: add func to show/hide this inputs(password, confirmPassword) */}
        {/* ASK DESIGNER: dlaczego... */}
        <div>
          <label htmlFor="password">Moje hasło</label>
          <input
            type="password"
            id="password"
            placeholder="wpisz hasło"
            {...register('password')}
          />
          {errors.password?.message}
        </div>

        <div>
          <label htmlFor="confirmPassword">Powtórz hasło</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="wpisz swoje hasło ponownie"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && <span>(formatka dla walidacji)</span>}
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
  );
}
