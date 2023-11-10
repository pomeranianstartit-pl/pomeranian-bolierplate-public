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
    agreements: yup.boolean().oneOf([true], 'Pole obowiązkowe!'),
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
      paymentMethod: false,
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
      <div className="allform">
        <div className="onepart">
          <h2 className="h2form">ZAMÓWIENIE PRODUKTU</h2>
          <label>
            <div className="opisform">Wybierz produkt*</div>
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
            <div className="opisform">Wybierz formę płatności*</div>
            <div>
              <div>
                <div className="checkbox">
                  <input
                    type="radio"
                    value="blik"
                    aria-invalid={errors.paymentMethod ? 'true' : 'false'}
                    {...register('paymentMethod')}
                  />
                </div>
                Blik
              </div>

              <div>
                <div className="checkbox">
                  <input
                    type="radio"
                    value="przelew"
                    aria-invalid={errors.paymentMethod ? 'true' : 'false'}
                    {...register('paymentMethod')}
                  />
                </div>
                Przelew
              </div>
              <div>
                <div className="checkbox">
                  <input
                    type="radio"
                    value="paypal"
                    aria-invalid={errors.paymentMethod ? 'true' : 'false'}
                    {...register('paymentMethod')}
                  />
                </div>
                Paypal
              </div>
            </div>
          </label>
          {errors.paymentMethod && (
            <p role="alert">{errors.paymentMethod.message}</p>
          )}

          <label>
            <div className="opisform">Opcje dodatkowe do zamówienia</div>
            <div className="checkbox">
              <input type="checkbox" {...register('additionaloptions')} />
              Ustawienie środowiska
            </div>
            <div className="checkbox">
              <input type="checkbox" {...register('additionaloptions')} />
              intro do GitHub
            </div>
            <div className="checkbox">
              <input type="checkbox" {...register('additionaloptions')} />
              materiały dodatkowe
            </div>
          </label>
        </div>
        <div className="onepart">
          <h2 className="h2form">DANE DO REALIZACJI ZAMÓWIENIA</h2>
          <label>
            <div className="opisform">Imię i nazwisko*</div>
            <div className="inputtext">
              <input
                aria-invalid={errors.example ? 'true' : 'false'}
                {...register('example')}
              />
            </div>
          </label>
          {errors.example && (
            <p role="alert">{errors.exampleRequired.message}</p>
          )}
          <label>
            <div className="opisform">Twój pseudonim*</div>
            <div className="inputtext">
              <input
                aria-invalid={errors.exampleRequired ? 'true' : 'false'}
                {...register('exampleRequired')}
              />
            </div>
          </label>
          {errors.exampleRequired && (
            <p role="alert">{errors.exampleRequired.message}</p>
          )}
          <label>
            <div className="opisform">Adres do wysyłki*</div>
            <div className="inputtext">
              <input
                aria-invalid={errors.address ? 'true' : 'false'}
                {...register('address')}
              />
            </div>
          </label>
          {errors.address && <p role="alert">{errors.address.message}</p>}
          <label>
            <div className="opisform">Adres e-mail*</div>
            <div className="inputtext">
              <input
                aria-invalid={errors.mail ? 'true' : 'false'}
                {...register('mail')}
              />
            </div>
          </label>
          {errors.mail && <p role="alert">{errors.mail.message}</p>}
          <label>
            <div className="opisform">Numer kontaktowy*</div>
            <div className="inputtext">
              <input
                aria-invalid={errors.num ? 'true' : 'false'}
                {...register('num')}
              />
            </div>
          </label>
          {errors.num && <p role="alert">{errors.num.message}</p>}

          <label>
            <div className="opisform">Dodatkowe uwagi do zamówienia</div>
            <div className="textareatext">
              <textarea
                aria-invalid={errors.comments ? 'true' : 'false'}
                {...register('comments ')}
              />
            </div>
          </label>
        </div>
        <div className="onepart">
          <h2 className="h2form">ZAKŁADANIE KONTA</h2>
          <div className="opisform">Chcę założyć konto razem z zamówieniem</div>
          <label>
            <div className="checkbox">
              <input type="checkbox" {...register('account')} />
              Zakładam konto
            </div>
          </label>
          <label>
            <div className="opisform">Moje hasło</div>
            <div className="inputtext">
              <input type="password" />
            </div>
          </label>
          <label>
            <div className="opisform">Powtórz hasło</div>
            <div className="inputtext">
              <input type="password" />
            </div>
          </label>
        </div>
        <div className="onepart">
          <h2 className="h2form">ZGODY I NEWSLETTER</h2>
          <div className="opisform">
            Realizując zamówienie, akceptujesz regulamin naszego sklepu
          </div>
          <label>
            <div className="checkbox">
              <input type="checkbox" {...register('agreements')} />
              akceptuję regulamin*
            </div>
          </label>
          {errors.agreements && <p role="alert">{errors.agreements.message}</p>}

          <div className="opisform">
            Dołącz do naszego newslettera z promocjami dla naszych klientów
          </div>
          <label>
            <div className="checkbox">
              <input type="checkbox" {...register('newsletter')} />
              Zapisuję się na listę mailingową
            </div>
          </label>
        </div>
      </div>
      <div className="buttonrealizuj">
        <input
          type="submit"
          class="SKŁADAM ZAMÓWIENIE"
          value="SKŁADAM ZAMÓWIENIE"
        />
      </div>
    </form>
  );
};
