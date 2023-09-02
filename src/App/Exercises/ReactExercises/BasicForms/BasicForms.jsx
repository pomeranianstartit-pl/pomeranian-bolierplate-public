import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './styles.css';

const schemaValidationRegex = {
  phone: /^\d{9}$/,
  password: {
    smallLetters: /[a-z]/,
    bigLetters: /[A-Z]/,
    numbers: /[0-9]/,
  },
};

const schemaValidationValues = {
  password: {
    min: 8,
  },
};

const schemaValidationMessage = {
  required: 'Pole jest wymagane',
  boolean: 'To pole musi być zaznaczone lub nie',

  email: 'Wpisz poprawny adres email',
  phone: 'Wpisz poprawny numer telefonu',
  password: {
    min: `Hasło musi mieć minimum ${schemaValidationValues.password.min} znaków`,
    smallLetters: 'Hasło musi zawierać małe litery',
    bigLetters: 'Hasło musi zawierać duże litery',
    numbers: 'Hasło musi zawierać cyfry',
    confirmPassword: 'Hasła muszą być takie same',
  },
};

const schema = yup.object({
  // Zamówienie produktu
  productType: yup.string().required(schemaValidationMessage.required),
  paymentMethod: yup.string().required(schemaValidationMessage.required),
  isEnvChecked: yup.boolean(schemaValidationMessage.boolean),
  isGithubChecked: yup.boolean(schemaValidationMessage.boolean),
  isAdditionalDataChecked: yup.boolean(schemaValidationMessage.boolean),

  // Dane do realizacji zamówienia
  name: yup.string().required(schemaValidationMessage.required),
  nickname: yup.string().required(schemaValidationMessage.required),
  address: yup.string().required(schemaValidationMessage.required),
  email: yup
    .string()
    .email(schemaValidationMessage.email)
    .required(schemaValidationMessage.required),
  phone: yup
    .string()
    .matches(schemaValidationRegex.phone, schemaValidationMessage.phone)
    .required(schemaValidationMessage.required),
  description: yup.string(),

  // Zakładanie konta
  isCreatedAccountChecked: yup.boolean(schemaValidationMessage.boolean),
  password: yup
    .string()
    .required(schemaValidationMessage.required)
    .min(
      schemaValidationValues.password.min,
      schemaValidationMessage.password.min
    )
    .matches(
      schemaValidationRegex.password.smallLetters,
      schemaValidationMessage.password.smallLetters
    )
    .matches(
      schemaValidationRegex.password.bigLetters,
      schemaValidationMessage.password.bigLetters
    )
    .matches(
      schemaValidationRegex.password.numbers,
      schemaValidationMessage.password.numbers
    ),
  confirmPassword: yup
    .string()
    .required(schemaValidationMessage.required)
    .oneOf(
      [yup.ref('password')],
      schemaValidationMessage.password.confirmPassword
    ),

  // Zgody i newsletter
  isTermsChecked: yup
    .boolean(schemaValidationMessage.boolean)
    .oneOf([true], schemaValidationMessage.required),
  isNewsletterChecked: yup.boolean(schemaValidationMessage.boolean),
});

