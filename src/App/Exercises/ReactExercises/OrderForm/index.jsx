import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './styles.css';

const schema = yup.object({
  name: yup.string().required('Pole obowiązkowe!'),
  nickname: yup.string().required('Pole obowiązkowe!'),
  adress: yup.string().required('Pole obowiązkowe!'),
  mail: yup
    .string()
    .email('Pole nie jest emailem')
    .required('Pole email jest wymagane!'),
  phoneNumber: yup.number().integer().min(9).required('Pole obowiązkowe!'),
  agreements: yup.boolean().oneOf([true], 'Pole obowiązkowe!'),
});

export const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      paymentMethod: 'przelew',
      devEnv: 'devEnv',
      extraMat: 'extraMat',
      agreements: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    console.log(errors, 'errors');
  });

  return (
    <div className="order-form-wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="order-form">
        <h3>ZAMÓWIENIE PRODUKTU</h3>

        <div className="order-form-product">
          <label className="order-form-label">Wybierz produkt*</label>
          <select {...register('product')}>
            <option value="frontend">kurs front-end</option>
          </select>
        </div>
        <div className="order-form-payment">
          <label className="order-form-label">Wybierz formę płatności*</label>
          <div>
            <div>
              <input type="radio" value="blik" {...register('paymentMethod')} />
              <label className="order-form-specifiq-label" htmlFor="blik">
                blik
              </label>
            </div>
          </div>
          <div>
            <div>
              <input
                type="radio"
                value="przelew"
                {...register('paymentMethod')}
              />
              <label className="order-form-specifiq-label" htmlFor="przelew">
                przelew tradycyjny
              </label>
            </div>
            <div>
              <input
                type="radio"
                value="paypal"
                {...register('paymentMethod')}
              />
              <label className="order-form-specifiq-label" htmlFor="paypal">
                paypal
              </label>
            </div>
          </div>
        </div>
        <div className="order-form-extras">
          <label htmlFor="" className="order-form-label">
            Opcje dodatkowe do zamówienia
          </label>
          <div>
            <input type="checkbox" {...register('devEnv')} />
            <label className="order-form-specifiq-label">
              ustawienie środowiska
            </label>
          </div>
          <div>
            <input type="checkbox" {...register('ghIntro')} />
            <label className="order-form-specifiq-label">intro do GitHub</label>
          </div>
          <div>
            <input type="checkbox" {...register('extraMat')} />
            <label className="order-form-specifiq-label">
              materiały dodatkowe
            </label>
          </div>
        </div>
        <h3>DANE DO REALIZACJI ZAMÓWIENIA</h3>
        <div>
          <div className="order-form-personalData">
            <label className="order-form-label" htmlFor="name">
              Imię i nazwisko*
            </label>
            <input
              placeholder="wpisz swoje imię i nazwisko"
              {...register('name')}
            />
          </div>

          <div className="order-form-personalData">
            <label className="order-form-label" htmlFor="nickname">
              Twój pseudonim*
            </label>
            <input
              placeholder="wpisz swój nickname"
              {...register('nickname')}
            />
          </div>
          <div className="order-form-personalData">
            <label className="order-form-label" htmlFor="adress">
              Adres do wysyłki*
            </label>
            <input
              placeholder="adres, na który mamy wysłać zamówienie"
              {...register('adress')}
            />
          </div>
          <div className="order-form-personalData">
            <label className="order-form-label" htmlFor="mail">
              Adres e-mail*
            </label>
            <input placeholder="jan.kowalski@gmail.com" {...register('mail')} />
          </div>
          <div className="order-form-personalData">
            <label className="order-form-label" htmlFor="phoneNumber">
              Numer kontaktowy*{' '}
            </label>
            <input placeholder="+48 888 888 888" {...register('phoneNumber')} />
          </div>
          <div className="order-form-personalData">
            <label className="order-form-label" htmlFor="notes">
              Dodatkowe uwagi do zamówienia
            </label>
            <textarea
              placeholder="Jeśli masz jakieś uwagi, wpisze je tutaj..."
              {...register('notes')}
            />
          </div>
        </div>
        <h3>ZAKŁADANIE KONTA</h3>
        <div className="order-form-newAccount">
          <label className="order-form-label" htmlFor="newAccount">
            Chcę założyć konto razem z zamówieniem
          </label>
          <div>
            <input type="checkbox" {...register('newAccount')} />
            <label className="order-form-specifiq-label" htmlFor="newAccount">
              zakładam konto
            </label>
          </div>

          <div className="order-form-newAccount">
            <label className="order-form-label" htmlFor="password">
              Moje hasło
            </label>
            <input placeholder="56ggW457hh#$" {...register('password')} />
          </div>
          <div className="order-form-newAccount">
            <label className="order-form-label" htmlFor="repeatPassword">
              Powtórz hasło
            </label>
            <input placeholder="56ggW457hh#$" {...register('repeatPassword')} />
          </div>
        </div>
        <h3>ZGODY I NEWSLETTER</h3>
        <div className="order-form-agreements">
          <label className="order-form-label">
            Realizując zamówienie, akceptujesz regulamin naszego sklepu
          </label>
          <div>
            <input type="checkbox" {...register('agreements')} />
            <label className="order-form-specifiq-label" htmlFor="agreements">
              akceptuję regulamin*
            </label>
          </div>
        </div>
        <div className="order-form-agreements">
          <label className="order-form-label">
            Dołącz do naszego newslettera z promocjami dla naszych klientów
          </label>
          <div>
            <input type="checkbox" {...register('newsletter')} />
            <label className="order-form-specifiq-label" htmlFor="agreements">
              zapisuję się na listę mailingową
            </label>
          </div>
        </div>
        <button className="order-form-btn" onSubmit={handleSubmit(onSubmit)}>
          SKŁADAM ZAMÓWIENIE
        </button>
      </form>
    </div>
  );
};
