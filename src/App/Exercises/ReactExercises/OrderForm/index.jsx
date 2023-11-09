import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './styles.css';

const schema = yup.object({});

export const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="order-form-wrapper">
      <h3>ZAMÓWIENIE PRODUKTU</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="order-form">
        <div>
          <label className="order-form-label">Wybierz produkt*</label>
          <select className="order-form-product" {...register('product')}>
            <option value="frontend">kurs front-end</option>
          </select>
        </div>
        <div>
          <label className="order-form-label">Wybierz formę płatności*</label>
          <div>
            <div className="order-form-payment">
              <input type="radio" value="blik" {...register('paymentMethod')} />
              <label htmlFor="">Blik</label>
            </div>

            <div>
              <input
                type="radio"
                value="przelew"
                {...register('paymentMethod')}
              />
              <label htmlFor="">Przelew</label>
            </div>
            <div>
              <input
                type="radio"
                value="paypal"
                {...register('paymentMethod')}
              />
              <label htmlFor="">Paypal</label>
            </div>
          </div>
        </div>
        <div className="order-form-extras">
          <label htmlFor="" className="order-form-label">
            Opcje dodatkowe do zamówienia
          </label>
          <div>
            <input type="checkbox" {...register('devEnv')} />
            <label>ustawienie środowiska</label>
          </div>
          <div>
            <input type="checkbox" {...register('ghIntro')} />
            <label>intro do GitHub</label>
          </div>
          <div>
            <input type="checkbox" {...register('extraMat')} />
            <label>materiały dodatkowe</label>
          </div>
        </div>
        <h3>DANE DO REALIZACJI ZAMÓWIENIA</h3>
        <div>
          <label htmlFor="">Imię i nazwisko*</label>
          <input
            placeholder="wpisz swoje imię i nazwisko"
            {...register('name')}
          />
        </div>
        <div>
          <label htmlFor="">Twój pseudonim*</label>
          <input placeholder="wpisz swój nickname" {...register('nickname')} />
        </div>
        <div>
          <label htmlFor="">Adres do wysyłki*</label>
          <input
            placeholder="adres, na który mamy wysłać zamówienie"
            {...register('adress')}
          />
        </div>
        <div>
          <label htmlFor="">Adres e-mail*</label>
          <input placeholder="jan.kowalski@gmail.com" {...register('mail')} />
        </div>
        <div>
          <label htmlFor="">Numer kontaktowy* </label>
          <input placeholder="+48 888 888 888" {...register('phoneNumber')} />
        </div>
        <div>
          <label htmlFor="">Dodatkowe uwagi do zamówienia</label>
          <input
            placeholder="Jeśli masz jakieś uwagi, wpisze je tutaj..."
            {...register('notes')}
          />
        </div>
        <h3>ZAKŁADANIE KONTA</h3>
        <div>
          <label htmlFor="">Chcę założyć konto razem z zamówieniem</label>
          <div>
            <input type="checkbox" {...register('newAccount')} />
            <label htmlFor="newAccount">zakładam konto</label>
          </div>
        </div>
        <div>
          <label htmlFor="password">Moje hasło</label>
          <input {...register('password')} />
        </div>
        <div>
          <label htmlFor="repeatPassword">Powtórz hasło</label>
          <input {...register('repeatPassword')} />
        </div>
        <h3>ZGODY I NEWSLETTER</h3>
        <div>
          <label>
            Realizując zamówienie, akceptujesz regulamin naszego sklepu
          </label>
          <div>
            <input type="checkbox" {...register('agreements')} />
            <label htmlFor="agreements">akceptuję regulamin*</label>
          </div>
        </div>
        <div>
          <label>
            Dołącz do naszego newslettera z promocjami dla naszych klientów
          </label>
          <div>
            <input type="checkbox" {...register('newsletter')} />
            <label htmlFor="agreements">zapisuję się na listę mailingową</label>
          </div>
        </div>
        <button>SKŁADAM ZAMÓWIENIE</button>
      </form>
    </div>
  );
};