export const BasicForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    console.log('submit');
  };
  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="basic-form--border">
          <div className="basic-form--content">
            <section>
              <h2 className="basic-form--header">Zamówienie Produktu</h2>
              <div>
                <label htmlFor="productType" className="basic-form--label">
                  Wybierz produkt*
                </label>
                <select
                  {...register('productType')}
                  className="basic-form--input-text"
                  name="productType"
                >
                  <option value="frontend">kurs front-end</option>
                  <option value="weekendowy">Kurs Weekendowy</option>
                  <option value="wieczorowy">Kurs Wieczorowy</option>
                </select>
                <div className="basic-form--errormessage">
                  {errors.productType && <p>{errors.productType.message}</p>}
                </div>
              </div>

              <div>
                <div className="basic-form--checklist">
                  <label className="basic-form--label">
                    Wybierz formę płatności*
                  </label>
                  <label>
                    <input
                      {...register('paymentMethod')}
                      type="radio"
                      value="blik"
                    />
                    <span>blik</span>
                  </label>
                  <label>
                    <input
                      {...register('paymentMethod')}
                      type="radio"
                      value="paypal"
                    />
                    <span>paypal</span>
                  </label>
                  <label>
                    <input
                      {...register('paymentMethod')}
                      type="radio"
                      value="przelew-tradycyjny"
                    />
                    <span>przelew tradycyjny</span>
                  </label>
                </div>
                <div className="basic-form--errormessage">
                  {errors.paymentMethod && (
                    <p>{errors.paymentMethod.message}</p>
                  )}
                </div>
              </div>

              <div className="basic-form--checklist">
                <label htmlFor="orderInformation" className="basic-form--label">
                  Opcje dodatkowe do zamówienia
                </label>
                <label>
                  <input
                    {...register('isEnvChecked')}
                    type="checkbox"
                    name="srodowisko"
                  />
                  ustawienie środowiska
                </label>
                <label>
                  <input
                    {...register('isGithubChecked')}
                    type="checkbox"
                    name="github"
                  />
                  intro do GitHub
                </label>
                <label>
                  <input
                    {...register('isAdditionalDataChecked')}
                    type="checkbox"
                    name="dodatkowe"
                  />
                  materiały dodatkowe
                </label>
              </div>
            </section>

            <section>
              <div>
                <h2 className="basic-form--header">
                  Dane Do Realizacji Zamówienia
                </h2>
                <div>
                  <div>
                    <label htmlFor="name" className="basic-form--label">
                      Imię i nazwisko*
                    </label>
                    <input
                      {...register('name')}
                      className="basic-form--input-text"
                      name="name"
                      type="text"
                      placeholder="wpisz swoje imię i nazwisko"
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    <div className="basic-form--errormessage">
                      {errors.name && <p>{errors.name.message}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="nickname" className="basic-form--label">
                      Twój pseudonim*
                    </label>
                    <input
                      {...register('nickname')}
                      className="basic-form--input-text"
                      name="nickname"
                      type="text"
                      placeholder="wpisz swój psuedonim"
                      aria-invalid={errors.nickname ? 'true' : 'false'}
                    />
                    <div className="basic-form--errormessage">
                      {errors.nickname && <p>{errors.nickname.message}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="address" className="basic-form--label">
                      Adres do wysyłki*
                    </label>
                    <input
                      {...register('address')}
                      className="basic-form--input-text"
                      name="address"
                      type="text"
                      placeholder="adres, na który mamy wysłać zamówienie"
                      aria-invalid={errors.address ? 'true' : 'false'}
                    />
                    <div className="basic-form--errormessage">
                      {errors.address && <p>{errors.address.message}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="email" className="basic-form--label">
                      Adres e-mail*
                    </label>
                    <input
                      {...register('email')}
                      className="basic-form--input-text"
                      name="email"
                      type="email"
                      placeholder="jan.kowalski@gmail.com"
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    <div className="basic-form--errormessage">
                      {errors.email && <p>{errors.email.message}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="phone" className="basic-form--label">
                      Numer kontaktowy*
                    </label>
                    <input
                      {...register('phone')}
                      className="basic-form--input-text"
                      name="phone"
                      type="tel"
                      placeholder="+48 888 888 888"
                      aria-invalid={errors.phone ? 'true' : 'false'}
                    />
                    <div className="basic-form--errormessage">
                      {errors.phone && <p>{errors.phone.message}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <p htmlFor="description" className="basic-form--label">
                    Dodatkowe uwagi do zamówienia
                  </p>
                  <textarea
                    {...register('description')}
                    className="basic-form--textarea"
                    name="description"
                    rows="10"
                    placeholder="Jeśli masz jakieś uwagi, wpisze je tutaj..."
                    aria-invalid={errors.description ? 'true' : 'false'}
                  />
                  <div className="basic-form--errormessage">
                    {errors.description && <p>{errors.description.message}</p>}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div>
                <h2 className="basic-form--header">Zakładanie Konta</h2>
                <div>
                  <div className="basic-form--accountarea">
                    <p htmlFor="createAccount" className="basic-form--label">
                      Chcę założyć konto razem z zamówieniem
                    </p>
                    <input
                      {...register('isCreatedAccountChecked')}
                      className="basic-form--input-account"
                      name="createAccount"
                      type="checkbox"
                    />
                    <span>zakładam konto</span>
                  </div>
                </div>
                <div>
                  <div className="basic-form--accountarea">
                    <label htmlFor="password" className="basic-form--label">
                      Moje hasło
                    </label>
                    <input
                      {...register('password')}
                      name="password"
                      className="basic-form--input-text"
                      type="password"
                      placeholder="56ggW457hh#$"
                      aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    <div className="basic-form--errormessage">
                      {errors.password && <p>{errors.password.message}</p>}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="basic-form--accountarea">
                    <label
                      htmlFor="confirmPassword"
                      className="basic-form--label"
                    >
                      Powtórz hasło
                    </label>
                    <input
                      {...register('confirmPassword')}
                      name="confirmPassword"
                      className="basic-form--input-text"
                      type="password"
                      placeholder="56ggW457hh#$"
                      aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                    />
                    <div className="basic-form--errormessage">
                      {errors.confirmPassword && (
                        <p>{errors.confirmPassword.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div>
                <h2 className="basic-form--header">Zgody i Newsletter</h2>
                <div>
                  <div className="basic-form--checklist">
                    <label htmlFor="terms" className="basic-form--label">
                      Realizując zamówienie, akceptujesz regulamin naszego
                      sklepu
                    </label>
                    <div className="basic-form--newsletter">
                      <label>
                        <input
                          {...register('isTermsChecked')}
                          className="basic-form--input"
                          name="terms"
                          type="checkbox"
                          aria-invalid={
                            errors.isTermsChecked ? 'true' : 'false'
                          }
                        />
                        <span className="basic-form--errormessage">
                          akceptuję regulamin*
                        </span>
                      </label>
                      <div className="basic-form--errormessage">
                        {errors.isTermsChecked && (
                          <p>{errors.isTermsChecked.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="basic-form--checklist">
                    <label htmlFor="newsletter" className="basic-form--label">
                      Dołącz do naszego newslettera z promocjami dla naszych
                      klientów
                    </label>
                    <div className="basic-form--newsletter">
                      <label>
                        <input
                          {...register('isNewsletterChecked')}
                          className="basic-form--input"
                          type="checkbox"
                          name="newsletter"
                        />
                        <span>zapisuję się na listę mailingową</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div>
                <button type="submit" className="basic-form--button">
                  SKŁADAM ZAMÓWIENIE
                </button>
              </div>
            </section>
          </div>
        </div>
      </form>
    </div>
  );
};
