import React from 'react';
import './BasicForms.css';
import { useForm } from 'react-hook-form';

export function BasicForms() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data, 'dane w formularzu');

  console.log(watch('example'), 'watch and how it works');
  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* sekcja 1 */}
        <div>
          <h2>Zamówienie produktu</h2>
          <div>
            <select {...register('productType')}>
              <option value="frontend">Kurs front-end</option>
              <option value="backend">Kurs back-end</option>
              <option value="ux/ui">Kurs UX/UI</option>
            </select>
            {errors.productType && <span>Wybór produktu jest wymagany</span>}
          </div>

          <div>
            <label htmlFor="paymentMethod">Wybierz formę płatności</label>
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
                value="przelew tradycyjny"
                {...register('paymentMethod')}
              />
              <span>Przelew tradycyjny</span>
            </div>
            {errors.paymentMethod && <span>Wybór płatności jest wymagany</span>}
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
              {...register('name', { required: true })}
            />
            {errors.name && <span>Imie i nazwisko są wymagane</span>}
          </div>

          <div>
            <label htmlFor="nickname">Twój pseudonim*</label>
            <input
              id="nickname"
              placeholder="wpisz swój pseudonim"
              {...register('nickname', { required: true })}
            />
            {errors.nickname && <span>Pseudonim jest wymagany</span>}
          </div>

          <div>
            <label htmlFor="address">Adres do wysyłki*</label>
            <input
              id="address"
              type="address"
              placeholder="adres, na który mamy wysłać zamówienie"
              {...register('address', { required: true })}
            />
            {errors.address && <span>Adres do wysyłki jest wymagany</span>}
          </div>

          <div>
            <label htmlFor="email">Adres e-mail*</label>
            <input
              id="email"
              type="email"
              placeholder="jan.kowalski@gmail.com"
              {...register('email', { required: true })}
            />
            {errors.email && <span>Adres e-mail jest wymagany</span>}
          </div>

          <div>
            <label htmlFor="phone">Numer kontaktowy*</label>
            <input
              id="phone"
              type="telephone"
              placeholder="+48 888 888 888"
              {...register('phone', { required: true })}
            />
            {errors.phone && <span>Telefon jest wymagany</span>}
          </div>

          <div>
            <label htmlFor="description">Dodatkowe uwagi do zamówienia</label>
            <textarea
              id="description"
              placeholder="Jeśli masz jakieś uwagi, wpisz je tutaj..."
              {...register('description')}
            />
            {errors.description && <span></span>}
          </div>
        </div>

        {/* sekcja 3 */}
        <div>
          <h2>Zakładanie konta</h2>
          <div>
            <label htmlFor="createAccount">
              Chcę założyć konto razem z zamówieniem
            </label>
            <div>
              <input
                name="createAccount"
                type="checkbox"
                {...register('isCreateAccountChecked')}
              />
              <span>zakładam konto</span>
            </div>

            <label htmlFor="password">Moje hasło</label>
            <input
              id="password"
              type="password"
              placeholder="wpisz hasło"
              {...register('password')}
            />
            {errors.password && <span></span>}
          </div>

          <div>
            <label htmlFor="confirmPassword">Powtórz hasło</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="powtórz hasło"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <span></span>}
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
            {errors.isTermsChecked && <span></span>}
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
